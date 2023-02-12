export type InputField = "text";
export type OutputField =
  | "short-text"
  | "long-text"
  | "radio"
  | "multiple-choice"
  | "range";

// what the researchers provide to display to users
export interface Input {
  type: InputField;
  value?: string;
  format?: string;
  collapsible?: boolean;
  header?: string;
}

// where the user provides their annotation
export interface Output {
  type: OutputField;
  prompt?: string;
  /** Range is a tupple, [min, max] */
  range?: [number, number];
  options?: string | { key: string; value: string | number }[];
}

export interface DisplayConfig {
  inputs: Array<Input>;
  outputs: Array<Output>;
}