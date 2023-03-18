import { ObjectId } from "mongoose";
import { Base, IBase } from "./Base";

export interface IGroup extends IBase {
  creatorId: ObjectId;
  members: ObjectId[];
  name: string;
}

export class Group extends Base {
  creatorId: ObjectId;
  /**
   * @type {ObjectId[]} of either UserId or UserGroupId
   */
  members: ObjectId[];
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
