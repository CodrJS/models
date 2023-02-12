import type { ObjectId } from "mongoose";

export interface Profile {
  avatarUrl?: string;
  username: string;
  user: ObjectId;
}