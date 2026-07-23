import type { ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="lg:pl-[340px] xl:pl-[380px]">{children}</main>
    </div>
  );
}