import { Types } from "mongoose";
import { AtLeast } from "../types";

export interface IBase {
  __v?: number;
  _id: Types.ObjectId;
  createdAt: string;
  updatedAt: string;
  createdBy: Types.ObjectId;
  updatedBy: Types.ObjectId;
}

export type IBaseMinimal = AtLeast<IBase, 'createdBy'>

export class Base {
  readonly __v: IBase["__v"];
  readonly _id: IBase["_id"];
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: Types.ObjectId;
  readonly updatedBy: Types.ObjectId;

  constructor({
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
    _id,
    __v,
  }: Partial<IBase> & { createdBy: Types.ObjectId }) {
    this.__v = __v;
    this._id = _id || new Types.ObjectId();

    const now = Date.now();
    this.createdAt = new Date(createdAt || now);
    this.updatedAt = new Date(updatedAt || now);

    this.createdBy = createdBy;
    this.updatedBy = updatedBy || createdBy;
  }

  toJSON() {
    return {
      __v: this.__v,
      _id: this._id,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      createdBy: this.createdBy,
      updatedBy: this.updatedBy,
    };
  }
}
