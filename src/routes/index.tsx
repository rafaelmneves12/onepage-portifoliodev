import { createFileRoute } from "@tanstack/react-router";
import { MainLayout } from "@/layouts/MainLayout";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
}
