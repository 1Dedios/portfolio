import Button from "@/components/Button";
import Image from "next/image";
import watermelon from "/public/watermelon_me_bitmoji.png";

export default function HeroSection() {
  let buttonText = "...learn more";

  return (
    <div>
      <div
        className="hero min-h-screen bg-auto"
        style={{
          backgroundImage: "url(/dedios_logo.png)",
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <Image src={watermelon} alt="watermelon logo" />
            <h1 className="text-5xl font-bold">Eddie P</h1>
            <h2>Full Stack Engineer</h2>
            <p className="pt-5">
              Highly skilled, professional, polyglot Software Developer. I am
              passionate about solving problems through Technology and building
              cool things 😛 for the Human Race.
            </p>
            <Button className={"bg-primary"} text={buttonText} />
          </div>
        </div>
      </div>
    </div>
  );
}
