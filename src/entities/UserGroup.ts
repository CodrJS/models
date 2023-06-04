import { Group, IGroup } from "./Group";

interface IAdditionalFlags {
  // anonymize the data?
  isAnonymous: boolean;
  // others can join?
  isJoinable: boolean;
}
export interface IUserGroup extends IGroup<IAdditionalFlags> {
  readonly kind: "UserGroup";
}

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
    teams,
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
