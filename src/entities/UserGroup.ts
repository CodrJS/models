import { Flags } from "@/types";
import { Group, IGroup } from "./Group";

interface IAdditionalFlags extends Flags {
  // anonymize the data?
  isAnonymous: boolean;
  // others can join?
  isJoinable: boolean;
}
export type IUserGroup = IGroup<"UserGroup", IAdditionalFlags>

export class UserGroup extends Group {
  constructor({
    flags = {
      isAnonymous: false,
      isDeleted: false,
      isJoinable: false,
      isPrivate: false,
    },
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
    name,
    members,
  }: IUserGroup) {
    super({
      _id,
      __v,
      createdAt,
      updatedAt,
      createdBy,
      updatedBy,
      name,
      members,
      flags,
    });
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
    };
  }
}
