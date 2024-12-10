import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";

export const technologies = [
  {
    name: "JavaScript",
    component: (
      <RiJavascriptFill className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
    ),
  },
  {
    name: "React",
    component: (
      <FaReact className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
    ),
  },
  {
    name: "Next.js",
    component: (
      <RiNextjsFill className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
    ),
  },
  {
    name: "Node.js",
    component: (
      <RiNodejsLine className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
    ),
  },
  {
    name: "Typescript",
    component: (
      <BiLogoTypescript className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
    ),
  },
  {
    name: "Html",
    component: (
      <TiHtml5 className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
    ),
  },
  {
    name: "Css",
    component: (
      <IoLogoCss3 className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
    ),
  },
  {
    name: "TailwindCss",
    component: (
      <RiTailwindCssFill className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
    ),
  },
  {
    name: "Postgresql ",
    component: (
      <BiLogoPostgresql className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
    ),
  },
  {
    name: "Mongodb ",
    component: (
      <SiMongodb className="w-6 h-6 md:w-9 md:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14" />
    ),
  },
];
