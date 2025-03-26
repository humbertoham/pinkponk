'use client'
import CTAComponent from "@/components/cta";
import FAQSection from "@/components/faq";
import ServicesCarousel from "@/components/services";
export default function Home() {
  return (<>
    <ServicesCarousel/>
    <CTAComponent/>
    <FAQSection/>
    </>
  );
}
