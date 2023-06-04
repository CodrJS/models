import { Base, IBaseMinimal } from "../Base";

export interface IBaseConfig extends IBaseMinimal {
  readonly kind: "Config";
  verison?: string;
  flags?: { isDeleted: boolean };
}

export default abstract class BaseConfig extends Base {
  abstract type: string;
  verison: string;
  flags: { isDeleted: boolean };

  constructor({
    verison = "v1",
    flags,
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: IBaseConfig) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
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
