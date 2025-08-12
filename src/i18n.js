"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Ajusta las rutas/nombres según tus archivos reales
import en from "./locales/en/translation.json";
import es from "./locales/es/translation.json";
import fr from "./locales/fr/translation.json";

function getSavedLang() {
  if (typeof window !== "undefined") {
    const fromStorage = window.localStorage?.getItem("language");
    if (fromStorage) return fromStorage;
    const nav = window.navigator?.language?.slice(0, 2);
    if (nav) return nav;
  }
  return "es";
}

const initialLang = ["en", "es", "fr"].includes(getSavedLang()) ? getSavedLang() : "es";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        es: { translation: es },
        fr: { translation: fr },
      },
      lng: initialLang,
      fallbackLng: "es",
      interpolation: { escapeValue: false },
    });
}

export default i18n;

