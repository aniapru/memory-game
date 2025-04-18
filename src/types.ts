import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Card {
  id: number;
  icon: IconDefinition;
  name?: string;
  style: { color: string };
}

export interface Setup {
  level: string;
  theme: string;
}
