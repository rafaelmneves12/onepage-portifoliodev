import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

// Simulated latency to mimic a real REST endpoint.
const delay = (ms = 120) => new Promise<void>((r) => setTimeout(r, ms));

export async function getProjects(): Promise<Project[]> {
  try {
    await delay();
    return projects;
  } catch (error) {
    console.error("[projectsService.getProjects]", error);
    throw new Error("Não foi possível carregar os projetos.");
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    await delay();
    return projects.find((p) => p.id === id) ?? null;
  } catch (error) {
    console.error("[projectsService.getProjectById]", error);
    throw new Error("Não foi possível carregar o projeto.");
  }
}