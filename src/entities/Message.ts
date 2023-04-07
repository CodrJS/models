import type { Types } from "mongoose";
import type { MESSAGE } from "../types";
import { Base, IBase } from "./Base";

export interface IMessage extends IBase {
  creatorId: Types.ObjectId;
  type: MESSAGE;
  subject: string;
  body: string;
  to: Types.ObjectId[];
}

export class Message extends Base {
  creatorId: Types.ObjectId;
  type: MESSAGE;
  subject: string;
  body: string;
  to: Types.ObjectId[];

  constructor({
    creatorId,
    type,
    subject,
    body,
    to,
    _id,
    __v,
    createdAt,
    updatedAt,
  }: IMessage) {
    super({ _id, __v, createdAt, updatedAt });
    this.creatorId = creatorId;
    this.body = body;
    this.subject = subject;
    this.to = to;
    this.type = type;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      creatorId: this.creatorId,
      body: this.body,
      subject: this.subject,
      to: this.to,
      type: this.type,
    };
  }
}
