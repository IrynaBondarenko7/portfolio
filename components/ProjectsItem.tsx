import React from "react";
import Image from "next/image";
import { ProjectsItemType } from "@/components/types/type";

type ProjectsItemProps = {
  project: ProjectsItemType;
};

export const ProjectsItem: React.FC<ProjectsItemProps> = ({ project }) => {
  return (
    <li className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5 flex flex-col md:flex-row items-stretch project-item md:even:flex-row-reverse project-item odd:pl-5 even:pr-5 gap-5 mb-4 xl:pb-9 md:even:pr-7 md:odd:pl-7">
      <div className="w-auto h-auto inline-block relative flex-none project-img-wrap self-start">
        <Image
          src={project.imgLink}
          alt={project.name}
          width={200}
          height={200}
          className="relative inline-block rounded-lg xl:w-[300px] xl:h-auto"
        />
      </div>
      <div className="flex-grow flex flex-col gap-4 mt-4">
        <h2 className="font-semibold text-white text-base xl:text-lg absolute md:static project-title w-[105px] sm:w-[130px] md:w-auto text-center">
          {project.name}
        </h2>
        <p className="text-sm xl:text-base">{project.description}</p>
        <ul className="flex gap-1 text-white/50 w-full flex-wrap">
          {project.technologies.map((technology, index) => {
            return (
              <li
                key={index}
                className="text-sm xl:text-base leading-none xl:leading-none"
              >
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
              className="w-24 xl:w-28 text-center  py-1.5 text-xs xl:text-sm font-semibold text-white border-[1px] border-white hover:border-transparent focus:border-transparent focus:shadow-sm hover:shadow-sm inline-block focus:shadow-white hover:shadow-white rounded-lg px-2 transition-all duration-300"
              target="blank"
            >
              Live page
            </a>
          </li>
          <li>
            <a
              href={project.gitHubLink}
              className="w-24 xl:w-28 text-center text-xs py-1.5 xl:text-sm font-semibold text-white border-[1px] border-white hover:border-transparent focus:border-transparent focus:shadow-sm hover:shadow-sm inline-block focus:shadow-white hover:shadow-white rounded-lg px-2 transition-all duration-300"
              target="blank"
            >
              GitHub repo
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};
