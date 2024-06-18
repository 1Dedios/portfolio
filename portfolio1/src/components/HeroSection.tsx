import Image from 'next/image';
import { AttentionSeeker } from 'react-awesome-reveal';
import watermelon from '/public/watermelon_me_bitmoji.png';

// TODO: import text shuffle component to the sub-header under your name

export default function HeroSection() {
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
              className={`font-nosifer text-9xl font-extrabold absolute -my-20 -mx-20 -z-10 text-creme`}
            >
              <AttentionSeeker effect="tada">Eddie P</AttentionSeeker>
            </h1>
            <h2
              className={`font-poppins font-extrabold text-2xl italic mt-20 pt-5 text-creme`}
            >
              Software Engineer & Web Master
            </h2>
          </div>
          <span className="chat chat-end text-center w-64 h-40 inline-block absolute top-40 bottom-15 left-20 mx-80 my-40">
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
