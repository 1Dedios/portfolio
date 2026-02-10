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
        <div className="hero-content text-center mt-40">
          <div>
            <Image
              src={assets.heroImage}
              alt="watermelon-logo"
              className={assets.heroImageCSS}
              width={400}
              height={400}
            />
            <span className={assets.heroBlurbCSS}>{assets.heroBlurb}</span>
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
