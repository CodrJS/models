import type { Types } from "mongoose";
import { AtLeast, Flags, TaskType } from "../types";
import { Base, IBase } from "./Base";

export interface IProject extends IBase<"Project"> {
  name: string;
  type: TaskType;
  slug: string;
  guidelines?: string;
  bgColorClass: string;
  config: Types.ObjectId;
  flags: Flags & {
    isAnonymized: boolean;
  };
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
    updatedBy,
  }: AtLeast<
    IProject,
    "createdBy" | "bgColorClass" | "config" | "flags" | "slug" | "name" | "type"
  >) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });

    this.bgColorClass = bgColorClass;
    this.config = config;
    this.flags = flags;
    this.guidelines = guidelines;
    this.slug = slug;
    this.name = name;
    this.type = type;
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
