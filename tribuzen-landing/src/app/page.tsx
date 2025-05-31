import FamilyWall from '@/components/FamilyWall';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionBenefits from '@/components/SectionBenefits';
import SectionCTA from '@/components/SectionCTA';
import SectionManifesto from '@/components/SectionManifesto';
import SectionStory from '@/components/SectionStory';
import SectionTimeline from '@/components/SectionTimeline';
import SectionVision from '@/components/SectionVision';

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionStory />
      <SectionVision />
      <SectionBenefits />
      <SectionCTA />
      <FamilyWall />
      <SectionManifesto />
      <SectionTimeline />
      <Footer />
    </main>
  );
}