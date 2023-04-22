import type { Types } from "mongoose";
import { Base, IBase } from "./Base";

export interface ISample extends IBase {
  datasetId: Types.ObjectId;
  payload: object;
}

export class Sample extends Base {
  datasetId: Types.ObjectId;
  payload: object;

  constructor({ datasetId, payload, _id, __v, createdAt, updatedAt }: ISample) {
    super({ _id, __v, createdAt, updatedAt });
    this.datasetId = datasetId;
    this.payload = payload;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      projectId: this.datasetId,
      payload: this.payload,
    };
  }
}
