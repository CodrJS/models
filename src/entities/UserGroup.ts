import { Group, IGroup } from "./Group";

interface IAdditionalFlags {
  // anonymize the data?
  isAnonymous: boolean;
  // others can join?
  isJoinable: boolean;
}
export type IUserGroup = IGroup<IAdditionalFlags>;

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
    name,
    members,
    teams,
  }: IUserGroup) {
    super({
      _id,
      __v,
      createdAt,
      updatedAt,
      createdBy,
      name,
      members,
      teams,
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
