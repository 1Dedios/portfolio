import Card from "@/components/Card";
import logo from "/public/logo.png";

export default function ProjectSection() {
  let firstCardAltText = "random";
  let firstCardText = "checking in";
  let firstCardTitle = "title";
  let firstButtonText = "text";

  return (
    <div className="min-h-full h-80">
      <Card
        image={logo}
        alt={firstCardAltText}
        cardText={firstCardText}
        cardTitle={firstCardTitle}
        buttonText={firstButtonText}
      />
    </div>
  );
}
