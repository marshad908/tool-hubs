// pages/index.js
"use client"
import HeroArea from './heroArea';
import FeaturesSection from './featureSection';
import ContactUsSection from './contactUs';
import AboutUsSection from './aboutUs';

const Homes = () => {
  return (
    <div className="bg-gray-100 min-h-screen  ">
      <HeroArea />
      <FeaturesSection />
      <AboutUsSection />
     <ContactUsSection />
    </div>
  );
};

export default Homes;
