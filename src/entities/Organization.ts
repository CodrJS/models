import { Group, IGroup } from "./Group";

interface Flags {
  isActive: boolean;
  isDeleted: boolean;
}
export interface IOrganization extends IGroup<"Organization", Flags> {
  slug: string;
  domain: string; // to restrict signin to a specified domain
}

export class Organization extends Group {
  readonly slug: string;
  readonly domain: string;

  constructor({
    flags = {
      isActive: true,
      isDeleted: false,
    },
    _id,
    __v,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
    name,
    members,
    slug,
    domain,
  }: IOrganization) {
    super({
      _id,
      __v,
      createdAt,
      updatedAt,
      createdBy,
      updatedBy,
      name,
      members,
      flags,
    });
    this.slug = slug;
    this.domain = domain;
  }

  toJSON() {
    const json = super.toJSON();
    return {
      ...json,
      slug: this.slug,
    };
  }
}
