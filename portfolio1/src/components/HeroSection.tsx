import Button from "@/components/Button";
import background from "/public/dedios_logo.png";

export default function HeroSection() {
  let buttonText = "...learn more";

  return (
    <div style={{background-image: url(/public/dedios_logo.png)}}>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Eddie P</h1>
            <p>Full Stack Engineer</p>
            <p>
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
