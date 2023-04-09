import config from "@codrjs/config";

export class Metadata {
  env: "dev" | "qa" | "stage" | "prod";
  name: string;
  version: string;
  docker: {
    hostname: string;
  };
  node: {
    env: "production" | "developement" | "testing";
    version: string;
    modules: Record<string, string>;
    yarnVersion: string;
  };
  git: {
    branch: string;
    commit: string;
    repo: string;
  };

  constructor() {
    this.env = config.env;
    this.name = config.name;
    this.version = config.version;
    this.git = config.git;
    this.node = config.node;
    this.docker = {
      hostname: config.hostname,
    };
  }

  toJSON() {
    return {
      env: this.env,
      name: this.name,
      version: this.version,
      git: this.git,
      node: this.node,
      docker: this.docker,
    };
  }
}
