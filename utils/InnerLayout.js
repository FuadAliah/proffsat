"use client";
import { useLanguage } from "@/context/LanguageContext";

const InnerLayout = ({ children, inter }) => {
  const { language, direction } = useLanguage();

  return (
    <html lang={language} dir={direction}>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default InnerLayout;
