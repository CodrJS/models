import { JwtPayload } from "@/types";
import { IAuthorizationResponse } from "..";

export abstract class Rule<R> {
  abstract apply(
    subject: JwtPayload,
    permissions: IAuthorizationResponse,
    resource: R,
  ): void;
}
