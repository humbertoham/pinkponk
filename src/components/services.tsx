'use client';

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ className, style, onClick, direction }: any) => (
  <div
    className={`${className} ${direction === 'prev' ? 'left-0' : 'right-0'} z-10 flex justify-center items-center w-10 h-10 bg-blue-500 text-white rounded-full shadow-md cursor-pointer`}
    style={{ ...style }}
    onClick={onClick}
  >
    {direction === 'prev' ? '<' : '>'}
  </div>
);

const ServiceCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-blue-500 text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ServicesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-12 bg-gray-100 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <Slider {...settings}>
          <ServiceCard
            icon={<FaCode />}
            title="Web Development"
            description="Creating responsive and modern websites tailored to your needs."
          />
          <ServiceCard
            icon={<FaPaintBrush />}
            title="Graphic Design"
            description="Crafting visually appealing and user-friendly designs."
          />
          <ServiceCard
            icon={<FaMobileAlt />}
            title="Mobile Development"
            description="Building high-performance mobile applications for all platforms."
          />
        </Slider>
        {/* Texto flotante */}
        <motion.div
          className="absolute top-0 left-0 right-0 text-center text-sm text-gray-600"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          Desliza para ver más
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
