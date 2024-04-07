import type { JwtPayload } from "../types/JWT";

export abstract class Policy<R> {
  abstract execute(subject: JwtPayload, resource: R): void;
}
