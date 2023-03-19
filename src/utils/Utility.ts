// import { AccessibleModel } from "@casl/mongoose";
// import { Document } from "mongoose";
// import { Ability, ACTION } from "../types";
import { IUser } from "../";
import { Response } from "./Response";

export abstract class Utility {
  // for system only purposes
  protected abstract _getDocument<DocType>(id: string): Promise<DocType>;

  // CRUD Operations
  abstract get(token: IUser, id: string): Promise<Response<any>>;
  abstract create(token: IUser, obj: object): Promise<Response<any>>;
  abstract update(
    token: IUser,
    id: string,
    obj: object,
  ): Promise<Response<any>>;
  abstract delete(token: IUser, id: string): Promise<Response<any>>;

  // protected withAbility<ModelType extends Document, Subject extends string>(
  //   model: AccessibleModel<ModelType>,
  //   ability: Ability<ModelType, Subject>,
  //   action?: ACTION,
  // ) {
  //   return model.accessibleBy(ability, action);
  // }
}
