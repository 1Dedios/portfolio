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
            <div className="z-0">
              <Image src={watermelon} alt="watermelon logo" />
            </div>
            <h1 className="text-8xl font-extrabold font-megalord absolute -my-20 mx-20 -z-10">
              Eddie P
            </h1>
            <h2 className="font-extrabold text-2xl font-subs italic mt-4">
              Software Engineer & Web Master
            </h2>
            <Button
              className={
                "bg-purple p-2 rounded-md border-2 border-rose-500 mt-2 font-sans"
              }
              text={buttonText}
            />
          </div>
          <span className="chat chat-end text-center w-64 h-40 inline-block absolute top-40 bottom-15 left-20 mx-40 my-40">
            <div className="chat-bubble chat-bubble-warning shadow-md shadow-slate-200 font-sans ">
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
