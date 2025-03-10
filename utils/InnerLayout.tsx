"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

const InnerLayout = ({
  children,
  inter,
}: {
  children: React.ReactNode;
  inter: { className: string };
}) => {
  const { language, direction } = useLanguage();

  return (
    <html lang={language} dir={direction}>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default InnerLayout;
