import Button from "@/components/Button";
import Image from "next/image";
import watermelon from "/public/watermelon_me_bitmoji.png";

export default function HeroSection() {
  let buttonText = "... learn more";

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
            <Image src={watermelon} alt="watermelon logo" />
            {/* <p className="pt-5">
              Highly skilled, professional, polyglot Software Developer. I am
              passionate about solving problems through Technology and building
              cool things 😛 for the Human Race.
            </p> */}
            <h1 className="text-8xl font-extrabold font-heading">Eddie P</h1>
            <h2 className="font-extrabold text-2xl font-body italic mt-4">
              Full-Stack Engineer
            </h2>
            <Button
              className={
                "bg-purple p-2 rounded-md border-2 border-rose-500 mt-2 font-body"
              }
              text={buttonText}
            />
          </div>
          <span className="chat chat-start text-center w-64 h-40 -mx-20">
            <div className="chat-bubble chat-bubble-warning shadow-md shadow-slate-200 font-body">
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
