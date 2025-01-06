import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../public/locales/en/translation.json';
import esTranslations from '../public/locales/es/translation.json';
import enLegalTerms from '../public/locales/en/legalTerms.json';
import esLegalTerms from '../public/locales/es/legalTerms.json';
import enLicen from '../public/locales/en/licen.json';
import esLicen from '../public/locales/es/licen.json';
import enTermsAndConditions from '../public/locales/en/termsAndConditions.json';
import esTermsAndConditions from '../public/locales/es/termsAndConditions.json';
import enPrivacyPolicy from '../public/locales/en/privacyPolicy.json';
import esPrivacyPolicy from '../public/locales/es/privacyPolicy.json';
import enErrors from '../public/locales/en/errors.json'; // Nuevo JSON
import esErrors from '../public/locales/es/errors.json'; // Nuevo JSON

const resources = {
  en: {
    translation: enTranslations,
    legalTerms: enLegalTerms,
    licensing: enLicen,
    termsAndConditions: enTermsAndConditions,
    privacyPolicy: enPrivacyPolicy,
    errors: enErrors, // Agregado
  },
  es: {
    translation: esTranslations,
    legalTerms: esLegalTerms,
    licensing: esLicen,
    termsAndConditions: esTermsAndConditions,
    privacyPolicy: esPrivacyPolicy,
    errors: esErrors, // Agregado
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'querystring'],
      caches: ['cookie'],
    },
    ns: [
      'translation',
      'legalTerms',
      'licensing',
      'termsAndConditions',
      'privacyPolicy',
      'errors', // Nuevo namespace
    ],
    defaultNS: 'translation',
    debug: false,
  });

export default i18n;
