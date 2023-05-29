import { JwtPayload as JsonWebTokenPayload} from "jsonwebtoken";
import { IUser } from "../entities";

interface DefinfedJwtPayload extends JsonWebTokenPayload {
  iss: string;
  sub: string;
  jti: string;
}

export type JwtPayload = DefinfedJwtPayload & IUser;
