import { socialLinks } from "@/data/socialLinks";
import type { SocialLink } from "@/types/socialLinks";

const delay = (ms = 120) => new Promise<void>((r) => setTimeout(r, ms));

export async function getSocialLinks(): Promise<SocialLink[]> {
  try {
    await delay();
    return socialLinks;
  } catch (error) {
    console.error("[socialLinksService.getSocialLinks]", error);
    throw new Error("Não foi possível carregar as redes sociais.");
  }
}