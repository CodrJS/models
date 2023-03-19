import { ObjectId } from "mongoose";
import { Base, IBase } from "./Base";

export interface IAnnotation extends IBase {
  datasetId: ObjectId;
  sampleId: ObjectId;
  value: any;
}

export class Annotation extends Base {
  datasetId: ObjectId;
  sampleId: ObjectId;
  value: any;

  constructor({ datasetId, sampleId, value, ...base }: IAnnotation) {
    super(base);
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
