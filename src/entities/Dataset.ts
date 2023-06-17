import type { Types } from "mongoose";
import { Group, IGroup } from "./Group";
import { AtLeast } from "@/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IDataset extends IGroup<"Dataset"> {
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
    teams,
    createdBy,
    updatedBy,
  }: AtLeast<
    IDataset,
    "createdBy" | "name" | "members" | "teams" | "flags" | "projectId"
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
