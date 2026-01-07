import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import AboutSection from '@/components/AboutSection';
import SuccessStories from '@/components/SuccessStories';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutSection />
      <SuccessStories />
      <CTASection />
    </>
  );
}
