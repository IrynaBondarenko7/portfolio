import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ProjectType } from "@/components/types/type";
import React from "react";
import Image from "next/image";

type ProjectListProps = {
  projects: ProjectType[];
};

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="flex h-screen w-full justify-center">
      <div className="w-full">
        <TabGroup>
          <TabList className="flex gap-4 justify-center">
            {projects.map(({ type }) => (
              <Tab
                key={type}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {type}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {projects.map(({ type, projects }) => (
              <TabPanel key={type} className="rounded-xl bg-white/5 p-3">
                <ul>
                  {projects.map((project) => (
                    <li
                      key={project.id}
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5 "
                    >
                      <h2 className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {project.name}
                      </h2>
                      <div className="project-img-wrap w-auto h-auto inline-block relative ml-4">
                        <Image
                          src={project.imgLink}
                          alt={project.name}
                          width={200}
                          height={200}
                          className="relative inline-block rounded-lg"
                        />
                      </div>
                      <ul className="flex gap-1 text-white/50 w-full flex-wrap">
                        {project.technologies.map((technology, index) => {
                          return (
                            <li key={index} className="leading-none">
                              {technology}
                              {index !== project.technologies.length - 1 && (
                                <span className="ml-1">&middot;</span>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};
