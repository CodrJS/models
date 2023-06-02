import type { AbilityClass, ForcedSubject, MongoQuery } from "@casl/ability";
import {
  AbilityBuilder,
  buildMongoQueryMatcher,
  createAliasResolver,
  PureAbility,
} from "@casl/ability";
import type { AccessibleFieldsModel } from "@casl/mongoose";
import type { JwtPayload } from "./";
import type { UserRoleType } from "./UserRole";

// setup action and subject types for ability
export type ActionType =
  | "create"
  | "delete"
  | "read"
  | "update"
  | "manage"      // all CRUD ops
  | "edit"        // all CRUD ops except delete
  | "manipulate"; // all CRUD ops except read

export type AbilityType<Subject> = [
  ActionType,
  Subject | ForcedSubject<Exclude<Subject, "all">>,
];

// define what an ability is using the action and subject types
export type Ability<
  Document extends AccessibleFieldsModel<any>,
  Subject extends string,
> = PureAbility<AbilityType<Document | Subject>, MongoQuery<Document>>;

// define permissions; used to create an ability
export type DefinePermissions<
  Document extends AccessibleFieldsModel<any>,
  Subject extends string,
> = (user: JwtPayload, builder: AbilityBuilder<Ability<Document, Subject>>) => void;
export type Permissions<
  Document extends AccessibleFieldsModel<any>,
  Subject extends string,
> = Record<UserRoleType, DefinePermissions<Document, Subject>>;

// export a function for defining an ability using generics.
export const DefineAbility = function DefineAbility<
  Document extends AccessibleFieldsModel<any>,
  Subject extends string,
>(
  user: JwtPayload,
  permissions: Record<UserRoleType, DefinePermissions<Document, Subject>>,
) {
  const builder = new AbilityBuilder(
    PureAbility as AbilityClass<Ability<Document, Subject>>,
  );

  if (typeof permissions[user.role] === "function") {
    permissions[user.role](user, builder);
  } else {
    throw new Error(
      `Trying to use unsupported role "${user.role}" in ability.`,
    );
  }

  return builder.build({
    resolveAction,
    conditionsMatcher: buildMongoQueryMatcher(),
  });
};

// use this resolver in all abilities to define
const resolveAction = createAliasResolver({
  edit: ["create", "read", "update"],
  manipulate: ["create", "update", "delete"],
});
