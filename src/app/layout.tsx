'use client';
import { Inter } from 'next/font/google';
import { useEffect} from 'react';


import { useTranslation } from 'react-i18next';
import '../i18n'; // Importa la configuración de i18next
import './globals.css';
import Nav from '@/components/nav';

const inter = Inter({ subsets: ['latin'] });

const updateFavicons = () => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const favicon = document.getElementById('favicon') as HTMLLinkElement;
  const appleTouchIcon = document.getElementById('apple-touch-icon') as HTMLLinkElement;
  const favicon32 = document.getElementById('favicon-32x32') as HTMLLinkElement;
  const favicon16 = document.getElementById('favicon-16x16') as HTMLLinkElement;
  const android192 = document.getElementById('android-192x192') as HTMLLinkElement;
  const android512 = document.getElementById('android-512x512') as HTMLLinkElement;
  const webManifest = document.getElementById('webmanifest') as HTMLLinkElement;

  const updateIcons = () => {
    if (
      darkModeMediaQuery.matches &&
      favicon &&
      appleTouchIcon &&
      favicon32 &&
      favicon16 &&
      android192 &&
      android512 &&
      webManifest
    ) {
      favicon.href = '/favicon-dark.ico';
      appleTouchIcon.href = '/apple-touch-icon-dark.png';
      favicon32.href = '/favicon-32x32-dark.png';
      favicon16.href = '/favicon-16x16-dark.png';
      android192.href = '/android-chrome-192x192-dark.png';
      android512.href = '/android-chrome-512x512-dark.png';
      webManifest.href = '/site-dark.webmanifest';
    } else if (favicon && appleTouchIcon && favicon32 && favicon16 && android192 && android512 && webManifest) {
      favicon.href = '/favicon-light.ico';
      appleTouchIcon.href = '/apple-touch-icon-light.png';
      favicon32.href = '/favicon-32x32-light.png';
      favicon16.href = '/favicon-16x16-light.png';
      android192.href = '/android-chrome-192x192-light.png';
      android512.href = '/android-chrome-512x512-light.png';
      webManifest.href = '/site-light.webmanifest';
    }
  };

  updateIcons();
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
  
    // Detecta y establece automáticamente el idioma basado en el navegador
    const browserLanguage = navigator.language; // Usamos solo 'language' aquí
    const detectedLanguage = browserLanguage.startsWith('es') ? 'es' : 'en';
    i18n.changeLanguage(detectedLanguage);
  }, [i18n]);
  
  return (
    <html lang={i18n.language}>
      <head>
        <title>Pink Ponk</title>
        <link id="favicon" rel="icon" href="/favicon-light.ico" />
        <link id="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-light.png" />
        <link id="favicon-32x32" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-light.png" />
        <link id="favicon-16x16" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16-light.png" />
        <link id="android-192x192" rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192-light.png" />
        <link id="android-512x512" rel="icon" type="image/png" sizes="512x512-light.png" />
        <link id="webmanifest" rel="manifest" href="/site-light.webmanifest" />
      </head>
      <body className={inter.className}>
          <Nav/>
        
        {children}</body>
    </html>
  );
}
