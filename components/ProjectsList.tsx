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
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5 flex flex-col project-item md:even:flex-row-reverse project-item odd:pl-7 even:pr-7 gap-5 mb-4"
                    >
                      <div className="w-auto h-auto inline-block relative flex-none project-img-wrap">
                        <Image
                          src={project.imgLink}
                          alt={project.name}
                          width={200}
                          height={200}
                          className="relative inline-block rounded-lg"
                        />
                      </div>
                      <div className="flex-grow flex flex-col gap-4 mt-4">
                        <h2 className="font-semibold text-white text-base absolute project-title w-[135px] text-center">
                          {project.name}
                        </h2>
                        <p className="text-sm">{project.description}</p>
                        <ul className="flex gap-1 text-white/50 w-full flex-wrap">
                          {project.technologies.map((technology, index) => {
                            return (
                              <li key={index} className="text-sm leading-none">
                                {technology}
                                {index !== project.technologies.length - 1 && (
                                  <span className="ml-1">&middot;</span>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                        <ul className="flex justify-center gap-5">
                          <li>
                            <a
                              href={project.livePageLink}
                              className="w-24 text-center  py-1.5 text-xs font-semibold text-white border-[1px] border-white hover:border-transparent focus:border-transparent focus:shadow-sm hover:shadow-sm inline-block focus:shadow-white hover:shadow-white rounded-lg px-2 transition-all duration-300"
                              target="blank"
                            >
                              Live page
                            </a>
                          </li>
                          <li>
                            <a
                              href={project.gitHubLink}
                              className="w-24 text-center text-xs py-1.5  font-semibold text-white border-[1px] border-white hover:border-transparent focus:border-transparent focus:shadow-sm hover:shadow-sm inline-block focus:shadow-white hover:shadow-white rounded-lg px-2 transition-all duration-300"
                              target="blank"
                            >
                              GitHub repo
                            </a>
                          </li>
                        </ul>
                      </div>
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
