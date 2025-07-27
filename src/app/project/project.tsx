"use client";

import img1 from "../../../public/img/project (1).png";
import img2 from "../../../public/img/project (2).png";
import img3 from "../../../public/img/project (3).png";
import img4 from "../../../public/img/project (4).png";
import hack1 from "../../../public/img/hack (1).png";
import hack2 from "../../../public/img/hack (2).png";
import hack3 from "../../../public/img/hack (3).png";
import hack4 from "../../../public/img/hack (4).png";
import demo from "../../../public/img/demo.png";
import demo2 from "../../../public/img/demo2.png";
import ProjectCard from "./projectCards";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const text1 = t("text1");
  const text2 = t("text2");
  const text3 = t("text3");
  const text4 = t("text4");
  const hackText = t("hacktext");
  const hackText2 = t("hacktext2");
  const hackText3 = t("hacktext3");
  const hackText4 = t("hacktext4");

  return (
    <>
      <div
        id="projects"
        className="mt-10 py-10 px-4 sm:px-6 md:px-8 dark:bg-gradient-to-b dark:from-[#001f1f] dark:via-[#000000] dark:to-[#001f1f] backdrop-blur-md dark:bg-white/5 dark:border dark:border-white/10 rounded-xl border border-[#3e3c3c] bg-gradient-to-r from-[#e0f7fa] via-[#f5fdff] to-[#ffffff]"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl sm:text-4xl font-bold dark:text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc] p-4">
            {`${t("project")}(imdb)`}
          </h1>
          <button className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-300 rounded-2xl transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:translate-x-2 hover:scale-105 drop-shadow-lg hover:drop-shadow-green-300">
            <a
              href="https://github.com/mojitaher/IMDB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl sm:text-4xl p-4 flex items-center gap-2"
            >
              <GithubIcon size={30} />
              github
            </a>
          </button>
        </div>

        <ProjectCard image={img2} text={text1} reverse={false} />
        <ProjectCard image={img1} text={text2} reverse={true} />
        <ProjectCard image={img3} text={text3} reverse={false} />
        <ProjectCard image={img4} text={text4} reverse={true} />
      </div>

      <div className="mt-10 py-10 px-4 sm:px-6  md:px-8 dark:bg-gradient-to-b dark:from-[#001f1f] dark:via-[#000000] dark:to-[#001f1f] backdrop-blur-md dark:bg-white/5 dark:border dark:border-white/10 rounded-xl border border-[#3e3c3c] bg-gradient-to-r from-[#e0f7fa] via-[#f5fdff] to-[#ffffff]">
        <div className="flex flex-col md:flex-row justify-between items-center ">
          <h1 className="text-3xl sm:text-4xl font-bold dark:text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc] p-4">
            {`${t("project")}(hack)`}
          </h1>
          <button className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-300 rounded-2xl transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:translate-x-2 hover:scale-105 drop-shadow-lg hover:drop-shadow-green-300">
            <a
              href="https://github.com/mojitaher/hacker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl sm:text-4xl p-4 flex items-center gap-2"
            >
              <GithubIcon size={30} />
              github
            </a>
          </button>
        </div>

        <ProjectCard image={hack1} text={hackText} reverse={false} />
        <ProjectCard image={hack2} text={hackText2} reverse={true} />
        <ProjectCard image={hack3} text={hackText3} reverse={false} />
        <ProjectCard image={hack4} text={hackText4} reverse={true} />
      </div>

      <div className="mt-10 py-10 px-4 sm:px-6 md:px-8">
        <h2 className="text-3xl sm:text-2xl font-bold dark:text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc] p-4">
          {`${t("upcomming")}(todolist ,marketing)`}
        </h2>
        <div className=" flex flex-col md:flex-row justify-center items-center mt-10 gap-8 md:gap-[10%] ">
          <div className="relative w-[400px] h-[300px]">
            <Image
              src={demo}
              alt="demo"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover rounded-3xl shadow-orange-300 dark:shadow-[#00ffcc] shadow-xl"
            />
          </div>
          <div className="relative w-[400px] h-[300px]">
            <Image
              src={demo2}
              alt="demo"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover rounded-3xl shadow-orange-300 dark:shadow-[#00ffcc] shadow-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}
