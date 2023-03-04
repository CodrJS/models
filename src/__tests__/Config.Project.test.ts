import { Config } from "..";
import { ProjectConfiguration } from "../config/Project";
import options from "../constants/project.json";

describe("Project Configuration", () => {
  it("does not throw an error", () => {
    const config = new Config.Project({
      verison: "v2",
      config: options as ProjectConfiguration,
    }).config;

    expect(config.general.bgColorClass).toBe("bg-pink-600");
    expect(config.general.title).toBe("Demo Project");
    expect(config.display.inputs[1]).toEqual({
      type: "text",
      value: "$sample",
      format: "**Practice:** $value.practice\\n\\n**Purpose:** $value.purpose",
    });
  });

  // it("generates missing options", () => {
  //   const config = ProjectConfig.from(options2);

  //   expect(config.slug).toBe(
  //     `my-project-${new Date().toISOString().split("T")[0]}`,
  //   );
  //   expect(config.display.inputs[1]).toEqual({
  //     type: "text",
  //     language: "Java",
  //     value: "model.data.methods.*.src_code",
  //   });
  // });
});
