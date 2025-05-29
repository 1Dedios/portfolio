import Navbar from "@/components/Navbar";
import ButtonAndImage from "@/components/ButtonAndImage";
import Footer from "@/components/Footer";

/**
 *
 * TODO: DB integration
 *
 * 1. use SWR to fetch from API for each tech stack
 * 2. getStaticProps originally to show default projects - decide what these will be
 *
 * /api/
 
 */

export default function SoftwarePage() {
  // TODO: onClick handlers for each button to query for projects by lang
  return (
    <>
      <Navbar />
      <div className="bg-creme">
        <p className="text-navy font-nosifer text-6xl text-center pt-4 pb-10">
          Software Projects
        </p>
        <div className="flex flex-row justify-center space-x-4 pb-10">
          <ButtonAndImage
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            buttonTitle="C/C++/C#"
            imgSrc="/images/tech-stack-logos/next.svg"
            imgAltText="next-logo"
          />
          <ButtonAndImage
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            buttonTitle="Java"
            imgSrc="/images/tech-stack-logos/next.svg"
            imgAltText="next-logo"
          />
          <ButtonAndImage
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            buttonTitle="Python"
            imgSrc="/images/tech-stack-logos/next.svg"
            imgAltText="next-logo"
          />
          <ButtonAndImage
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            buttonTitle="JS/TS"
            imgSrc="/images/tech-stack-logos/next.svg"
            imgAltText="next-logo"
          />
          <ButtonAndImage
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            buttonTitle="AI/ML"
            imgSrc="/images/tech-stack-logos/next.svg"
            imgAltText="next-logo"
          />
          <ButtonAndImage
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            buttonTitle="Shell/Databases"
            imgSrc="/images/tech-stack-logos/next.svg"
            imgAltText="next-logo"
          />
        </div>
        {/* TODO: div for project query results to appear */}
      </div>
      <Footer />
    </>
  );
}
