import { personalInfo } from "@/data/personalInfo";
import type { PersonalInfo } from "@/types/personalInfo";

const delay = (ms = 120) => new Promise<void>((r) => setTimeout(r, ms));

export async function getPersonalInfo(): Promise<PersonalInfo> {
  try {
    await delay();
    return personalInfo;
  } catch (error) {
    console.error("[personalInfoService.getPersonalInfo]", error);
    throw new Error("Não foi possível carregar as informações pessoais.");
  }
}