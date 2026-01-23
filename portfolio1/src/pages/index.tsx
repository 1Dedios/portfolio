import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HeroSection />
      <ProjectSection />
      <Contact />
    </>
  );
}
