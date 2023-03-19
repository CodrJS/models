import type { Types } from "mongoose";
import { Base, IBase } from "./Base";

export interface IGroup extends IBase {
  creatorId: Types.ObjectId;
  members: Types.ObjectId[];
  name: string;
}

export class Group extends Base {
  creatorId: Types.ObjectId;
  /**
   * @type {ObjectId[]} of either UserId or UserGroupId
   */
  members: Types.ObjectId[];
  name: string;

  constructor({ creatorId, name, members, ...base }: IGroup) {
    super(base);
    this.name = name;
    this.members = members;
    this.creatorId = creatorId;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      name: this.name,
      members: this.members,
      creatorId: this.creatorId,
    };
  }
}
