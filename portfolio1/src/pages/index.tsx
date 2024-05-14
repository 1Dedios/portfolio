import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
// FONTS
import { Nosifer } from 'next/font/google';

export const nosifer = Nosifer({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-nosifer',
});

export default function Home() {
  return (
    <main className={`${nosifer.variable}`}>
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
