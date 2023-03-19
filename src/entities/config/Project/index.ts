import BaseConfig, { IBaseConfig } from "../BaseConfig";
import { DisplayConfig } from "./types/Display";
import { GeneralConfig } from "./types/General";
import { SampleConfig } from "./types/Sample";

export interface IProjectConfig {
  // $schema: string;
  display: DisplayConfig;
  general: GeneralConfig;
  sample: SampleConfig;
}

// exclude type from inheritence so we can hard type this class
export type IProjectConfiguration = Omit<IBaseConfig<IProjectConfig>, "type">;

export default class ProjectConfig extends BaseConfig<IProjectConfig> {
  constructor(options: IProjectConfiguration) {
    // expand and add type before sending to super
    const opts = { ...options, type: "project" };
    super(opts);
  }
}
