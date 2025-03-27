'use client';
import { Inter } from 'next/font/google';
import { useEffect, useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [isI18nReady, setIsI18nReady] = useState(false);
  



    useEffect(() => {
    updateFavicons();

      const initializeI18n = async () => {
        const detectedLanguage = i18n.languages.includes(navigator.language)
          ? navigator.language
          : navigator.language.startsWith('es')
          ? 'es'
          : 'en';
        await i18n.changeLanguage(detectedLanguage);
        setIsI18nReady(true);
      };
  
      initializeI18n();
    }, [i18n]);
  
    if (!isI18nReady){ 
      const timer = setTimeout(() => {
        window.location.reload();
      }, 1000); // Recarga después de 1 segundo
      
      clearTimeout(timer);
      
      return (


        <html>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Pink Ponk</title>
          <meta name="theme-color" content="#e9ffdb" />

          <meta name="description" content="Pink Ponk is a professional software development company specializing in IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning. We deliver scalable, secure, and innovative solutions for startups and enterprises."/>
    <link rel="canonical" href="https://pinkponk.lol/"/>
    <meta name="keywords" content="Software Development, IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning"></meta>
    <meta name="robots" content="index, follow"/>
    <meta property="og:title" content="Pink Ponk"/>
<meta property="og:description" content="Crafting custom software solutions for businesses worldwide. Expertise in IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning. Let's Create Together!"/>
<meta property="og:image" content="https://pinkponk.lol/images/card.png"/>
<meta property="og:url" content="https://pinkponk.lol"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Pink Ponk"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Pink Ponk"/>
<meta name="twitter:description" content="Crafting custom software solutions for businesses worldwide. Expertise in IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning. Let's Create Together!"/>
<meta name="twitter:image" content="https://pinkponk.lol/images/card.png"/>
<meta name="twitter:site" content="@pinkponklol"/>
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pink Ponk",
  "url": "https://pinkponk.lol",
  "logo": "https://pinkponk.lol/images/weblogo.svg",
  "description": "Crafting custom software solutions for businesses worldwide. Expertise in IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning. Let's Create Together!",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contacto@pinkponk.lol",
    "areaServed": "Worldwide"
  },
  "sameAs": [
    "https://www.facebook.com/pinkponkstdio",
    "https://www.instagram.com/pinkponk.lol",
    "https://x.com/pinkponklol"
  ]
            }),
          }}
        />



          <link id="favicon" rel="icon" href="/favicon-light.ico" />
          <link id="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-light.png" />
          <link id="favicon-32x32" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32-light.png" />
          <link id="favicon-16x16" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16-light.png" />
          <link id="android-192x192" rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192-light.png" />
          <link id="android-512x512" rel="icon" type="image/png" sizes="512x512-light.png" />
          <link id="webmanifest" rel="manifest" href="/site-light.webmanifest" />
        </head>
        <body className={inter.className}>
          <div></div>
        </body>
      </html>



      )}





  return (
   <html lang={i18n.language}>
  <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pink Ponk</title>
    <meta name="theme-color" content="#e9ffdb" />

    <meta name="description" content="Pink Ponk is a professional software development company specializing in IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning. We deliver scalable, secure, and innovative solutions for startups and enterprises."/>
    <link rel="canonical" href="https://pinkponk.lol/"/>
    <meta name="keywords" content="Software Development, IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning"></meta>
    <meta name="robots" content="index, follow"/>
    <meta property="og:title" content="Pink Ponk"/>
<meta property="og:description" content="Crafting custom software solutions for businesses worldwide. Expertise in IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning. Let's Create Together!"/>
<meta property="og:image" content="https://pinkponk.lol/images/card.png"/>
<meta property="og:url" content="https://pinkponk.lol"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Pink Ponk"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="Pink Ponk"/>
<meta name="twitter:description" content="Crafting custom software solutions for businesses worldwide. Expertise in IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning. Let's Create Together!"/>
<meta name="twitter:image" content="https://pinkponk.lol/images/card.png"/>
<meta name="twitter:site" content="@pinkponklol"/>
<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pink Ponk",
  "url": "https://pinkponk.lol",
  "logo": "https://pinkponk.lol/images/weblogo.svg",
  "description": "Crafting custom software solutions for businesses worldwide. Expertise in IT Consulting, Web Development, Mobile App Development, Cloud Solutions, Data Engineering, AI & Machine Learning. Let's Create Together!",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contacto@pinkponk.lol",
    "areaServed": "Worldwide"
  },
  "sameAs": [
    "https://www.facebook.com/pinkponkstdio",
    "https://www.instagram.com/pinkponk.lol",
    "https://x.com/pinkponklol"
  ]
            }),
          }}
        />



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
