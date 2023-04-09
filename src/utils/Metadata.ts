import config from "@codrjs/config";

export class Metadata {
  env: "dev" | "qa" | "stage" | "prod";
  version: string;
  name: string;
  docker: {
    hostname: string;
  };
  node: {
    env: "production" | "developement" | "testing";
    version: string;
    modules: string[];
    yarnVersion: string;
  };
  git: {
    branch: string;
    commit: string;
    repo: string;
  };

  constructor() {
    this.env = config.env;
    this.version = config.version;
    this.node = config.node;
    this.git = config.git;
    this.docker = {
      hostname: config.hostname,
    };
    this.name = config.name;
  }
}
