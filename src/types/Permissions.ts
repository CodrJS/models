export type ResourceType = `${ResourceEnum}`;
export enum ResourceEnum {
  // User Domain -- how users access
  Organization = "ORGANIZATION",
  User = "USER",
  Profile = "PROFILE",
  UserGroup = "USERGROUP",
  // Project domain -- apps for how users interact
  Project = "PROJECT",
  Dataset = "DATASET",
  Sample = "SAMPLE",
  Annotation = "ANNOTATION",
  // Core domain -- cross functional domain apps
  Config = "CONFIG",
  Audit = "AUDIT",
  // Preferences? (privacy/data processing, messaging, etc)
  Message = "MESSAGE",
}
export type ActionType = `${ActionEnum}`;
export enum ActionEnum {
  Create = "CREATE",
  Read = "READ",
  Update = "UPDATE",
  Delete = "DELETE",
}

export type PermissionType = `${ActionEnum}:${ResourceEnum}`;
