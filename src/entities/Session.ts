import type { Types } from "mongoose";
import { Base, IBase } from "./Base";
import { AtLeast } from "@/types";

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

export interface ISession extends IBase<"Session"> {
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
  userId: Types.ObjectId;
  lastSeenAt: Date;

  constructor({
    status = "INITIATING",
    os = "UNKNOWN",
    browser = "UNKNOWN",
    ipAddress = "UNKNOWN",
    userId,
    lastSeenAt,
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: AtLeast<ISession, "createdBy" | "userId">) {
    super({ _id, __v, createdAt, updatedAt, createdBy, updatedBy });
    this.status = status;
    this.os = os;
    this.browser = browser;
    this.ipAddress = ipAddress;
    this.userId = userId;
    this.lastSeenAt = new Date(lastSeenAt || Date.now());
  }

  toJSON() {
    const json = super.toJSON();
    return {
      status: this.status,
      os: this.os,
      browser: this.browser,
      ipAddress: this.ipAddress,
      userId: this.userId,
      lastSeenAt: this.lastSeenAt.toISOString(),
      ...json,
    };
  }
}
