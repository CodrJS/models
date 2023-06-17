import type { Types } from "mongoose";
import { Base, IBase } from "./Base";
import { AtLeast } from "@/types";

export interface ISample extends IBase<"Sample"> {
  projectId: Types.ObjectId;
  datasetId: Types.ObjectId;
  payload: any;
}

export class Sample extends Base {
  projectId: Types.ObjectId;
  datasetId: Types.ObjectId;
  payload: any;

  constructor({
    projectId,
    datasetId,
    payload,
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: AtLeast<ISample, "createdBy" | "datasetId" | "projectId" | "payload">) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.projectId = projectId;
    this.datasetId = datasetId;
    this.payload = payload;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      projectId: this.projectId,
      datasetId: this.datasetId,
      payload: this.payload,
    };
  }
}
