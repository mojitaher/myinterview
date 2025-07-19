import Image from "next/image";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const menuItems = [
    { text: "خانه", icon: <HomeIcon />, link: "#" },
    { text: "درباره", icon: <InfoIcon />, link: "#about" },
    { text: "نمونه کار", icon: <WorkIcon />, link: "#projects" },
    { text: "تماس", icon: <ContactMailIcon />, link: "#contact" },
  ];
  const list = () => (
    <Box
      sx={{
        width: 250,
        background: "linear-gradient(135deg, #00ff99 0%, #00ccff 100%)",
        boxShadow: "0 0 10px #00f5a0, 0 0 20px #00d9f5",
        p: 2,
      }}
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
                  m: 3,
                  gap: 2,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "00ccff",
                    color: "#fff",
                    textShadow: "0 0 5px #00ff99",
                    ransform: "scale(1.05)",
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
    <header className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/background.png"
        alt="Header Background"
        fill
        quality={100}
        style={{ objectFit: "cover" }}
        className="brightness-75 rounded-2xl"
      />

      <Button onClick={toggleDrawer(true)} sx={{ float: "right", m: 2 }}>
        <MenuIcon sx={{ color: "blue", fontSize: 30 }} />
      </Button>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0f1a2b",
            color: "#0f1a2b",
          },
        }}
      >
        {list()}
      </Drawer>
      <div className="relative w-15 h-15 mx-11 my-5">
        <Image src="/img/logo.png" alt="logo" fill className="rounded-full" />
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-[400px] h-[400px]">
          <Image
            src="/img/headerimg.png"
            alt="avatar"
            fill
            className="object-cover"
          />
          <h2
            className="absolute w-[600px] bottom-100 left-1/2 -translate-x-1/2  text-2xl font-extrabold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
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
            HI IM MOJTABA,A FRONT-END DEVELOPER
          </h2>
        </div>
      </div>
    </header>
  );
}
