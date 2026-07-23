import { createFileRoute } from "@tanstack/react-router";
import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Technologies } from "@/components/Technologies";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Languages } from "@/components/Languages";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Certificates />
      <Languages />
      <Contact />
    </MainLayout>
  );
}
