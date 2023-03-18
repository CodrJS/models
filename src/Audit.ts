import { ObjectId } from "mongoose";
import { IBase } from "./Base";

export interface IAudit extends IBase {
  userId: ObjectId;
  payload: object;
}