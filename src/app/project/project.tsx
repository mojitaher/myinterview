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

export default function Projects() {
  const text1 = `Site for watching top IMDB movies. This site is the final project for the codingfront bootcamp and has infinityScroll and several different routes for registration and login and movie information. This site is also translated into both Persian and English.`;
  const text2 = `The movie information page opens by clicking on any of the cards and enters the root, and all the movie information, such as the year of production, the time of the movie, etc., other information is entered directly from the source and displayed.`;
  const text3 = `You can watch all the movies on the site without logging in, but to display the site's quality better, I used a login page, which requires you to register first, and after registering, you can log in anytime by entering your email and password.`;
  const text4 = `As you know, you must register before logging in, and by providing sufficient information, you can register. Note that it only stores this information for a few days and after registration, it automatically goes to the main route.`;
  const hackText = `This site is just UI to increase the level of design and this project was for the midterm coding front end bootcamp and all design skills were used in this project.`;
  const hackText2 = `Using tools like flex, col, etc., all the UI inside Figma is done accurately and flawlessly, and it is a complete design.`;
  const hackText3 = `The dark background colors used are written as var to make the codes more readable, and there is another page that sets the col size of the page to the display size.`;
  const hackText4 = `The font used on the site is yekan and you can run the project via the live server.`;
  return (
    <>
      <div id="projects" className="mt-10 py-10">
        <div className="flex justify-between">
          <h1
            className="text-white text-4xl p-4"
            style={{
              textShadow: `
      0 1px 0 #00ffcc,
      0 2px 0 #00ffcc,
      0 3px 2px rgba(0, 255, 204, 0.5),
      0 0 10px #00ffe0,
      0 0 20px #00ffe0
    `,
            }}
          >
            projects (imdb)
          </h1>
          <button
            className="
          bg-gradient-to-r from-green-400 via-emerald-500 to-teal-300
          rounded-2xl
      transition-transform
      duration-500
      ease-in-out
      hover:-translate-y-2
      hover:translate-x-2
      hover:scale-105
      drop-shadow-lg
      hover:drop-shadow-green-300
    
    "
          >
            <a
              href="https://github.com/mojitaher/IMDB"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-4xl p-4 flex items-center gap-2"
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
      <div className="mt-10 py-10">
        <div className="flex justify-between">
          <h1
            className="text-white text-4xl p-4"
            style={{
              textShadow: `
      0 1px 0 #00ffcc,
      0 2px 0 #00ffcc,
      0 3px 2px rgba(0, 255, 204, 0.5),
      0 0 10px #00ffe0,
      0 0 20px #00ffe0
    `,
            }}
          >
            projects (Hack)
          </h1>
          <button
            className="
          bg-gradient-to-r from-green-400 via-emerald-500 to-teal-300
          rounded-2xl
      transition-transform
      duration-500
      ease-in-out
      hover:-translate-y-2
      hover:translate-x-2
      hover:scale-105
      drop-shadow-lg
      hover:drop-shadow-green-300
    
    "
          >
            <a
              href="https://github.com/mojitaher/hacker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-4xl p-4 flex items-center gap-2"
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
      <div className="mt-10 py-10">
        <h2
          className="text-white text-4xl p-4"
          style={{
            textShadow: `
      0 1px 0 #00ffcc,
      0 2px 0 #00ffcc,
      0 3px 2px rgba(0, 255, 204, 0.5),
      0 0 10px #00ffe0,
      0 0 20px #00ffe0
    `,
          }}
        >
          And two more project in progress as team(todolist ,marketing)
        </h2>
        <div className="flex justify-center items-center mt-10 gap-[10%] ">
          <Image
            src={demo}
            alt="demo"
            width={400}
            height={300}
            className=" rounded-3xl shadow-orange-300 shadow-xl"
          />
          <Image
            src={demo2}
            alt="demo"
            width={400}
            height={300}
            className=" rounded-3xl shadow-orange-300 shadow-xl"
          />
        </div>
      </div>
    </>
  );
}
