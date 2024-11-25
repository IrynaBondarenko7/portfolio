"use client";
import React, { useEffect, useState } from "react";
import { ProjectsItem } from "./ProjectsItem";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ProjectType } from "@/components/types/type";
import { Loading } from "./Loading";
import { IsError } from "./IsError";
import { Filter } from "./Filter";

async function fetchProjects(): Promise<ProjectType[]> {
  const apiUrl = process.env.NEXT_PUBLIC_PROJECTS_API_KEY!;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export const ProjectsList = () => {
  const [projectsData, setProjectsData] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjectsData(data);
        setLoading(false);
      } catch (err: unknown) {
        console.log(err);
        setError(true);
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleFilter = (value: string | null) => {
    setFilter(value || "");
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <IsError />;
  }

  return (
    <>
      <Filter handleFilter={handleFilter} projectsData={projectsData} />
      <div className="flex h-screen w-full justify-center">
        <div className="w-full">
          <TabGroup>
            <TabList className="flex gap-4 justify-center">
              {projectsData.map(({ type }) => (
                <Tab
                  key={type}
                  className="rounded-full py-1 px-3 text-sm/6 xl:text-base font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                >
                  {type}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {projectsData.map(({ type, projects }) => {
                const sortedProjects = projects
                  .toSorted((a, b) => b.id - a.id)
                  .filter((project) =>
                    filter ? project.technologies.includes(filter) : true
                  );
                return (
                  <TabPanel key={type} className="rounded-xl bg-white/5 p-3">
                    <ul>
                      {sortedProjects.map((project, index) => (
                        <ProjectsItem
                          key={project.id}
                          project={project}
                          index={index}
                        />
                      ))}
                    </ul>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </>
  );
};
