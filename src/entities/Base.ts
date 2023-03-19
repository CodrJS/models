import type { Types } from "mongoose";

export interface IBase {
  __v?: number;
  _id?: Types.ObjectId;
  createdAt?: string;
  updatedAt?: string;
}

export class Base {
  readonly __v: IBase["__v"];
  readonly _id: IBase["_id"];
  createdAt: Date;
  updatedAt: Date;

  constructor({ createdAt, updatedAt, _id, __v }: IBase) {
    this.__v = __v;
    this._id = _id;

    const now = Date.now();
    this.createdAt = new Date(createdAt || now);
    this.updatedAt = new Date(updatedAt || now);
  }

  toJSON() {
    return {
      __v: this.__v,
      _id: this._id,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}
