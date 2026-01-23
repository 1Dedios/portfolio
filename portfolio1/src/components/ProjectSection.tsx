import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { useTheme } from "@/components/Theme";
import { filterProjBasedOnTheme, projObj } from "@/util/generalHelpers";
import FlipCard from "@/components/FlipCard";

export default function ProjectSection() {
  const { theme, assets } = useTheme();
  const filterProjects = filterProjBasedOnTheme(projObj, theme!);
  const flipCardImageWidth = 200;
  const flipCardImageHeight = 50;

  return (
    <>
      <div className={theme === "dev" ? "hacker" : "dev"}>
        <div className={assets.homeProjectSectionCSS}>
          <h1 className={assets.homeProjectSectionTitleCSS}>
            {assets.homeProjectSectionTitle}
          </h1>
          <p className={assets.homeProjectSectionSubtitleCSS}>
            {assets.homeProjectSectionSubtitle}
          </p>

          {/* TODO: decide which is better explicit click to flip or not */}
          {/* <div className={assets.homeProjectSectionClickFlipCSS}>
            <p>Click to Flip Card</p>
          </div> */}
          <div className="flex justify-center pt-5">
            <Image
              src={assets.homeProjectSectionArrow}
              alt="click-to-flip-card"
              className="animate-bounce"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-row space-x-4 justify-between">
            {filterProjects.map((proj) => {
              return (
                <FlipCard
                  title={proj.title}
                  imgSrc={proj.imgSrc}
                  imgAlt=""
                  imgWidth={flipCardImageWidth}
                  imgHeight={flipCardImageHeight}
                  projectType={proj.projectType}
                  techStackIconsImageSrc={proj.techStackIconsImageSrc}
                  techStackIconsImageAlt={proj.techStackIconsImageAlt}
                  techStackIconsImageWidth={16}
                  techStackIconsImageHeight={16}
                  techStackIconsImageSrc2={proj.techStackIconsImageSrc2}
                  techStackIconsImageAlt2={proj.techStackIconsImageAlt2}
                  techStackIconsImageWidth2={16}
                  techStackIconsImageHeight2={16}
                  techStackIconsImageSrc3={proj.techStackIconsImageSrc3}
                  techStackIconsImageAlt3={proj.techStackIconsImageAlt3}
                  techStackIconsImageWidth3={16}
                  techStackIconsImageHeight3={16}
                  shortDescription={proj.shortDescription}
                  projectLink={proj?.projectLink ? proj.projectLink : ""}
                  buttonProjectText={
                    proj?.buttonProjectText ? proj.buttonProjectText : ""
                  }
                  codeLink={proj?.codeLink ? proj.codeLink : ""}
                  buttonCodeText={proj.buttonCodeText}
                  blogLink={proj?.blogLink ? proj.blogLink : ""}
                  buttonBlogText={proj?.buttonBlogText ? proj.buttonBlogText : ""}
                />
              );
            })}
          </div>

          <div className="flex flex-col items-center justify-center pt-8">
            <Link href="/projects">
              <Button text="See 👀 More" className={assets.homeProjectSectionButtonCSS} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
