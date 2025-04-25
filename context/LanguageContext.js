"use client";
import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

const languageSettings = {
  en: { direction: "ltr", label: "English" },
  ar: { direction: "rtl", label: "عربي" },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, direction: languageSettings[language].direction }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
