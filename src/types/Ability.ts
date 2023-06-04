import {
  MongoAbility,
  MongoQuery,
  createMongoAbility,
  AbilityBuilder,
  createAliasResolver,
  InferSubjects,
} from "@casl/ability";
import type { JwtPayload } from "./";
import type { UserRoleType } from "./User";

// setup action and subject types for ability
export type ActionType =
  | "create"
  | "delete"
  | "read"
  | "update"
  | "manage" // all CRUD ops
  | "edit" // all CRUD ops except delete
  | "manipulate"; // all CRUD ops except read

interface ModelKind {
  kind: string;
}

// define what an ability is using the action and subject types
export type Ability<Model extends ModelKind> = MongoAbility<
  [ActionType, InferSubjects<Model>],
  MongoQuery<Omit<Model, "kind">>
>;

// define permissions; used to create an ability
export type DefinePermissions<Model extends ModelKind> = (
  user: JwtPayload,
  builder: AbilityBuilder<Ability<Model>>,
) => void;

export type Permissions<Model extends ModelKind> = Record<
  UserRoleType,
  DefinePermissions<Model>
>;

// export a function for defining an ability using generics.
export const DefineAbility = function DefineAbility<Model extends ModelKind>(
  user: JwtPayload,
  permissions: Permissions<Model>,
): Ability<Model> {
  const builder = new AbilityBuilder<Ability<Model>>(createMongoAbility);

  if (typeof permissions[user.role] === "function") {
    permissions[user.role](user, builder);
  } else {
    throw new Error(
      `Trying to use unsupported role "${user.role}" in ability.`,
    );
  }

  return builder.build({ resolveAction });
};

// use this resolver in all abilities to define
const resolveAction = createAliasResolver({
  edit: ["create", "read", "update"],
  manipulate: ["create", "update", "delete"],
});
