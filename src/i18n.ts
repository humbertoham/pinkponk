import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../public/locales/en/translation.json';
import esTranslations from '../public/locales/es/translation.json';

const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'querystring'],
      caches: ['cookie']
    },
    debug: false
  });

export default i18n;
