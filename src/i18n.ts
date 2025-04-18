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
import enErrors from '../public/locales/en/errors.json';
import esErrors from '../public/locales/es/errors.json';
import enContactForm from '../public/locales/en/contactForm.json'; // Nuevo JSON
import esContactForm from '../public/locales/es/contactForm.json'; // Nuevo JSON
import enPortfolio from '../public/locales/en/portfolio.json'; // Nuevo JSON
import esPortfolio from '../public/locales/es/portfolio.json'; // Nuevo JSON
import enFAQ from '../public/locales/en/faq.json'; // Nuevo JSON
import esFAQ from '../public/locales/es/faq.json'; // Nuevo JSON
import enAbout from '../public/locales/en/about.json'; // Nuevo JSON
import esAbout from '../public/locales/es/about.json'; // Nuevo JSON

const resources = {
  en: {
    translation: enTranslations,
    legalTerms: enLegalTerms,
    licensing: enLicen,
    termsAndConditions: enTermsAndConditions,
    privacyPolicy: enPrivacyPolicy,
    errors: enErrors,
    contactForm: enContactForm,
    portfolio: enPortfolio,
    faq: enFAQ,
    about: enAbout,
    // Agregado
  },
  es: {
    translation: esTranslations,
    legalTerms: esLegalTerms,
    licensing: esLicen,
    termsAndConditions: esTermsAndConditions,
    privacyPolicy: esPrivacyPolicy,
    errors: esErrors,
    contactForm: esContactForm, // Agregado
    portfolio: esPortfolio,
    faq: esFAQ,
    about: esAbout,

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
      'errors',
      'contactForm', // Nuevo namespace
    ],
    defaultNS: 'translation',
    debug: false,
  });

export default i18n;
