import type { Types } from "mongoose";
import { Flags, TaskType } from "../types";
import { Base, IBase } from "./Base";

export interface IProject extends IBase {
  title: string;
  type: TaskType;
  slug: string;
  guidelines?: string;
  bgColorClass: string;
  config: Types.ObjectId;
  flags: Flags & {
    anonymize: boolean;
  };
}

export class Project extends Base {
  title: string;
  type: TaskType;
  slug: string;
  guidelines?: string;
  bgColorClass: string;
  config: Types.ObjectId;
  flags: Flags & {
    anonymize: boolean;
  };

  constructor({
    bgColorClass,
    config,
    flags,
    guidelines,
    slug,
    title,
    type,
    _id,
    __v,
    createdAt,
    updatedAt,
  }: IProject) {
    super({ _id, __v, createdAt, updatedAt });

    this.bgColorClass = bgColorClass;
    this.config = config;
    this.flags = flags;
    this.guidelines = guidelines;
    this.slug = slug;
    this.title = title;
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
      title: this.title,
      type: this.type,
    };
  }
}
