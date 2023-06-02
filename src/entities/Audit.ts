import type { Types } from "mongoose";
import type { IBase } from "./Base";
import type { ActionType, EntityType } from "../types";

export interface IAudit extends Omit<IBase, "createdBy" | "updatedBy"> {
  entityType: EntityType; // (where) what entity got modified
  action: ActionType; // action taken
  userId: Types.ObjectId; // who
  payload: object; // what data got modified
}
