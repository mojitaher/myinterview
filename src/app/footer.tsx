import Link from "next/link";
import { socials } from "./social/links";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      id="contact"
      className="w-full dark:bg-gradient-to-r dark:from-[#00ffcc1a] dark:via-[#0066ff11] dark:to-[#00000022] dark:backdrop-blur-2xl dark:backdrop-saturate-150 dark:border-t dark:border-[#00ffcc33] dark:text-white dark:shadow-[0_0_20px_#00ffcc66] bg-gradient-to-r from-[#e0f7fa] via-[#f5ffff] to-[#ffffff] border-t border-[#00e6d955] text-[#007c91] py-10 mt-20 shadow-[0_0_20px_#00e6d955]"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse sm:flex-col md:flex-row items-center md:items-start justify-between px-4 sm:px-6 gap-10 text-center md:text-left">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h2 className="text-3xl sm:text-4xl font-bold">{t("contactMe")}</h2>
          <span className="inline-flex items-center gap-2 text-base sm:text-lg">
            <p>{t("Phone")} :</p>
            <a
              href="tel:+989034155124"
              className="dark:hover:text-[#00ffcc] dark:hover:drop-shadow-[0_0_5px_#00ffcc] transition text-[#00e6d9] hover:drop-shadow-[0_0_6px_#00ffcc] hover:text-[#034642]"
            >
              09034155124
            </a>
          </span>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-white/70">
          {socials.map((app, index) => (
            <div
              className="flex items-center gap-2 dark:hover:text-[#00ffcc] dark:hover:drop-shadow-[0_0_6px_#00ffcc] text-[#00e6d9] hover:drop-shadow-[0_0_6px_#00ffcc] hover:text-[#034642] dark:text-white/20"
              key={index}
            >
              {app.svg}
              <Link href={app.link}>{app.name}</Link>
            </div>
          ))}
          <p className="text-xs text-gray-400 mt-4 text-center md:text-right">
            © 2025 Mojtaba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
