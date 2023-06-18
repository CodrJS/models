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
export type ActionType = "create" | "read" | "update" | "delete";
export type ExtendedActionType =
  | ActionType
  | "manage" // all CRUD ops
  | "edit" // all CRUD ops except delete
  | "manipulate"; // all CRUD ops except read;

export interface IModelKind<K extends string = string> {
  kind: K;
}

// define what an ability is using the action and subject types
export type Ability<M extends IModelKind, C extends typeof Base> = MongoAbility<
  [ExtendedActionType, InferSubjects<M | C>],
  MongoQuery<Omit<M, "kind">>
>;

// define permissions; used to create an ability
export type DefinePermissions<M extends IModelKind, C extends typeof Base> = (
  user: JwtPayload,
  builder: AbilityBuilder<Ability<M, C>>,
) => void;

export type Permissions<M extends IModelKind, C extends typeof Base> = Record<
  UserRoleType,
  DefinePermissions<M, C>
>;

// export a function for defining an ability using generics.
export const DefineAbility = function DefineAbility<
  M extends IModelKind,
  C extends typeof Base,
>(user: JwtPayload, permissions: Permissions<M, C>): Ability<M, C> {
  const builder = new AbilityBuilder<Ability<M, C>>(createMongoAbility);

  if (typeof permissions[user.role] === "function") {
    permissions[user.role](user, builder);
  } else {
    throw new Error(
      `Trying to use unsupported role "${user.role}" in ability.`,
    );
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return builder.build({ resolveAction, detectSubjectType });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModel(obj: any): obj is IModelKind {
  return typeof obj?.kind === "string";
}

// use this resolver in all abilities to define
const resolveAction = createAliasResolver({
  edit: ["create", "read", "update"],
  manipulate: ["create", "update", "delete"],
});

const detectSubjectType = function detectSubjectType<
  M extends IModelKind,
  C extends typeof Base,
>(subject: M | C) {
  if (isModel(subject)) {
    return subject.kind as ExtractSubjectType<M | C>;
  } else {
    return subject.constructor.name as ExtractSubjectType<M | C>;
  }
};
