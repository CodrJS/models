import config from "@codrjs/config";

export class OpenAPI {
  info: {
    title: string;
    description: string;
  };
  servers: {
    url: string;
    description: string;
  }[];

  constructor() {
    this.info = config.openapi?.info;
    this.servers = config.openapi?.servers
      .map(server =>
        server.url
          ? {
              url: server.url,
              description: server.description ?? "",
            }
          : undefined,
      )
      .filter(s => !!s) as { url: string; description: string }[];
  }

  toJSON() {
    return {
      info: this.info,
      servers: this.servers,
    };
  }
}
