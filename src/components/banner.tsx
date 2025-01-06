'use client';
import { useTranslation } from 'react-i18next';
import { IoIosArrowForward } from "react-icons/io";
export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="flex ban flex-col md:flex-row items-center justify-between pl-6 md:pl-12 pb-12">
      {/* Texto */}
      <div className="flex-1">
        <h1 className="banh">{t('vision')}</h1>
        <h1 className="banh">{t('code')}</h1>
        
      </div>

      {/* Imagen */}
      <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
        <img src='./images/herosection.svg'  className="w-40 h-40 md:w-2/3 lg:w-1/2"/>
        <a href='/services' className='pl-4 learn block' >{t('learn')} <IoIosArrowForward className='inline'/> </a>

      </div>
    </div>
  );
}

