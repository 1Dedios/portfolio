import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <HeroSection />
        <ProjectSection />
        <Benefits />
        <Footer />
      </div>
    </main>
  );
}
