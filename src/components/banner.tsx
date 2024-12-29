'use client'
import { useTranslation } from 'react-i18next';



export default function Banner() {
  const { t } = useTranslation();
    return (
      <>
      <div className="ban pl-12">
        <h1 className="banh pt-8 ">{t('vision')}</h1>
        <h1 className="banh">{t('code')}</h1>
      </div>
      
      
      </>
    )
  }
  