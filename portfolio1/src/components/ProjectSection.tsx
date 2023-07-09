import Card from "@/components/Card";
import logo from "/public/logo.png";

export default function ProjectSection() {
  let firstCardAltText = "random";
  let firstCardText = "checking in";
  let firstCardTitle = "title";
  let firstButtonText = "text";

  return (
    <div className="min-h-full h-fit px-4 py-8">
      <h1 className="text-6xl text-center font-subs font-extrabold italic pb-10">
        Projects
      </h1>
      <div className="flex flex-row space-x-4">
        <Card
          image={logo}
          alt={firstCardAltText}
          cardText={firstCardText}
          cardTitle={firstCardTitle}
          buttonText={firstButtonText}
        />
        <Card
          image={logo}
          alt={firstCardAltText}
          cardText={firstCardText}
          cardTitle={firstCardTitle}
          buttonText={firstButtonText}
        />
        <Card
          image={logo}
          alt={firstCardAltText}
          cardText={firstCardText}
          cardTitle={firstCardTitle}
          buttonText={firstButtonText}
        />
      </div>
    </div>
  );
}
