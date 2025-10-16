"use client";
import Image from "next/image";
import { imageSrc } from "./icons";
import { useTranslation } from "react-i18next";

export default function ToolsIcons() {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-gray-600 dark:text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc] p-4">
          {t("skills")}
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-10 place-items-center mx-auto w-fit ">
        {imageSrc.map((src, index) => (
          <div
            key={index}
            className="
    lg:p-5 md:p-4 p-2 rounded-full bg-white  hover:bg-gradient-to-r from-[#00D1FF99] via-[#0066FF99] to-[#00113399] 
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
