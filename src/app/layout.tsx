'use client';
import { Inter } from 'next/font/google';
import { useEffect} from 'react';


import { useTranslation } from 'react-i18next';
import '../i18n'; // Importa la configuración de i18next
import './globals.css';
import Nav from '@/components/nav';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

const updateFavicons = () => {
  const icons = {
    dark: {
      favicon: '/favicon-dark.ico',
      appleTouchIcon: '/apple-touch-icon-dark.png',
      favicon32: '/favicon-32x32-dark.png',
      favicon16: '/favicon-16x16-dark.png',
      android192: '/android-chrome-192x192-dark.png',
      android512: '/android-chrome-512x512-dark.png',
      webManifest: '/site-dark.webmanifest',
    },
    light: {
      favicon: '/favicon-light.ico',
      appleTouchIcon: '/apple-touch-icon-light.png',
      favicon32: '/favicon-32x32-light.png',
      favicon16: '/favicon-16x16-light.png',
      android192: '/android-chrome-192x192-light.png',
      android512: '/android-chrome-512x512-light.png',
      webManifest: '/site-light.webmanifest',
    },
  };

  const updateIcons = () => {
    const scheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    Object.entries(icons[scheme]).forEach(([id, href]) => {
      const element = document.getElementById(id) as HTMLLinkElement;
      if (element) element.href = href;
    });
  };

  updateIcons();
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeMediaQuery.addEventListener('change', updateIcons);

  return () => darkModeMediaQuery.removeEventListener('change', updateIcons);
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { i18n } = useTranslation();
  useEffect(() => {
    updateFavicons();
  
    // Detectar y establecer idioma
    const detectedLanguage = i18n.languages.includes(navigator.language) 
      ? navigator.language 
      : navigator.language.startsWith('es') 
        ? 'es' 
        : 'en';
  
    i18n.changeLanguage(detectedLanguage);
  }, [i18n]);
  
  return (
    <html lang={i18n.language}>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Pink Ponk</title>
      <meta name="theme-color" content="#e9ffdb" />
      <link id="favicon" rel="icon" href="/favicon-light.ico" />
      <link id="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-light.png" />
      <link id="favicon-32x32" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-light.png" />
      <link id="favicon-16x16" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16-light.png" />
      <link id="android-192x192" rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192-light.png" />
      <link id="android-512x512" rel="icon" type="image/png" sizes="512x512-light.png" />
      <link id="webmanifest" rel="manifest" href="/site-light.webmanifest" />
    </head>
    <body className={inter.className}>
      <Nav />
      {children}
      <Footer />
    </body>
  </html>
  
  );
}
