export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Nativo";

export interface Language {
  id: string;
  name: string;
  level: CEFRLevel;
  label: string;
  flag: string;
}