"use client";
import ProjectSilder from "@/components/slider";
import ToolsIcons from "../../public/svg/toolIcons";
import Aboutme from "../components/aboutme";
import Header from "../components/header";
import Projects from "./project/project";

export default function Home() {
  return (
    <>
      <Header />
      <Aboutme />
      <ToolsIcons />
      <ProjectSilder />
      <Projects />
    </>
  );
}
