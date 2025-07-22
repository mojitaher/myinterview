"use client";
import { createContext, ReactNode, useContext, useState } from "react";
type theme = "dark" | "light";
type themeContextType = {
  theme: theme;
  toggleTheme: () => void;
};

type themeProps = {
  children: ReactNode;
};

const themeContext = createContext<themeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: themeProps) => {
  const [theme, setTheme] = useState<theme>("dark");
  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    document.documentElement.classList.toggle("dark");
  }
  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
export const useTheme = () => {
  const context = useContext(themeContext);
  return context;
};
