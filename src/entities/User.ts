import { Base, IBaseMinimal } from "./Base";
import { UserRoleType } from "../types";

export interface IUser extends IBaseMinimal {
  type: "anonymous" | "member" | "external";
  email: string;
  role: UserRoleType;
  flags: {
    isAnonymous: boolean;
    isDeleted: boolean;
    isDisabled: boolean;
  };
}

export class User extends Base {
  type: "anonymous" | "member" | "external";
  email: string;
  role: UserRoleType;
  flags: {
    isAnonymous: boolean;
    isDeleted: boolean;
    isDisabled: boolean;
  };

  constructor({
    type,
    email,
    role,
    flags = { isDisabled: false, isAnonymous: false, isDeleted: false },
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: IUser) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.type = type;
    this.email = email;
    this.flags = flags;
    this.role = role;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      type: this.type,
      email: this.email,
      role: this.role,
      flags: this.flags,
      ...json,
    };
  }
}
