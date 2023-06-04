import BaseConfig, { IBaseConfig } from "../BaseConfig";
import { DisplayConfig } from "./types/Display";
import { SampleConfig } from "./types/Sample";

export interface IProjectConfig extends Omit<IBaseConfig, "kind"> {
  // $schema: string;
  display: DisplayConfig;
  sample: SampleConfig;
}

export default class ProjectConfig extends BaseConfig {
  type = "project";
  display: DisplayConfig;
  sample: SampleConfig;

  constructor({
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
    verison,
    flags,
    display,
    sample,
  }: IProjectConfig) {
    super({
      kind: 'Config',
      verison,
      flags,
      _id,
      __v,
      createdAt,
      updatedAt,
      createdBy,
      updatedBy,
    });
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
