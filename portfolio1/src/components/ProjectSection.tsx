import logo from "/public/logo.png";
import Link from "next/link";
import nodeIcon from "/public/images/tech-stack-logos/nodedotjs.svg";
import nextIcon from "/public/images/tech-stack-logos/nextdotjs.svg";
import expressIcon from "/public/images/tech-stack-logos/express.svg";
import tsIcon from "/public/images/tech-stack-logos/ts.svg";
import tailwindcssIcon from "/public/images/tech-stack-logos/tailwindcss.svg";
import htmlIcon from "/public/images/tech-stack-logos/html5.svg";
import cssIcon from "/public/images/tech-stack-logos/css.svg";
import jsIcon from "/public/images/tech-stack-logos/javascript.svg";
import Button from "@/components/Button";
import Flipcard from "@/components/FlipCard";

export default function ProjectSection() {
  const flipCardImageWidth = 200;
  const flipCardImageHeight = 50;

  return (
    <div className="min-h-min px-20 py-14 bg-creme">
      <h1 className="text-6xl text-center font-poppins font-bold pt-10 text-navy">
        PROJECTS
      </h1>
      <div className="text-navy text-center pb-10 italic text-sm">Click to Flip</div>
      <div className="flex flex-col items-center justify-center">
        <Link href="/software">
          <Button
            text="See 👀 More"
            className={"bg-gold p-3 pl-5 pr-5 rounded-full text-navy"}
          />
        </Link>
      </div>
      <div className="flex flex-row space-x-4 justify-evenly">
        <Flipcard
          title="Timestamp Microservice"
          imgSrc={logo}
          imgAlt="logo"
          imgWidth={flipCardImageWidth}
          imgHeight={flipCardImageHeight}
          projectType="Web App"
          techStackIconsImageSrc={nodeIcon}
          techStackIconsImageAlt="nodejs-logo"
          techStackIconsImageWidth={16}
          techStackIconsImageHeight={16}
          techStackIconsImageSrc2={expressIcon}
          techStackIconsImageAlt2="expressjs-logo"
          techStackIconsImageWidth2={16}
          techStackIconsImageHeight2={16}
          shortDescription="REST API that responds with time manipulated data using the Date object in JS."
          buttonProjectText="Project"
          buttonCodeText="Src Code"
          codeLink="https://github.com/1Dedios/timestamp-microservice"
        />
        <Flipcard
          title="Personal Site"
          imgSrc={logo}
          imgAlt="logo"
          imgWidth={flipCardImageWidth}
          imgHeight={flipCardImageHeight}
          projectType="Web Site"
          techStackIconsImageSrc={nextIcon}
          techStackIconsImageAlt="nextjs-logo"
          techStackIconsImageWidth={16}
          techStackIconsImageHeight={16}
          techStackIconsImageSrc2={tsIcon}
          techStackIconsImageAlt2="typescript-logo"
          techStackIconsImageWidth2={16}
          techStackIconsImageHeight2={16}
          techStackIconsImageSrc3={tailwindcssIcon}
          techStackIconsImageAlt3="tailwindcss-logo"
          techStackIconsImageWidth3={16}
          techStackIconsImageHeight3={16}
          shortDescription="My personal site, displaying past/current projects with a blog subdomain."
          buttonProjectText="Project"
          buttonCodeText="Src Code"
          codeLink="https://github.com/1Dedios/portfolio"
        />
        <Flipcard
          title="Tip Split Calculator"
          imgSrc={logo}
          imgAlt="logo"
          imgWidth={flipCardImageWidth}
          imgHeight={flipCardImageHeight}
          projectType="Web App"
          techStackIconsImageSrc={htmlIcon}
          techStackIconsImageAlt="html-logo"
          techStackIconsImageWidth={16}
          techStackIconsImageHeight={16}
          techStackIconsImageSrc2={cssIcon}
          techStackIconsImageAlt2="css-logo"
          techStackIconsImageWidth2={16}
          techStackIconsImageHeight2={16}
          techStackIconsImageSrc3={jsIcon}
          techStackIconsImageAlt3="js-logo"
          techStackIconsImageWidth3={16}
          techStackIconsImageHeight3={16}
          shortDescription="Perfect calculation of a bill with tip or no tip, split among people or not; it doesn't matter. Calculation in seconds."
          buttonProjectText="Project"
          buttonCodeText="Src Code"
          projectLink="https://1dedios.github.io/Tip-Calculator/"
          codeLink="https://github.com/1Dedios/Tip-Calculator"
        />
      </div>
    </div>
  );
}
