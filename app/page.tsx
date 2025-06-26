import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { CreatorShowcase } from '@/components/creator-showcase';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CreatorShowcase />
      <CTASection />
      <Footer />
    </main>
  );
}