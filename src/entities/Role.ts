import { Base, IBase } from "./Base";
import { User } from "./User";
import { AtLeast, JwtPayload } from "@/types";
import { ActionEnum, ResourceEnum } from "@/types/Permissions";

export interface IGrant<R = object> {
  resource: ResourceEnum;
  actions: ActionEnum[];
  conditions: {
    operator: "eq" | "within";
    subjectField: keyof JwtPayload;
    resourceField: keyof R;
    actions?: ActionEnum[];
  }[];
}

export interface IRole extends IBase<"Role"> {
  name: string;
  code: string;
  description: string;
  grants: IGrant[];
}

export class Role extends Base {
  name: string;
  code: string;
  description?: string;
  grants: IGrant[];

  constructor({
    name,
    code,
    description,
    grants,
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: AtLeast<
    IRole & { user: User },
    "createdBy" | "name" | "code" | "description" | "grants"
  >) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.name = name;
    this.code = code;
    this.description = description;
    this.grants = grants;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      name: this.name,
      code: this.code,
      description: this.description,
      grants: this.grants,
      ...json,
    };
  }
}
