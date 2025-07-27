"use client";
import "./globals.css";
import React from "react";
import Footer from "./footer";
import { ThemeProvider } from "./context/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <ThemeProvider>
        <body className="bg-[#e8f0f7]  dark:bg-black  min-h-screen  ">
          <div className="px-10">{children}</div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
