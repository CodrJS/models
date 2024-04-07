import type { ErrorType } from "@/types";
import type { IResponse } from "./Response";
import { Response } from "./Response";

export interface IError {
  code: ErrorType;
  status: number;
}

export class Error<Details = undefined> extends Response<Details> {
  code: IError["code"];
  status: IError["status"];

  constructor({ status, code, message }: IError & IResponse<Details>) {
    super({ message });
    this.code = code;
    this.status = status;
  }

  toJSON() {
    return {
      code: this.code,
      status: this.status,
      ...super.toJSON(),
    };
  }
}
