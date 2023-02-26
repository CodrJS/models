import type { ObjectId } from "mongoose";

export interface IBase {
  _id?: ObjectId;
  createdAt?: string;
  updatedAt?: string;
}

export class Base {
  readonly _id: IBase["_id"];
  createdAt: Date;
  updatedAt: Date;

  constructor({ createdAt, updatedAt }: IBase) {
    const now = Date.now();
    this.createdAt = new Date(createdAt || now);
    this.updatedAt = new Date(updatedAt || now);
  }

  toJSON() {
    return {
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}
