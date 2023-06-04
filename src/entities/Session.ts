import type { Types } from "mongoose";
import { Base, IBaseMinimal } from "./Base";

/**
 * SESSION WORKFLOW:
 *
 * Send login email --> Create session with status INITIATING
 * Click link in email --> Update status to ESTABLISHED
 * Logout --> Update status to CLOSED
 * Remove session from UI -> Update status to CLOSED
 *
 * Need rules for:
 * - when to refresh JWT, update session? -- whats the relation
 * - disabling session over time elapsed...
 *    `-> one week past last seen?
 * - not storing session for anonymous users?
 */

export interface ISession extends IBaseMinimal {
  readonly kind: "Session";
  status: "INITIATING" | "ESTABLISHED" | "CLOSED";
  os: string;
  browser: string;
  ipAddress: string;
  userId: Types.ObjectId;
  lastSeenAt: string;
}

export class Session extends Base {
  status: "INITIATING" | "ESTABLISHED" | "CLOSED";
  os: string;
  browser: string;
  ipAddress: string;
  lastSeenAt: Date;

  constructor({
    status = "INITIATING",
    os = "UNKNOWN",
    browser = "UNKNOWN",
    ipAddress = "UNKNOWN",
    lastSeenAt,
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: Partial<ISession> & { createdBy: Types.ObjectId }) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.status = status;
    this.os = os;
    this.browser = browser;
    this.ipAddress = ipAddress;
    this.lastSeenAt = new Date(lastSeenAt || Date.now());
  }

  toJSON() {
    const json = super.toJSON();
    return {
      status: this.status,
      os: this.os,
      browser: this.browser,
      ipAddress: this.ipAddress,
      lastSeenAt: this.lastSeenAt.toISOString(),
      ...json,
    };
  }
}
