import type { Types } from "mongoose";
import type { MESSAGE } from "../types";
import { Base, IBase } from "./Base";

export interface IMessage extends IBase {
  createdBy: Types.ObjectId;
  type: MESSAGE;
  subject: string;
  body: string;
  to: Types.ObjectId[];
}

export class Message extends Base {
  createdBy: Types.ObjectId;
  type: MESSAGE;
  subject: string;
  body: string;
  to: Types.ObjectId[];

  constructor({
    type,
    subject,
    body,
    to,
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: IMessage) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.body = body;
    this.subject = subject;
    this.to = to;
    this.type = type;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      body: this.body,
      subject: this.subject,
      to: this.to,
      type: this.type,
    };
  }
}
