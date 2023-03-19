import { Group, IGroup } from "./Group";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IUserGroup extends IGroup {
  flags?: {
    // anonymize the data?
    isAnonymous?: boolean;
    // display to others?
    isPrivate?: boolean;
    // others can join?
    isJoinable?: boolean;
  };
}

export class UserGroup extends Group {
  flags?: {
  isAnonymous?: boolean;
    isPrivate?: boolean;
    isJoinable?: boolean;
  };
  
  constructor({
    flags = { isAnonymous: false, isPrivate: false, isJoinable: false },
    ...base
  }: IUserGroup) {
    super(base);
    this.flags = flags;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      flags: this.flags,
    };
  }
}