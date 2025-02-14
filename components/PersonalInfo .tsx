"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export const PersonalInfo = () => {
  return (
    <>
      <motion.h1
        className="text-4xl xl:text-7xl md:text-5xl 2xl:text-8xl font-bona-nova title flex"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <span className="border-b-2">H</span>ELLO
      </motion.h1>
      <h2 className="font-serif  xl:text-xl 2xl:text-2xl text-sm">
        My name is Bondarenko. Iryna Bondarenko. I’m a software developer. My
        first language? JavaScript. And my first words? “Hello, world!”. I come
        equipped with skills like safeguarding commercial secrets, mastering
        team dynamics, and the art of meaningful conversation. All of this,
        honed through a keen eye for detail, relentless motivation, and a knack
        for quick adaptation. I am dedicated to leveraging my skills to drive
        innovative solutions and contribute to impactful projects. <br />
        Thank you for visiting my portfolio! You can have a look at my projects{" "}
        <Link href="/projects" className="ml-1 border-b-[1px] border-white">
          here
        </Link>
        .
      </h2>
      <h3 className="text-xl md:text-lg xl:text-2xl 2xl:text-3xl font-dancing-script text-center md:text-left">
        P.S. Her Software Development Secret Service
      </h3>
    </>
  );
};
