export type RoleType = "admin" | "researcher" | "annotator" | "system";
export type UserRoleType = `codr:${RoleType}`;
export enum UserRoleEnum {
  SYSTEM = "codr:system",
  ADMIN = "codr:admin",
  RESEARCHER = "codr:researcher",
  ANNOTATOR = "codr:annotator",
}
export type UserType = "ANONYMOUS" | "MEMBER" | "EXTERNAL" | "SYSTEM";
export enum UserEnum {
  ANONYMOUS = "Anonymous",
  MEMBER = "Member",
  EXTERNAL = "External",
  SYSTEM = "System",
}
