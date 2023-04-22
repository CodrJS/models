import type { Types } from "mongoose";
import { Group, IGroup } from "./Group";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDataset extends IGroup {
  projectId: Types.ObjectId;
}

export class Dataset extends Group {
  projectId: Types.ObjectId;

  constructor({
    flags,
    projectId,
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    name,
    members,
    teams,
  }: IDataset) {
    super({
      _id,
      __v,
      createdAt,
      updatedAt,
      createdBy,
      name,
      members,
      teams,
      flags,
    });
    this.projectId = projectId;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      projectId: this.projectId,
    };
  }
}
