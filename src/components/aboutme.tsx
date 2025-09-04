import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import programAnimation from "@/animation/Programming Computer.json";

export default function Aboutme() {
  const { t } = useTranslation();
  return (
    <div id="about">
      <h1 className="text-4xl font-bold dark:text-[#00ffcc] text-gray-600 drop-shadow-[0_0_10px_#00ffcc] p-4">
        {t("menuAbout")}
      </h1>
      <div className="flex lg:flex-row lg:justify-between lg:p-6 lg:gap-5 lg:items-center dark:bg-gradient-to-b dark:from-[#001f1f] dark:via-[#000000] dark:to-[#001f1f] rounded-3xl border border-[#3e3c3c] bg-gradient-to-r from-[#e0f7fa] via-[#f5fdff] to-[#ffffff] sm:flex-col">
        <p className="text-4xl font-bold text-[#444b52] leading-normal  ">
          {t("Aboutme")}
        </p>

        <div className="w-[500px] h-[500px] bg-gradient-to-r from-[#00D1FF99] via-[#0066FF99] to-[#00113399] rounded-l-full ">
          <Lottie
            animationData={programAnimation}
            loop
            className="w-[500px] h-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
