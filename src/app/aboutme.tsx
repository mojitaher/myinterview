import Image from "next/image";
import avatar from "../../public/img/avatar.png";
import { useTranslation } from "react-i18next";

export default function Aboutme() {
  const { t } = useTranslation();
  return (
    <div id="about">
      <h1 className="text-4xl font-bold text-[#00ffcc] drop-shadow-[0_0_10px_#00ffcc] p-4">
        {t("menuAbout")}
      </h1>
      <div className="flex justify-between p-6 gap-5 items-center bg-gradient-to-b from-[#001f1f] via-[#000000] to-[#001f1f] rounded-3xl border border-[#3e3c3c]">
        <p className="text-4xl font-bold text-[#949292] leading-normal  ">
          {t("Aboutme")}
        </p>
        <Image
          src={avatar}
          alt="avatar"
          width={500}
          height={500}
          className=" bg-gradient-to-r from-[#00D1FF99] via-[#0066FF99] to-[#00113399] rounded-l-full "
        />
      </div>
    </div>
  );
}
