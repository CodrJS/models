import type { Types } from "mongoose";
import { Base, IBaseMinimal } from "./Base";

export interface IAnnotation extends IBaseMinimal {
  readonly kind: "Annotation";
  projectId: Types.ObjectId;
  datasetId: Types.ObjectId;
  sampleId: Types.ObjectId;
  annotatedBy: Types.ObjectId;
  value: any;
}

export class Annotation extends Base {
  projectId: Types.ObjectId;
  datasetId: Types.ObjectId;
  sampleId: Types.ObjectId;
  annotatedBy: Types.ObjectId;
  value: any;

  constructor({
    projectId,
    datasetId,
    sampleId,
    value,
    annotatedBy,
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: IAnnotation) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.projectId = projectId;
    this.datasetId = datasetId;
    this.value = value;
    this.sampleId = sampleId;
    this.annotatedBy = annotatedBy;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      projectId: this.projectId,
      annotatedBy: this.annotatedBy,
      sampleId: this.sampleId,
      datasetId: this.datasetId,
      value: this.value,
    };
  }
}
