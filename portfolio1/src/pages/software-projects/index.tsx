import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Image from "next/image";

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
          <Button
            text="JavaScript"
            className="mt-2 p-1 bg-gold text-navy border-navy border-2 rounded-md"
          ></Button>
          <Button
            text="C/C++/C#"
            className="mt-2 p-1 bg-gold text-navy border-navy border-2 rounded-md"
          ></Button>
          <Button
            text="Java"
            className="mt-2 p-1 bg-gold text-navy border-navy border-2 rounded-md"
          ></Button>
          <Button
            text="Python"
            className="mt-2 p-1 bg-gold text-navy border-navy border-2 rounded-md"
          ></Button>
          {/**TODO: 2 options: 1-create component to make below reusable (ButtonAndImage - component) 2-keep buttons as is you'd only be adding an image to 2 buttons*/}
          <button className="text-navy flex flex-row space-x-2 p-4 border-2 rounded-md">
            Javascript
            <span className="flex flex-row pl-2">
              <Image
                src="/images/tech-stack-logos/javascript.svg"
                alt="src-alt"
                width={16}
                height={16}
              ></Image>
            </span>
          </button>

          <Button
            text="AI/ML"
            className="mt-2 p-1 bg-gold text-navy border-navy border-2 rounded-md"
          ></Button>
          <Button
            text="Shell/Databases"
            className="mt-2 p-1 bg-gold text-navy border-navy border-2 rounded-md"
          ></Button>
        </div>
        {/* TODO: div for project query results to appear */}
      </div>
      <Footer />
    </>
  );
}
