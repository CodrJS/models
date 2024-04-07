// import { AccessibleModel } from "@casl/mongoose";
// import { Document } from "mongoose";
// import { Ability, ACTION } from "../types";
import type { JwtPayload } from "@/types";
import type { IAuthorizationResponse } from "../";
import type { Response } from "./Response";

export abstract class Utility<Class = object> {
  // for system only purposes
  protected abstract _getDocument<DocType>(id: string): Promise<DocType>;

  // CRUD Operations
  abstract get(token: JwtPayload, id: string): Promise<Response<Class>>;
  abstract create(token: JwtPayload, obj: object): Promise<Response<Class>>;
  abstract update(
    token: JwtPayload,
    id: string,
    obj: object,
  ): Promise<Response<Class>>;
  abstract delete(token: JwtPayload, id: string): Promise<Response<Class>>;

  abstract getAuthorization(token: JwtPayload): IAuthorizationResponse;

  // protected withAbility<ModelType extends Document, Subject extends string>(
  //   model: AccessibleModel<ModelType>,
  //   ability: Ability<ModelType, Subject>,
  //   action?: ACTION,
  // ) {
  //   return model.accessibleBy(ability, action);
  // }
}
