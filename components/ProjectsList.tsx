import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ProjectType } from "@/components/types/type";
import React from "react";

type ProjectListProps = {
  projects: ProjectType[];
};

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="flex h-screen w-full justify-center px-4">
      <div className="w-full max-w-md">
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
                      className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                    >
                      <a href="#" className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {project.name}
                      </a>
                      {/* <ul
                        className="flex gap-2 text-white/50"
                        aria-hidden="true"
                      >
                        <li>{post.date}</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul> */}
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
