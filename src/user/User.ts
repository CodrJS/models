import { Base, IBase } from "../Base";
import { UserRoleType } from "../types";

export interface IUser extends IBase {
  name?: {
    first: string;
    last: string;
    preferred?: string;
  };
  type: "anonymous" | "member";
  email: string;
  accessToken?: string;
  refreshToken?: string;
  role: UserRoleType;
  flags: {
    isDisabled: boolean;
    isAnonymous: boolean;
  };
}

export default class User extends Base {
  name?: {
    first: string;
    last: string;
    preferred?: string;
  };
  type: "anonymous" | "member";
  email: string;
  accessToken?: string;
  refreshToken?: string;
  role: UserRoleType;
  flags: {
    isDisabled: boolean;
    isAnonymous: boolean;
  };

  constructor({
    type,
    email,
    role,
    flags = { isDisabled: false, isAnonymous: false },
    ...base
  }: IUser) {
    super(base);
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
