'use client';
import { useTranslation } from 'react-i18next';
import { IoIosArrowForward } from "react-icons/io";
export default function Banner() {
  const { t } = useTranslation();
  return (
    <div className="flex ban flex-col md:flex-row items-left justify-between pl-6 md:pl-12 pb-12">
      {/* Texto */}
      <div className="flex-1">
        <h1 className="banh">Our</h1>
        <h1 className="banh">History.</h1>
        
      </div>

      {/* Imagen */}
      <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
       
      </div>
    </div>
  );
}

