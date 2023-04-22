import BaseConfig, { IBaseConfig } from "../BaseConfig";
import { DisplayConfig } from "./types/Display";
import { SampleConfig } from "./types/Sample";

export interface IProjectConfig extends IBaseConfig {
  // $schema: string;
  display: DisplayConfig;
  sample: SampleConfig;
}

export default class ProjectConfig extends BaseConfig {
  type = "project";
  display: DisplayConfig;
  sample: SampleConfig;

  constructor({
    verison,
    _id,
    flags,
    createdAt,
    updatedAt,
    display,
    sample,
  }: IProjectConfig) {
    super({ verison, flags, _id, createdAt, updatedAt });
    this.display = display;
    this.sample = sample;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      type: this.type,
      display: this.display,
      smaple: this.sample,
    };
  }
}
