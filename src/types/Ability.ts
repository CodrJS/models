import {
  MongoAbility,
  MongoQuery,
  createMongoAbility,
  AbilityBuilder,
  createAliasResolver,
  InferSubjects,
  ExtractSubjectType,
} from "@casl/ability";
import type { JwtPayload } from "./";
import type { UserRoleType } from "./User";
import type { Base } from "../entities/Base";

// setup action and subject types for ability
export type ActionType =
  | "create"
  | "delete"
  | "read"
  | "update"
  | "manage" // all CRUD ops
  | "edit" // all CRUD ops except delete
  | "manipulate"; // all CRUD ops except read

export interface IModelKind<K extends string = string> {
  kind: K;
}

// define what an ability is using the action and subject types
export type Ability<Model extends IModelKind | Base> = MongoAbility<
  [ActionType, InferSubjects<Model>],
  MongoQuery<Omit<Model, "kind">>
>;

// define permissions; used to create an ability
export type DefinePermissions<Model extends IModelKind | Base> = (
  user: JwtPayload,
  builder: AbilityBuilder<Ability<Model>>,
) => void;

export type Permissions<Model extends IModelKind | Base> = Record<
  UserRoleType,
  DefinePermissions<Model>
>;

// export a function for defining an ability using generics.
export const DefineAbility = function DefineAbility<
  Model extends IModelKind | Base,
>(user: JwtPayload, permissions: Permissions<Model>): Ability<Model> {
  const builder = new AbilityBuilder<Ability<Model>>(createMongoAbility);

  if (typeof permissions[user.role] === "function") {
    permissions[user.role](user, builder);
  } else {
    throw new Error(
      `Trying to use unsupported role "${user.role}" in ability.`,
    );
  }

  return builder.build({
    resolveAction,
    detectSubjectType: (obj: Model) => {
      if (isModel(obj)) {
        return obj.kind as ExtractSubjectType<Model>;
      } else {
        return obj.constructor.name as ExtractSubjectType<Model>;
      }
    },
  });
};

function isModel(obj: any): obj is IModelKind {
  return typeof obj?.kind === "string";
}

// use this resolver in all abilities to define
const resolveAction = createAliasResolver({
  edit: ["create", "read", "update"],
  manipulate: ["create", "update", "delete"],
});
