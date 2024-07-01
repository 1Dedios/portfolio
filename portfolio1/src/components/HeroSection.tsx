import Image from 'next/image';
import Typed from 'typed.js'
import { useEffect, useRef } from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';
import watermelon from '/public/watermelon_me_bitmoji.png';


export default function HeroSection() {

  const careerTitle = useRef(null);

  useEffect(() => {
    const titleType = new Typed(careerTitle.current, {
      strings: [
        'Software Engineer',
        'Web Developer',
        'Web Master',
        'Security Engineer',
        'Front-End Engineer',
        'Full-Stack Developer',
        'Back-End Engineer',
        'Cybersecurity Engineer',
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: false,
    });
    return () => titleType.destroy()});

  return (
    <div>
      <div
        className="hero min-h-screen bg-auto bg-purple"
        style={{
          backgroundImage: 'url(/dedios_logo.png)',
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="z-0 my-5">
              <Image src={watermelon} alt="watermelon logo" />
            </div>
            <h1
              className={`font-nosifer text-9xl text-center font-extrabold absolute -mx-20 -my-20 -z-10 text-creme`}
            >
              <AttentionSeeker effect="tada">Eddie P</AttentionSeeker>
            </h1>
            <h2
              className={`font-poppins font-extrabold text-4xl italic mt-20 pt-5 text-creme`} ref={careerTitle}
            >
            </h2>
          </div>
          <span className="chat text-center w-64 h-40 inline-block absolute top-40 bottom-15 left-20 mx-80 my-40 hidden md:-left-0 md:mx-10 lg:mx-60 lg:my-20 lg:block md:block">
            <div className="chat-bubble bg-creme shadow-md shadow-slate-200 font-sans text-navy">
              Highly skilled, professional, polyglot Software Developer. I am
              passionate about solving problems through Technology and building
              cool things 😛 for the Human Race.
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
