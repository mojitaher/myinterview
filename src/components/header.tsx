import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../app/118.n/i18n";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Link from "next/link";
import { File, LanguagesIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../app/context/theme";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    const newLang = i18n.language === "fa" ? "en" : "fa";
    i18n.changeLanguage(newLang);
  };
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const menuItems = [
    { text: t("myresume"), icon: <File />, link: "/Resum" },
    { text: t("menuAbout"), icon: <InfoIcon />, link: "#about" },
    { text: t("menuResume"), icon: <WorkIcon />, link: "#projects" },
    { text: t("menuContact"), icon: <ContactMailIcon />, link: "#contact" },
  ];
  const list = () => (
    <Box
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ text, icon, link }) => (
          <ListItem key={text} disablePadding>
            <Link href={link}>
              <ListItemButton
                sx={{
                  m: 2,
                  px: 3,
                  py: 1.5,
                  borderRadius: "10px",
                  color: "#00ffcc",
                  textShadow: "0 0 5px #00ffcc",
                  backgroundColor: "#00ffcc11",
                  transition: "all 0.3s ease",
                  gap: 3,
                  "&:hover": {
                    backgroundColor: "#00ffcc33",
                    boxShadow: "0 0 10px #00ffcc, 0 0 20px #00ffcc",
                    transform: "scale(1.05)",
                  },
                }}
              >
                {icon}
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const { theme, toggleTheme } = useTheme()!;

  return (
    <header
      className="relative w-full min-h-screen 
  bg-white text-gray-800 
  dark:bg-black dark:text-white 
  overflow-hidden flex flex-col justify-center px-6 md:px-20"
    >
      {/* دکمه تغییر زبان */}
      <div className="absolute top-5 right-25 sm:right-15 ">
        <button
          onClick={() => toggleLang()}
          className="flex items-center gap-4 px-3 py-1 rounded-xl 
        bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200
        dark:bg-transparent dark:border-[#00e6d9] dark:text-[#00e6d9] dark:hover:bg-[#00e6d922] dark:hover:shadow-[0_0_15px_#00e6d9]
        transition-all duration-300"
        >
          <LanguagesIcon fontSize="small" />
          {i18n.language === "fa" ? "EN" : "FA"}
        </button>
      </div>

      {/* دکمه تغییر تم */}
      <div className="absolute top-5 left-25">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-1 rounded-xl 
        bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200 select-none
        dark:bg-transparent dark:border-[#00e6d9] dark:text-[#00e6d9] dark:hover:bg-[#00e6d922] dark:hover:shadow-[0_0_15px_#00e6d9]
        transition-all duration-300"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      {/* منو */}
      <div className="absolute top-6 right-6 sm:right-0 ">
        <button onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ fontSize: 30, color: "#00ffcc" }} />
        </button>
        <Drawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              background: "linear-gradient(135deg, #001a1a 0%, #002b2b 100%)",
              boxShadow: "0 0 20px #00ffccaa, 0 0 60px #00ffcc55",
              borderLeft: "2px solid #00ffcc88",
              color: "#00ffcc",
              backdropFilter: "blur(8px)",
              animation: "fadeInDrawer 0.6s ease",
            },
          }}
        >
          {list()}
        </Drawer>
      </div>

      {/* لوگو */}
      <div className="absolute top-6 left-6 w-12 h-12 z-50">
        <Image
          src="/img/logo.png"
          alt="logo"
          fill
          className="rounded-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 sm:flex-row ">
        <div className="text-center md:text-left sm:text-left">
          <h1
            className="text-4xl md:text-6xl font-bold sm:text-2xl 
        text-gray-900 mb-4
        dark:text-[#00ffcc] dark:drop-shadow-[0_0_15px_#00ffcc]"
          >
            {t("intro")}
          </h1>

          <p
            className="text-lg md:text-xl sm:text-sm 
        text-gray-600 max-w-lg leading-relaxed mb-6
        dark:text-gray-300"
          >
            {t("greeting")}
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/myresume.pdf"
              download
              className="lg:px-6 lg:py-3 lg:rounded-full lg:text-base 
          border border-gray-300 text-gray-700 hover:bg-gray-100 transition
          sm:text-xs sm:py-4 sm:rounded-2xl
          dark:border-[#00ffcc] dark:text-[#00ffcc] dark:hover:bg-[#00ffcc22] dark:hover:shadow-[0_0_10px_#00ffcc]"
            >
              {t("Cv")}
            </a>
            <Link
              href="#contact"
              className="lg:px-6 lg:py-3 lg:rounded-full lg:text-base 
          bg-emerald-500 text-white hover:bg-emerald-600 transition
          sm:text-xs sm:py-4 sm:rounded-2xl
          dark:bg-[#00ffcc] dark:text-black dark:hover:bg-[#00e6b8]"
            >
              {t("Contact")}
            </Link>
          </div>
        </div>

        <div
          className="bg-black
 rounded-3xl border border-gray-200 shadow-md p-4 max-w-sm mx-auto 
  dark:bg-white/10 dark:border-[#00e6d955] dark:shadow-[0_0_30px_#00e6d988] transition-all duration-300"
        >
          <Image
            src="/img/headerimg.png"
            alt="avatar"
            width={450}
            height={450}
            className="rounded-2xl object-cover 
    border border-gray-200 shadow-sm 
    dark:bg-black dark:border-[#00e6d9] dark:shadow-[0_0_20px_#00e6d955]"
            priority
          />
        </div>
      </div>
    </header>
  );
}
