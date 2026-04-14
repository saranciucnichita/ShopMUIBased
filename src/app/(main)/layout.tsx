import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata } from "next";
import '../../i18n/i18n.js';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../../components/layout/NavBar.jsx";
import SearchBar from "../../components/layout/SearchBar.jsx";
import Footer from "../../components/layout/Footer";
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Consumer shop",
  description: "Developing with React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
      <html lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col">
          <AppRouterCacheProvider>
            <NavBar />
            <SearchBar />
            {children}
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </html>
  );
}
