import type { Metadata } from "next";
import { ProjectsList } from "@/components/ProjectsList";

export const metadata: Metadata = {
  title: "Iryna's Projects",
  description: "React, Next.js, Javascript projects",
};

export default function ProjectsPage() {
  return (
    <section className="mt-20">
      <ProjectsList />
    </section>
  );
}
