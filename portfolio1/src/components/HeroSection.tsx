import Button from "@/components/Button";

export default function HeroSection() {
  let buttonText = "...learn more";
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Eddie P</h1>
            <p>Full Stack Engineer</p>
            <p>
              Highly skilled and professional JavaScript/Java Software
              Engineer/Web Developer. I am passionate about solving problems
              through Technology and building cool things 😛 for the Human Race.
            </p>
            <Button className={"bg-primary"} text={buttonText} />
          </div>
        </div>
      </div>
    </div>
  );
}
