import type { Types } from "mongoose";
import type { MessageType } from "../types";
import { Base, IBaseMinimal } from "./Base";

export interface IMessage extends IBaseMinimal {
  readonly kind: "Message";
  type: MessageType;
  subject: string;
  body: string;
  to: Types.ObjectId[];
}

export class Message extends Base {
  type: MessageType;
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
