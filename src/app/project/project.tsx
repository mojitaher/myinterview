"use client";
import { useInView } from "react-intersection-observer";
import img1 from "../../../public/img/project (1).png";
import img2 from "../../../public/img/project (2).png";
import img3 from "../../../public/img/project (3).png";
import img4 from "../../../public/img/project (4).png";
import weatherImg1 from "../../../public/img/weather (1).png";
import weatherImg2 from "../../../public/img/weather (2).png";
import weatherImg3 from "../../../public/img/weather (3).png";
import weatherImg4 from "../../../public/img/weather (4).png";
import ProjectCard from "./projectCards";
import { GithubIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const text1 = t("text1");
  const text2 = t("text2");
  const text3 = t("text3");
  const text4 = t("text4");
  const weatherTxt = t("weathertxt");
  const weatherTxt2 = t("weathertxt2");
  const weatherTxt3 = t("weathertxt3");
  const weatherTxt4 = t("weathertxt4");

  return (
    <>
      <div
        id="projects"
        className={`mt-10 py-10 px-4 sm:px-6 md:px-8 dark:bg-gradient-to-b dark:from-[#001f1f] dark:via-[#000000] dark:to-[#001f1f] backdrop-blur-md dark:bg-white/5 dark:border dark:border-white/10 rounded-xl border border-[#3e3c3c] bg-gradient-to-r from-[#e0f7fa] via-[#f5fdff] to-[#ffffff]`}
      >
        <div
          className={`flex flex-col md:flex-row justify-between items-center `}
        >
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
            {`${t("project")}(weather)`}
          </h1>
          <button className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-300 rounded-2xl transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:translate-x-2 hover:scale-105 drop-shadow-lg hover:drop-shadow-green-300">
            <a
              href="https://github.com/mojitaher/weather"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl sm:text-4xl p-4 flex items-center gap-2"
            >
              <GithubIcon size={30} />
              github
            </a>
          </button>
        </div>

        <ProjectCard image={weatherImg1} text={weatherTxt} reverse={false} />
        <ProjectCard image={weatherImg2} text={weatherTxt2} reverse={true} />
        <ProjectCard image={weatherImg3} text={weatherTxt3} reverse={false} />
        <ProjectCard image={weatherImg4} text={weatherTxt4} reverse={true} />
      </div>
      <div className="relative my-10">
        <div className="neon-line"></div>
      </div>
    </>
  );
}
