import type { ObjectId } from "mongoose";
import { Base } from "./Base";

export interface IProfile {
  name: {
    first: string;
    last: string;
    preferred?: string;
  };
  avatarUrl?: string;
  username: string;
  user: ObjectId;
}

export class Profile extends Base {
  name: IProfile["name"];
  avatarUrl: IProfile["avatarUrl"];
  user: IProfile["user"];
  username: IProfile["username"];

  constructor({ name, avatarUrl, username, user, ...base }: IProfile) {
    super(base);
    this.name = name;
    this.avatarUrl = avatarUrl;
    this.user = user;
    this.username = username;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      name: this.name,
      avatarUrl: this.avatarUrl,
      user: this.user,
      username: this.username,
      ...json,
    };
  }
}
