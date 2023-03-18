import type { ObjectId } from "mongoose";
import { Base } from "./Base";
import UUID from "uuid";

/**
 * SESSION WORKFLOW:
 * 
 * Send login email --> Create session with status INITIATING
 * Click link in email --> Update status to ESTABLISHED
 * 
 * Need rules for:
 * - when to refresh JWT, update session? -- whats the relation
 * - disabling session over time elapsed...
 *    `-> one week past last token refresh?
 * - not storing session for anonymous users
 */

export interface ISession {
  status: "INITIATING" | "ESTABLISHED" | "CLOSED";
  accessToken: string;
  refreshToken: string;
  os: string;
  browser: string;
  ipAddress: string;
  userId: ObjectId;
}

export class Session extends Base {
  status: "INITIATING" | "ESTABLISHED" | "CLOSED";
  accessToken: string;
  refreshToken: string;
  os: string;
  browser: string;
  ipAddress: string;
  userId: ObjectId;

  constructor({
    status = "INITIATING",
    accessToken = UUID.v4(),
    refreshToken = UUID.v4(),
    os = "UNKNOWN",
    browser = "UNKNOWN",
    ipAddress = "UNKNOWN",
    userId,
    ...base
  }: ISession) {
    super(base);
    this.status = status;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.os = os;
    this.browser = browser;
    this.ipAddress = ipAddress;
    this.userId = userId;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      status: this.status,
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
      os: this.os,
      browser: this.browser,
      ipAddress: this.ipAddress,
      userId: this.userId,
      ...json,
    };
  }
}


