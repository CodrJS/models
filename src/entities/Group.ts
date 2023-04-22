import type { Types } from "mongoose";
import { Base, IBase } from "./Base";
import { Flags } from "../types/Flags";

export interface IGroup<F = object> extends IBase {
  createdBy: Types.ObjectId;
  members: Types.ObjectId[];
  name: string;
  teams: Types.ObjectId[];
  flags: Flags & F;
}

export class Group extends Base {
  createdBy: Types.ObjectId;
  members: Types.ObjectId[];
  name: string;
  teams: Types.ObjectId[];
  flags: Flags & object;

  constructor({
    createdBy,
    name,
    members,
    teams,
    flags,
    _id,
    __v,
    createdAt,
    updatedAt,
  }: IGroup) {
    super({ _id, __v, createdAt, updatedAt });
    this.name = name;
    this.members = members;
    this.createdBy = createdBy;
    this.teams = teams;
    this.flags = flags;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      createdBy: this.createdBy,
      members: this.members,
      name: this.name,
      teams: this.teams,
      flags: this.flags,
    };
  }
}
