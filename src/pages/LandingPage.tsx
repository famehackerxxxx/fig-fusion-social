
import React from 'react';
import MainLayout from '../layout/MainLayout';
import HeroSection from '../components/Sections/HeroSection';
import MissionSection from '../components/Sections/MissionSection';
import AboutSection from '../components/Sections/AboutSection';
import CallToActionSection from '../components/Sections/CallToActionSection';
import FeaturesSection from '../components/Sections/FeaturesSection';
import ContactSection from '../components/Sections/ContactSection';

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <MissionSection />
      <AboutSection />
      <CallToActionSection />
      <FeaturesSection />
      <ContactSection />
    </MainLayout>
  );
};

export default LandingPage;
