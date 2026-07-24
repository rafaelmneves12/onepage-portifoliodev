import { technologiesFiltered } from "@/data/technologies";
import type { Technology } from "@/types/technology";

const delay = (ms = 120) => new Promise<void>((r) => setTimeout(r, ms));

export async function getTechnologies(): Promise<Technology[]> {
  try {
    await delay();
    return technologiesFiltered;
  } catch (error) {
    console.error("[technologiesService.getTechnologies]", error);
    throw new Error("Não foi possível carregar as tecnologias.");
  }
}