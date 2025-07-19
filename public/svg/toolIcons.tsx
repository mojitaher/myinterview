"use client";
import Image from "next/image";
import { imageSrc } from "./icons";

export default function ToolsIcons() {
  return (
    <>
      <div>
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
          Skills
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-10 place-items-center mx-auto w-fit">
        {imageSrc.map((src, index) => (
          <div
            key={index}
            className="
    p-5 rounded-full bg-white  hover:bg-gradient-to-r from-[#00D1FF99] via-[#0066FF99] to-[#00113399]
    
  "
          >
            <Image
              src={src.src}
              alt="react"
              width={100}
              height={100}
              className="
      transition-transform
      duration-500
      ease-in-out
      hover:-translate-y-2
      hover:translate-x-2
      hover:rotate-3
      hover:scale-105
      drop-shadow-lg
      hover:drop-shadow-green-300
    
    "
            />
          </div>
        ))}
      </div>
    </>
  );
}
