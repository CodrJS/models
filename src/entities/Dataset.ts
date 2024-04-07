import type { Types } from "mongoose";
import { Group, IGroup } from "./Group";
import { AtLeast, Flags } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDataset extends IGroup<"Dataset", Flags> {
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
    name,
    members,
    createdBy,
    updatedBy,
  }: AtLeast<
    IDataset,
    "createdBy" | "name" | "members" | "flags" | "projectId"
  >) {
    super({
      _id,
      __v,
      createdAt,
      updatedAt,
      createdBy,
      updatedBy,
      name,
      members,
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
