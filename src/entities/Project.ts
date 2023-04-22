import type { Types } from "mongoose";
import { Flags, TaskType } from "../types";
import { Base, IBase } from "./Base";

export interface IProject extends IBase {
  name: string;
  type: TaskType;
  slug: string;
  guidelines?: string;
  bgColorClass: string;
  config: Types.ObjectId;
  flags: Flags & {
    isAnonymized: boolean;
  };
  createdBy: Types.ObjectId;
}

export class Project extends Base {
  name: string;
  slug: string;
  type: TaskType;
  guidelines?: string;
  bgColorClass: string;
  config: Types.ObjectId;
  flags: Flags & {
    isAnonymized: boolean;
  };
  createdBy: Types.ObjectId;

  constructor({
    bgColorClass,
    config,
    flags,
    guidelines,
    slug,
    name,
    type,
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
  }: IProject) {
    super({ _id, __v, createdAt, updatedAt });

    this.bgColorClass = bgColorClass;
    this.config = config;
    this.flags = flags;
    this.guidelines = guidelines;
    this.slug = slug;
    this.name = name;
    this.type = type;
    this.createdBy = createdBy;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      bgColorClass: this.bgColorClass,
      config: this.config,
      flags: this.flags,
      guidelines: this.guidelines,
      slug: this.slug,
      name: this.name,
      type: this.type,
      createdBy: this.createdBy,
    };
  }
}
