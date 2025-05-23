import React from "react";
import type { Metadata } from "next";
import { Inter, Almarai } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import InnerLayout from "@/utils/InnerLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proffsat",
  description: "Proffsat for Satellite",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-almarai",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LanguageProvider>
      <InnerLayout inter={inter} almarai={almarai}>
        {children}
      </InnerLayout>
    </LanguageProvider>
  );
};

export default RootLayout;
