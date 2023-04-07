import type { Types } from "mongoose";
import { Base, IBase } from "./Base";

export interface IAnnotation extends IBase {
  datasetId: Types.ObjectId;
  sampleId: Types.ObjectId;
  value: any;
}

export class Annotation extends Base {
  datasetId: Types.ObjectId;
  sampleId: Types.ObjectId;
  value: any;

  constructor({
    datasetId,
    sampleId,
    value,
    _id,
    __v,
    createdAt,
    updatedAt,
  }: IAnnotation) {
    super({ _id, __v, createdAt, updatedAt });
    this.datasetId = datasetId;
    this.value = value;
    this.sampleId = sampleId;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      projectId: this.datasetId,
      sampleId: this.sampleId,
      value: this.value,
    };
  }
}
