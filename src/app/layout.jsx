"use client";

import '../i18n/i18n.js';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/layout/NavBar";
import SearchBar from "../components/layout/SearchBar";
import { StrictMode } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <StrictMode>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        <NavBar />
        <SearchBar />
        {children}
      {/*  <BottomBar /> */}
      </body>
    </html>
    </StrictMode>
  );
}
