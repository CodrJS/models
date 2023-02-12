import { ObjectId } from "mongoose";

export interface Project {
  _id: ObjectId;
  teamId: ObjectId;
  creatorId: ObjectId;
  configId: ObjectId;
  createdAt: string;
  updatedAt: string;
}
