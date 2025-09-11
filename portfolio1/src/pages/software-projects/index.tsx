import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import ButtonAndImage from "@/components/ButtonAndImage";
import { InterfaceProjects } from "@/types/interface/mongoose-interfaces";
import Footer from "@/components/Footer";
import FlipCard from "@/components/FlipCard";

export default function SoftwarePage() {
  /* TODO: 'static' state = default proj view - 'dynamic' state = queried view*/
  const [currView, setCurrView] = useState(true);
  const [projects, setProjects] = useState<InterfaceProjects[]>([]);
  const projImgSize = 45;
  const techStackIconSize = 16;

  useEffect(() => {
    fetchDefaultProjects().then((proj) => {
      setProjects(proj.data);
    });
  }, []);

  const fetchDefaultProjects = async () => {
    try {
      const res = await fetch("/api/default-proj", { next: { revalidate: 3600 } });
      const defaultProjects = await res.json();
      return defaultProjects;
    } catch (e) {
      console.error(e);
    }
  };

  const handleProjQueries = async (projType: string) => {
    // TODO: make GET requests for projType = security, web, cli cloud- need to change this in DB
    // setCurrentView(false)
    // TODO: pass projType as param
    // const res = await fetch("/api/projects")
    // const projQuery = await res.json()
    // return {projQuery}
  };

  return (
    <>
      <Navbar />
      <div className="bg-creme">
        <p className="text-navy font-nosifer text-6xl text-center pt-4 pb-10">
          Software Projects
        </p>
        <div className="flex flex-row justify-center space-x-4 pb-10">
          {/* TODO: Button & ButtonAndImage components have onClick handlers - i.e - onClick={handleProjQueries(security)} */}
          <Button
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            text="Java"
          ></Button>
          <ButtonAndImage
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            text="Python"
            imgSrc="/images/tech-stack-logos/python.svg"
            imgAltText="next-logo"
          />
          <Button
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            text="AI/ML"
          ></Button>
          <ButtonAndImage
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            text="JS/TS"
            imgSrc="/images/tech-stack-logos/javascript.svg"
            imgAltText="next-logo"
          />
          <Button
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            text="C/C++/C#"
          ></Button>
          <ButtonAndImage
            className="text-navy flex flex-row space-x-2 p-4 border-creme border-2 rounded-md bg-gold hover:border-navy"
            text="Shell/Databases"
            imgSrc="/images/tech-stack-logos/gnubash.svg"
            imgAltText="next-logo"
          />
        </div>
        {/* TODO: view container - 1) make sure it looks correct 2) currentView === 'static' === defaultProj else === props*/}
        {currView &&
          projects?.map((proj) => {
            return (
              <div>
                <FlipCard
                  title={proj.title}
                  imgSrc={proj.proj_img}
                  imgAlt={proj.proj_img_alt}
                  imgWidth={projImgSize}
                  imgHeight={projImgSize}
                  projectType={proj.type}
                  techStackIconsImageSrc={proj["tech-stacks"][0]?.img}
                  techStackIconsImageAlt={proj["tech-stacks"][0]?.altText}
                  techStackIconsImageWidth={techStackIconSize}
                  techStackIconsImageHeight={techStackIconSize}
                  techStackIconsImageSrc2={proj["tech-stacks"][1]?.img}
                  techStackIconsImageAlt2={proj["tech-stacks"][1]?.altText}
                  techStackIconsImageWidth2={techStackIconSize}
                  techStackIconsImageHeight2={techStackIconSize}
                  techStackIconsImageSrc3={proj["tech-stacks"][2]?.img || ""}
                  techStackIconsImageAlt3={proj["tech-stacks"][2]?.altText || ""}
                  techStackIconsImageWidth3={
                    proj["tech-stacks"][2] ? techStackIconSize : 0
                  }
                  techStackIconsImageHeight3={
                    proj["tech-stacks"][2] ? techStackIconSize : 0
                  }
                  shortDescription={proj.description}
                  projectLink={proj["proj-link"] || ""}
                  codeLink={proj["src-link"] || ""}
                  buttonProjectText="Src"
                  buttonCodeText="Live Proj"
                />
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
}
