import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <HeroSection />
        <ProjectSection />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
