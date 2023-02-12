import { DisplayConfig } from "./Display";
import { GeneralConfig } from "./General";
import { SampleConfig } from "./Sample";

export interface ProjectConfig {
  // $schema: string;
  display: DisplayConfig;
  general: GeneralConfig;
  sample: SampleConfig;
  createdAt: string;
  updatedAt: string;
}
