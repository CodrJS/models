import { ObjectId } from "mongoose";
import { Group, IGroup } from "./Group";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDataset extends IGroup {
  flags?: {
    isPrivate?: boolean;
  };
  projectId: ObjectId;
}

export class Dataset extends Group {
  flags?: {
    isPrivate?: boolean;
  };
  projectId: ObjectId;

  constructor({ flags = { isPrivate: false }, projectId, ...base }: IDataset) {
    super(base);
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
