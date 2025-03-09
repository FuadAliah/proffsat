import en from "../translations/en.json";
import ar from "../translations/ar.json";

const translations = {
  en,
  ar,
};

export const getTranslation = (key, language) => {
  return translations[language][key] || key;
};
