import { useTranslation as useI18nextTranslation } from "react-i18next";
import { useEffect } from "react";

export function useTranslation(lang) {
  const { t, i18n } = useI18nextTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return { t };
}