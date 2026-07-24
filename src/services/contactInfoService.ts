import { contactInfo } from "@/data/contactInfo";
import type { ContactInfo } from "@/types/contactInfo";

const delay = (ms = 120) => new Promise<void>((r) => setTimeout(r, ms));

export async function getContactInfo(): Promise<ContactInfo> {
  try {
    await delay();
    return contactInfo;
  } catch (error) {
    console.error("[contactInfoService.getContactInfo]", error);
    throw new Error("Não foi possível carregar as informações de contato.");
  }
}