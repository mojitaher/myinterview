import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import fa from "./fa/translation.json";
import en from "./en/translationen.json";

const resources = {
  en: { translation: en },
  fa: { translation: fa },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "fa",
});
i18n.on("languageChanged", (lng) => {
  const dir = lng === "fa" ? "rtl" : "ltr";
  document.documentElement.setAttribute("dir", dir);
});

export default i18n;
