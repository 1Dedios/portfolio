import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import watermelon from "/public/watermelon_me_bitmoji.png";

export default function HeroSection() {
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
        "Off-Sec Engineer",
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
    <div>
      <div
        className="hero min-h-screen bg-auto bg-purple"
        style={{
          backgroundImage: "url(/dedios_logo.png)",
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Image src={watermelon} alt="watermelon-logo" className="my-5" />
            <span className="rounded-lg p-4 bg-creme shadow-md shadow-slate-200 font-sans text-navy text-center w-64 absolute top-1/3 xl:left-40 lg:mx-40 lg:my-20 md:inline md:-left-0 md:mx-10">
              Highly skilled, professional, polyglot Software Developer. I am passionate
              about solving problems through Technology and building cool things 😛 for
              the Human Race.
            </span>
            <div className="font-nosifer text-9xl text-center font-extrabold absolute -mx-20 -my-20 -z-10 text-creme">
              <AttentionSeeker effect="tada">Eddie P</AttentionSeeker>
            </div>
            <div
              className={`font-poppins font-extrabold text-4xl italic mt-20 pt-5 text-creme`}
              ref={careerTitle}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
