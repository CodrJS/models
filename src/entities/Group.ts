import type { Types } from "mongoose";
import { Base, IBase } from "./Base";

export interface IGroup extends IBase {
  creatorId: Types.ObjectId;
  members: Types.ObjectId[];
  name: string;
  teams: Types.ObjectId[];
}

export class Group extends Base {
  creatorId: Types.ObjectId;
  members: Types.ObjectId[];
  name: string;
  teams: Types.ObjectId[];

  constructor({
    creatorId,
    name,
    members,
    teams,
    _id,
    __v,
    createdAt,
    updatedAt,
  }: IGroup) {
    super({ _id, __v, createdAt, updatedAt });
    this.name = name;
    this.members = members;
    this.creatorId = creatorId;
    this.teams = teams;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      creatorId: this.creatorId,
      members: this.members,
      name: this.name,
      teams: this.teams,
    };
  }
}
