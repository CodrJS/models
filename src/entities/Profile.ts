import type { Types } from "mongoose";
import { Base, IBase } from "./Base";

export interface IProfile extends IBase {
  name: {
    first: string;
    last: string;
    preferred?: string;
  };
  phone?: string;
  avatarUrl?: string;
  username: string;
  userId: Types.ObjectId;
}

export class Profile extends Base {
  name: {
    first: string;
    last: string;
    preferred?: string;
  };
  phone?: string;
  avatarUrl?: string;
  username: string;
  userId: Types.ObjectId;

  constructor({
    name,
    avatarUrl,
    username,
    userId,
    phone,
    _id,
    __v,
    createdAt,
    updatedAt,
  }: IProfile) {
    super({ _id, __v, createdAt, updatedAt });
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.userId = userId;
    this.phone = phone;
    this.username = username;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      name: this.name,
      avatarUrl: this.avatarUrl,
      userId: this.userId,
      phone: this.phone,
      username: this.username,
      ...json,
    };
  }
}
