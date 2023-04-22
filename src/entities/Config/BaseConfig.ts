import { Base, IBase } from "../Base";

export interface IBaseConfig extends IBase {
  verison?: string;
  flags?: { isDeleted: boolean };
}

export default abstract class BaseConfig extends Base {
  abstract type: string;
  verison: string;
  flags: { isDeleted: boolean };

  constructor({ verison = "v1", flags, ...base }: IBaseConfig) {
    super(base);
    this.verison = verison;
    this.flags = flags || { isDeleted: false };
  }

  toJSON() {
    const json = super.toJSON();
    return {
      version: this.verison,
      flags: this.flags,
      ...json,
    };
  }
}
