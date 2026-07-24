import { certificates } from "@/data/certificates";
import type { Certificate } from "@/types/certificate";

const delay = (ms = 120) => new Promise<void>((r) => setTimeout(r, ms));

export async function getCertificates(): Promise<Certificate[]> {
  try {
    await delay();
    return certificates;
  } catch (error) {
    console.error("[certificatesService.getCertificates]", error);
    throw new Error("Não foi possível carregar os certificados.");
  }
}