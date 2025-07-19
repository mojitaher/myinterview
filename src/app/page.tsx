"use client";
import ToolsIcons from "../../public/svg/toolIcons";
import Aboutme from "./aboutme";
import Header from "./header";
import Projects from "./project/project";

export default function Home() {
  return (
    <>
      <Header />
      <Aboutme />
      <ToolsIcons />
      <Projects />
    </>
  );
}
