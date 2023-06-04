import { Base, IBaseMinimal } from "./Base";
import { UserEnum, UserRoleEnum } from "../types";

export interface IUser extends IBaseMinimal {
  readonly kind: "User";
  type: UserEnum;
  email: string;
  role: UserRoleEnum;
  flags: {
    isAnonymous: boolean;
    isDeleted: boolean;
    isDisabled: boolean;
  };
}

export class User extends Base {
  type: UserEnum;
  email: string;
  role: UserRoleEnum;
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
