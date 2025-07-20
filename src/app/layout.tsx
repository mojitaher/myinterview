"use client";
import "./globals.css";
import React from "react";
import { CssBaseline } from "@mui/material";
import Footer from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="!bg-[#000000]  min-h-screen ">
        <div className="px-10">
          <CssBaseline />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
