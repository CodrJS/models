import config from "@codrjs/config";
import GenericTemplate, { IGenericTemplateOptions } from "./Generic";

export interface IEmailTemplateOptions<T> extends IGenericTemplateOptions<T> {
  subject: string;
  to?: string;
  cc?: string[] | undefined;
  bcc?: string[] | undefined;
  replyTo?: string[] | undefined;
}

export default class EmailTemplate<T extends string>
  extends GenericTemplate<T>
  implements IEmailTemplateOptions<T>
{
  readonly subject: string;
  to?: string;
  cc?: string[];
  bcc?: string[];
  replyTo?: string[];

  constructor(
    template: string,
    { subject, requiredParams, to, cc, bcc, replyTo }: IEmailTemplateOptions<T>,
  ) {
    super(template, { requiredParams });
    this.subject = subject;
    this.to = to;
    this.cc = cc;
    this.bcc = bcc;
    this.replyTo = replyTo;
  }

  get config() {
    return {
      subject: this.subject,
      from: config.email.from as string,
      replyTo: config.email.replyTo as string,
      to: this.to,
      cc: this.cc,
      bcc: this.bcc,
    };
  }

  toHTML(options: Record<T, string>) {
    return Promise.resolve()
      // render template.
      .then(() => this.render(options))
      // throw into HTML wrapper.
      .then(content => this.wrapperHTML({ content }));
  }

  /**
   * Wrapper HTML
   * @param {Object} Options
   * @param {string} Options.content
   * @returns
   */
  private wrapperHTML({ content }: { content: string }) {
    return `<body
  style="background: #f3f4f6; padding: 2em 1em; font-size:16px; font-family:source-sans-pro, Roboto, sans-serif;"
>
  <div style=" text-align: center;">
    <div
      style="background: white; padding: 2em; border-radius: 0.5em; max-width: 65ch; text-align: left; margin: auto;"
    >
      ${content}
      <br /><br />
      Best,<br />
      Your Codr Team<br />
      support@codrjs.com
    </div>
  </div>
</body>`.replace(/[\n]*/g, "");
  }
}

/**
 * Email header image code
 *
 * <img
 *   src="cid:logo"
 *   alt="Codr Logo"
 *   style="display: block; width: 100%; height: 48px; margin-bottom: 2em; object-fit: contain;"
 * />
 */
