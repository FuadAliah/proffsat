"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const InnerLayout = ({
  children,
  inter,
  almarai,
}: {
  children: React.ReactNode;
  inter: { variable: string };
  almarai: { variable: string };
}) => {
  const { language, direction } = useLanguage();

  return (
    <html lang={language} dir={direction || "ar"}>
      <body className={`${inter.variable} ${almarai.variable}`}>{children}</body>
    </html>
  );
};

export default InnerLayout;
