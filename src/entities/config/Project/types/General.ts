import { TaskType } from "../../../../types";

export interface GeneralConfig {
  title: string;
  type: TaskType;
  slug: string;
  bgColorClass: string;
  guidelines?: string;
  anonymize: boolean;
  private: boolean;
}
