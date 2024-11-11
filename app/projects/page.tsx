import { ProjectType } from "@/components/types/type";

async function fetchProjects(): Promise<ProjectType[]> {
  const response = await fetch("http://localhost:3000/api/projects/");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export default async function ProjectsPage() {
  const projects = await fetchProjects();
  console.log(projects);

  return (
    <section>
      <h1>Projects</h1>
    </section>
  );
}
