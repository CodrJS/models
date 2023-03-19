import type { Types } from "mongoose";
import { IBase } from "./Base";

export interface IAudit extends IBase {
  userId: Types.ObjectId;
  payload: object;
}