import type { ActionEnum, ResourceEnum } from "./Permissions";
export type PermissionErrorType =
  `EE:${ResourceEnum}:${ActionEnum}:UNAUTHORIZED`;
export type ResourceExceptionErrorType = `EE:${ResourceEnum}:EXCEPTION`;
export type DatabaseErrorType = `EE:${ResourceEnum}:DATABASE:EXCEPTION`;
export type ErrorType =
  | PermissionErrorType
  | DatabaseErrorType
  | ResourceExceptionErrorType;
