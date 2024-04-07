import type { Types } from "mongoose";
import { Base, IBase } from "./Base";
import type { ActionType, AtLeast, ResourceType } from "@/types";

export interface IAuthorization extends IBase<"Authorization"> {
  userId: Types.ObjectId;
  roleId: Types.ObjectId[];
}

export interface IAuthorizationResponse {
  userId: Types.ObjectId;
  roleCodes: string[];
  grants: Partial<Record<ResourceType, Partial<Record<ActionType, boolean>>>>;
}

export class Authorization extends Base {
  userId: Types.ObjectId;
  roleId: Types.ObjectId[];

  constructor({
    userId,
    roleId = [],
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: AtLeast<IAuthorization, "createdBy" | "userId">) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.userId = userId;
    this.roleId = roleId;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      userId: this.userId,
      roles: this.roleId,
      ...json,
    };
  }
}
