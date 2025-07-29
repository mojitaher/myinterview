"use client";
import Link from "next/link";
import { useTheme } from "./context/theme";
import { MoonIcon, SunIcon } from "lucide-react";

export default function NotFound() {
  const { theme, toggleTheme } = useTheme()!;
  return (
    <>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-1 my-5 rounded-xl dark:bg-transparent bg-gray-200 border border-[#00e6d9] text-[#00e6d9] hover:bg-[#00e6d922] hover:shadow-[0_0_15px_#00e6d9] transition-all duration-300 select-none"
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      <main className="min-h-screen flex flex-col items-center justify-center bg-[#e8f0f7]  dark:bg-black text-neon-green px-6">
        <div className="text-center">
          <h1 className="text-6xl font-extrabold tracking-widest neon-glow">
            404
          </h1>
          <p className="text-2xl font-black mt-4 neon-glow">page not found</p>
          <Link
            href="/"
            className="mt-8 text-xl font-black inline-block border border-neon-green px-6 py-3 rounded-xl text-neon-green hover:bg-neon-green hover:text-black transition duration-300"
          >
            Home{" "}
          </Link>
        </div>
      </main>
    </>
  );
}
