import { Base, IBase } from "./Base";
import { AtLeast, UserEnum } from "../types";
import { Types } from "mongoose";

export interface IUser extends IBase<"User"> {
  organizationId: Types.ObjectId;
  type: UserEnum;
  email: string;
  flags: {
    isAnonymous: boolean;
    isDeleted: boolean;
    isDisabled: boolean;
  };
}

export class User extends Base {
  type: UserEnum;
  email: string;
  flags: {
    isAnonymous: boolean;
    isDeleted: boolean;
    isDisabled: boolean;
  };

  constructor({
    type,
    email,
    flags = { isDisabled: false, isAnonymous: false, isDeleted: false },
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: AtLeast<IUser, "createdBy" | "type" | "email" | "flags">) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.type = type;
    this.email = email;
    this.flags = flags;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      type: this.type,
      email: this.email,
      flags: this.flags,
      ...json,
    };
  }
}
