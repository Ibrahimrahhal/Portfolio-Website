import {
  initI18n,
  i18n,
  browserLanguageDetector,
  i18nBackendFetch,
} from "@core";

i18n.on("languageChanged", function (lng: string) {
  localStorage.setItem("lng", lng);
});

(i18n as any)
  .use(i18nBackendFetch)
  .use(browserLanguageDetector)
  .use(initI18n)
  .init({
    debug: process.env.NODE_ENV !== "production",
    fallbackLng: "en",
    whitelist: ["en", "ar"],
    interpolation: {
      escapeValue: false,
    },
    ns: ["translation"],
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
      addPath: `${process.env.PUBLIC_URL}/locales/add/{{lng}}/{{ns}}`,
    },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "lng",
      checkWhitelist: true,
    },
    saveMissing: true,
    saveMissingTo: "all",
  });

export default i18n;
