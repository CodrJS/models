import { ObjectId } from "mongoose";
import { Base, IBase } from "./Base";

export interface ISample extends IBase {
  datasetId: ObjectId;
  payload: object;
}

export class Sample extends Base {
  datasetId: ObjectId;
  payload: object;

  constructor({ datasetId, payload, ...base }: ISample) {
    super(base);
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
