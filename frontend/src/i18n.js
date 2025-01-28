import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import enTranslations from '../public/en.json';
import svTranslations from '../public/sv.json';
import catTranslations from '../public/cat.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    sv: { translation: svTranslations },
    cat: { translation: catTranslations },
  },
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes values to prevent XSS
  },
});

export default i18n;
