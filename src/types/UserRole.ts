export type RoleType = "admin" | "researcher" | "annotator";
export type UserRoleType = `codr:${RoleType}`;
export enum USERROLE {
  "codr:admin" = "Admin",
  "codr:researcher" = "Researcher",
  "codr:annotator" = "Annotator",
}
