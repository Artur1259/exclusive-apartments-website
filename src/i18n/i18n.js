import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const loadLanguage = async (lang) => {
  const response = await fetch(`/lang/${lang}.json`);
  return await response.json();
};
const enData = await loadLanguage('en');
const ruData = await loadLanguage('ru');
const amData = await loadLanguage('am');

const resources = {
  en: {
    translation: enData
  },
  ru: {
    translation: ruData
  },
  am: {
    translation: amData
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources, 
    lng: "en", 
    debug: true,
    fallbackLng: "ru", 
    interpolation: {
      escapeValue: false
    },
    ns: "translation", 
    defaultNS: "translation"
  });

export default i18n;