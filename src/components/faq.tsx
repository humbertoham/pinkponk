'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex items-center justify-between w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
        <div className="text-blue-500 text-xl">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 mt-2">{answer}</p>
      </motion.div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee on all our products. If you're not satisfied, contact us within 30 days for a full refund.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 5-7 business days, depending on your location. International shipping may take longer.",
    },
    {
      question: "Can I change my order after placing it?",
      answer:
        "Yes, you can modify your order within 24 hours of placing it. Contact our support team for assistance.",
    },
    {
      question: "Do you offer technical support?",
      answer:
        "Absolutely! We provide 24/7 technical support for all our customers. Reach out to us anytime for help.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
