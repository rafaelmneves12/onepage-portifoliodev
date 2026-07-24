import { languages } from "@/data/languages";
import type { Language } from "@/types/language";

const delay = (ms = 120) => new Promise<void>((r) => setTimeout(r, ms));

export async function getLanguages(): Promise<Language[]> {
  try {
    await delay();
    return languages;
  } catch (error) {
    console.error("[languagesService.getLanguages]", error);
    throw new Error("Não foi possível carregar os idiomas.");
  }
}