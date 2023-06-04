import { Types } from "mongoose";
import { Config } from "..";
import options from "../constants/project.json";
import { DisplayConfig } from "../entities/Config/Project/types/Display";

describe("Project Configuration", () => {
  it("does not throw an error", () => {
    const config = new Config.Project({
      display: <DisplayConfig>options.display,
      sample: options.sample,
      verison: "v2",
      createdBy: new Types.ObjectId(0),
    });

    expect(config.display.inputs[1]).toEqual({
      type: "text",
      value: "$sample",
      format: "**Practice:** $value.practice\\n\\n**Purpose:** $value.purpose",
    });
  });
});
