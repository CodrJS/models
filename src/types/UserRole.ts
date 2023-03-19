export type RoleType = "admin" | "researcher" | "annotator" | "system";
export type UserRoleType = `codr:${RoleType}`;
export enum USERROLE {
  "codr:system" = "System",
  "codr:admin" = "Admin",
  "codr:researcher" = "Researcher",
  "codr:annotator" = "Annotator",
}
