import {
  AbilityBuilder,
  AbilityClass,
  createAliasResolver,
  ForcedSubject,
  MongoQuery,
  PureAbility,
} from "@casl/ability";
import { IUser } from "../user";
import { UserRoleType } from "./UserRole";
import type { Document as MongoDocument } from "mongoose";

// setup action and subject types for ability
export type ACTION = "read" | "create" | "update" | "delete" | "manage";
// export type SUBJECT =
//   | "User"
//   | UserDocument
//   | "Profile"
//   | ProfileDocument
//   | "UserGroup"
//   | UserGroupDocument
//   | "Project"
//   | ProjectDocument
//   | "all";
export type ABILITIES<SUBJECT> = [
  ACTION,
  SUBJECT | ForcedSubject<Exclude<SUBJECT, "all">>,
];

// define what an ability is using the action and subject types
export type Ability<
  Document extends MongoDocument,
  Subject extends string,
> = PureAbility<ABILITIES<Document | Subject>, MongoQuery<Document>>;

// define permissions; used to create an ability
export type DefinePermissions<
  Document extends MongoDocument,
  Subject extends string,
> = (user: IUser, builder: AbilityBuilder<Ability<Document, Subject>>) => void;
export type Permissions<
  Document extends MongoDocument,
  Subject extends string,
> = Record<UserRoleType, DefinePermissions<Document, Subject>>;

// export a function for defining an ability using generics.
export const DefineAbility = function DefineAbility<
  Document extends MongoDocument,
  Subject extends string,
>(
  user: IUser,
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

  return builder.build({ resolveAction });
};

// use this resolver in all abilities to define
const resolveAction = createAliasResolver({
  // manage: ["update", "delete", "read", "create"],
});
