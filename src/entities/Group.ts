import type { Types } from "mongoose";
import { Base, IBase } from "./Base";
import { AtLeast } from "@/types";

export interface IGroup<
  Kind extends string = "Group",
  F extends object = object,
> extends IBase<Kind> {
  members: IGroupMember[];
  name: string;
  flags: F;
}

export interface IGroupMember {
  type: GroupMemberEnum;
  _id: Types.ObjectId;
}

export enum GroupMemberEnum {
  "USER" = "USER",
  "TEAM" = "TEAM",
}

export class Group extends Base {
  members: IGroupMember[];
  name: string;
  flags: object;

  constructor({
    name,
    members,
    flags,
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: AtLeast<IGroup, "createdBy" | "name" | "members" | "flags">) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.name = name;
    this.members = members;
    this.flags = flags;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      members: this.members,
      name: this.name,
      flags: this.flags,
    };
  }
}
