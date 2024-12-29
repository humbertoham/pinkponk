import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Variants for the animation
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      scaleY: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <nav className="nav">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex pt-2 items-center space-x-3 rtl:space-x-reverse">
          <img src="./images/weblogo.svg" className="logo" alt="pink ponk logo" />
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden md:block md:w-auto" id="navbar-default">
          <ul className="font-medium navB flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a href="/" className="block py-2 px-3 navA md:p-0" aria-current="page">
                {t('home')}
              </a>
            </li>
            <li>
              <a href="/services" className="block py-2 px-3 rounded md:border-0 navA md:p-0">
                {t('services')}
              </a>
            </li>
            <li>
              <a href="/portfolio" className="block py-2 px-3 rounded md:border-0 navA md:p-0">
                {t('portfolio')}
              </a>
            </li>
            <li>
              <a href="/about" className="block py-2 px-3 rounded md:border-0 navA md:p-0">
                {t('about')}
              </a>
            </li>
            <li>
              <a href="/contact" className="block py-2 px-3 rounded md:border-0 navA md:p-0">
                {t('contact')}
              </a>
            </li>
          </ul>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="w-full md:hidden origin-top"
              id="navbar-default"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <ul className="font-medium navB flex flex-col p-4 border rounded-lg">
                <li>
                  <a href="/" className="block py-2 px-3 navA">
                    {t('home')}
                  </a>
                </li>
                <li>
                  <a href="/services" className="block py-2 px-3 rounded navA">
                    {t('services')}
                  </a>
                </li>
                <li>
                  <a href="/portfolio" className="block py-2 px-3 rounded navA">
                    {t('portfolio')}
                  </a>
                </li>
                <li>
                  <a href="/about" className="block py-2 px-3 rounded navA">
                    {t('about')}
                  </a>
                </li>
                <li>
                  <a href="/contact" className="block py-2 px-3 rounded navA">
                    {t('contact')}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
