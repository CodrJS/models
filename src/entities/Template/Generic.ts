export interface IGenericTemplateOptions<T> {
  requiredParams: T[];
}

export default class GenericTemplate<T extends string>
  implements IGenericTemplateOptions<T>
{
  readonly template: string;
  readonly requiredParams: T[];

  /**
   *
   * @param {string} template Email Template
   * @param {T[]} requiredParams Required parameters for template
   */
  constructor(template: string, { requiredParams }: { requiredParams: T[] }) {
    this.template = template;
    this.requiredParams = requiredParams;
  }

  get config() {
    return {};
  }

  /**
   * @param {{[x: string]: string}} params Values to replace placeholders in template text.
   */
  validate(params: Record<T, string>) {
    const missing: string[] = [];
    for (const opt of this.requiredParams) {
      if (Object.prototype.hasOwnProperty.call(params, opt)) {
        // check to makesure the option is not empty
        if (params[opt] === "") {
          missing.push(opt);
        }
      } else {
        // if the option is complete missing, add it to the list
        missing.push(opt);
      }
    }

    if (missing.length) {
      throw new Error(`Missing template parameters: ${missing.join(", ")}`);
    } else {
      return true;
    }
  }

  render(options: Record<T, string>) {
    return new Promise<string>((resolve, reject) => {
      try {
        // test if valid (will throw error)
        this.validate(options);

        // do replacement
        const content = this.template.replace(
          /{(\w*)}/g,
          function replacer(m, key: T) {
            if (Object.prototype.hasOwnProperty.call(options, key)) {
              return options[key];
            } else {
              throw new Error(`Missing parameter: ${key}`);
            }
          },
        );

        // resolve rendered template
        resolve(content);
      } catch (e) {
        reject(e);
      }
    });
  }
}
