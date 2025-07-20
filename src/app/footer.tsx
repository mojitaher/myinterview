import Link from "next/link";
import { socials } from "./social/links";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      id="contact"
      className="w-full bg-gradient-to-r from-[#00ffcc1a] via-[#0066ff11] to-[#00000022] backdrop-blur-2xl backdrop-saturate-150 border-t border-[#00ffcc33] text-white py-8 mt-20 shadow-[0_0_20px_#00ffcc66]"
    >
      <div className="mx-auto flex flex-col md:flex-row items-start justify-between px-6 gap-10">
        <div className="text-center md:text-left flex flex-col gap-4">
          <h2 className="text-4xl font-bold my-4">{t("contactMe")}</h2>
          <span className="inline-flex items-center gap-2 text-lg">
            <p>{t("Phone")} :</p>
            <a
              href="tel:+989034155124"
              className="hover:text-[#00ffcc] hover:drop-shadow-[0_0_5px_#00ffcc] transition"
            >
              09034155124
            </a>
          </span>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 text-white/70">
          {socials.map((app, index) => (
            <div
              className="flex items-center gap-2 hover:text-[#00ffcc] hover:drop-shadow-[0_0_6px_#00ffcc] transition-all"
              key={index}
            >
              {app.svg}
              <Link href={app.link}>{app.name}</Link>
            </div>
          ))}
          <p className="text-xs text-gray-400 mt-4">
            © 2025 Mojtaba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
