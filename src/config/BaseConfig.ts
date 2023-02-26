import { Base, IBase } from "../Base";

export interface IBaseConfig<T extends object> extends IBase {
  type: string;
  verison?: string;
  config: T;
}

export default class BaseConfig<T extends object> extends Base {
  type: string;
  verison: string;
  config: T;

  constructor({ type, config, verison = "v1", ...base }: IBaseConfig<T>) {
    super(base);
    this.type = type;
    this.config = config;
    this.verison = verison;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      type: this.type,
      version: this.verison,
      config: this.config,
      ...json,
    };
  }
}
