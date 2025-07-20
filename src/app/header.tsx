import Image from "next/image";
import { useTranslation } from "react-i18next";
import "./118.n/i18n";
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
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Link from "next/link";
import { LanguagesIcon } from "lucide-react";

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
    { text: t("menuHome"), icon: <HomeIcon />, link: "#" },
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

  return (
    <header className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center px-6 md:px-20">
      <div className="absolute top-5 right-25 ">
        <button
          onClick={() => toggleLang()}
          className="flex items-center gap-4 px-3 py-1 rounded-xl text-[#00ffc3] border border-[#00ffc3] hover:bg-[#00ffc311] hover:shadow-[0_0_10px_#00ffc3] transition-all duration-300"
        >
          <LanguagesIcon fontSize="small" />
          {i18n.language === "fa" ? "EN" : "FA"}
        </button>
      </div>
      <div className="absolute top-6 right-6 ">
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

      <div className="absolute top-6 left-6 w-12 h-12 z-50">
        <Image src="/img/logo.png" alt="logo" fill className="rounded-full" />
      </div>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#00ffcc] drop-shadow-[0_0_15px_#00ffcc] mb-4">
            {t("intro")}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed mb-6">
            {t("greeting")}
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="/MojtabaTaherkhani_CV.pdf"
              download
              className="px-6 py-2 rounded-full border border-[#00ffcc] text-[#00ffcc] hover:bg-[#00ffcc22] hover:shadow-[0_0_10px_#00ffcc] transition"
            >
              {t("Cv")}
            </a>
            <Link
              href="#contact"
              className="px-6 py-2 rounded-full bg-[#00ffcc] text-black hover:bg-[#00e6b8] transition"
            >
              {t("Contact")}
            </Link>
          </div>
        </div>

        <div className="max-w-sm w-full">
          <Image
            src="/img/headerimg.png"
            alt="avatar"
            width={500}
            height={500}
            className="rounded-2xl shadow-[0_0_20px_#00ffcc55]"
            priority
          />
        </div>
      </div>
    </header>
  );
}
