import type { ObjectId } from "mongoose";

export interface UserGroup {
  name: string;
  creator: ObjectId;
  members: ObjectId[];
  private: boolean;
  anonymous: boolean;
  createdAt: string;
  updatedAt: string;
}
