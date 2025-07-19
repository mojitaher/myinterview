"use client";
import "./globals.css";
import React from "react";
import { CssBaseline } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen px-10">
        <CssBaseline />
      </body>
      {children}
    </html>
  );
}
