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
            <h3>Full Stack Engineer</h3>
            <p>
<<<<<<< HEAD
              Highly skilled, professional, polyglot Software Developer. I am
=======
              Highly skilled, professional polyglot Software Developer. I am
>>>>>>> 6ba8218bda07940fd7d13173f21ccd4805c408d3
              passionate about solving problems through Technology and building
              cool things 😛 for the Human Race.
            </p>
            <Button
              className={
                "bg-primary hover:bg-cyan-600 border-yellow-400 p-2 border-double"
              }
              text={buttonText}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
