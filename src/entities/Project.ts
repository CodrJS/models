import type { Types } from "mongoose";
import { Base, IBase } from "./Base";

export interface IProject extends IBase {
  config: Types.ObjectId;
}

export class Project extends Base {
  constructor({ ...base }: IProject) {
    super(base);
  }
}
