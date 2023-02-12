import { UserRoleType } from "../types/UserRole";

export interface User {
  name?: {
    first: string;
    last: string;
    preferred?: string;
  };
  email: string;
  accessToken: string;
  refreshToken: string;
  role: UserRoleType;
  flags: {
    isDisabled: boolean;
    isAnonymous: boolean;
  };
  createdAt: string;
  updatedAt: string;
}