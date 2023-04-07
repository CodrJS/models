import type { Types } from "mongoose";
import { Group, IGroup } from "./Group";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDataset extends IGroup {
  flags?: {
    isPrivate?: boolean;
  };
  projectId: Types.ObjectId;
}

export class Dataset extends Group {
  flags?: {
    isPrivate?: boolean;
  };
  projectId: Types.ObjectId;

  constructor({
    flags = { isPrivate: false },
    projectId,
    _id,
    __v,
    createdAt,
    updatedAt,
    creatorId,
    name,
    members,
    teams,
  }: IDataset) {
    super({ _id, __v, createdAt, updatedAt, creatorId, name, members, teams });
    this.flags = flags;
    this.projectId = projectId;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      flags: this.flags,
      projectId: this.projectId,
    };
  }
}
