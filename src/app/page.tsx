import HeroSection from '@/components/HeroSection';
import TrustedBy from '@/components/TrustedBy';
import ServicesOverview from '@/components/ServicesOverview';
import AboutSection from '@/components/AboutSection';
import SuccessStories from '@/components/SuccessStories';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ServicesOverview />
      <AboutSection />
      <SuccessStories />
      <Testimonials />
      <CTASection />
    </>
  );
}
