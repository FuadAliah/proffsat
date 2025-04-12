"use client";
import { createContext, useState, useContext, useEffect } from "react";

const LanguageContext = createContext();

const languageSettings = {
  en: { direction: "ltr", label: "English" },
  ar: { direction: "rtl", label: "عربي" },
};

// eslint-disable-next-line react/prop-types
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

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
