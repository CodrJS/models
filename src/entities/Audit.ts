import type { Types } from "mongoose";
import type { IBase } from "./Base";
import type { ActionEnum, ResourceEnum } from "../types";

export interface IAudit extends Omit<IBase<"Audit">, "createdBy"> {
  entityType: ResourceEnum; // (where) what entity got modified
  action: ActionEnum; // action taken
  userId: Types.ObjectId; // who
  payload: object; // what data got modified
}
