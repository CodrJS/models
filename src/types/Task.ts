export type TaskType =
  | "classification"
  | "tagging"
  | "code-tagging"
  | "translation";
export enum AnnotationTask {
  Classification = "classification",
  Tagging = "tagging",
  CodeTaging = "code-tagging",
  Traslation = "translation",
}
