import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import english from "./en.json";
import russian from "./ru.json";
import uzbek from "./uz.json";
import karakalpak from "./kaa.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: english
      },
      ru: {
        translation: russian
      },
      uz: {
        translation: uzbek
      },
      kaa: {
        translation: karakalpak
      }
    },
    lng: window.localStorage.getItem("siteLang") || "en",
    interpolation: {
      escapeValue: false,
    }
  })

export default i18n;