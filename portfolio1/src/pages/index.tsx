import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";
import Benefits from "@/components/Benefits";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
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
