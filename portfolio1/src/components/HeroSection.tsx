import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import { useTheme } from "@/components/Theme";

export default function HeroSection() {
  const { theme, assets } = useTheme();
  const careerTitle = useRef(null);

  useEffect(() => {
    const titleType = new Typed(careerTitle.current, {
      strings: [
        "Software Engineer",
        "Web Developer",
        "Web Master",
        "Security Engineer",
        "Front-End Engineer",
        "Full-Stack Developer",
        "Back-End Engineer",
        "Ethical Hacker",
        "Cloud Engineer",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: false,
    });
    return () => titleType.destroy();
  }, []);

  return (
    <div className={theme === "dev" ? "hacker" : "dev"}>
      <div className={`${assets.heroCSS} bg-[url('/dedios_logo.png')]`}>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Image
              src={assets.heroImage}
              alt="watermelon-logo"
              className={assets.heroImageCSS}
              width={400}
              height={400}
            />
            <span className="rounded-lg p-4 bg-creme shadow-md shadow-slate-200 font-sans text-navy text-center italic w-64 absolute top-1/3 xl:left-40 lg:mx-40 lg:my-20 md:inline md:-left-0 md:mx-10">
              {assets.heroBlurb}
            </span>
            <div className={assets.heroTitleCSS}>
              <AttentionSeeker effect="tada">Eddie P</AttentionSeeker>
            </div>
            <div className={assets.heroDynamicTitleCSS} ref={careerTitle}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
