import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
/*
 * IMPORTANT!:
 * Uncomment the below import in Production & Comment GetServerSidePropsContext import:
 * import { GetStaticPropsContext } from "next";
 *
 * ALSO:
 * - make changes at bottom of file
 */
import { GetServerSidePropsContext } from "next";
import { queries } from "@/util/queries";
import { onClickByType, removeWordFromString } from "@/util/generalHelpers";
import { Projects } from "@/types/interface/db-interfaces";
import { ProjectPageProps } from "@/types/types";
import ButtonAndImage from "@/components/ButtonAndImage";
import FlipCard from "@/components/FlipCard";
import { useTheme } from "@/components/Theme";

export default function ProjectPage({ defaultProjects }: ProjectPageProps) {
  const [isQueried, setIsQueried] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [queriedProjectsContainer, setQueriedProjectsContainer] = useState<Projects[]>(
    []
  );
  const [secThemeProjectsContainer, setSecThemeProjectsContainer] = useState<Projects[]>(
    []
  );
  const { theme, assets } = useTheme();
  const projImgSize = 45;
  const techStackIconSize = 16;

  if (!defaultProjects) {
    setError(true);
    setErrorMessage("Issue fetching projects...");
  }

  useEffect(() => {
    if (theme === "hacker") {
      const fetchSecurityProjects = async () => {
        try {
          const res = await fetch("/api/default-sec-proj");
          const secProj = await res.json();

          if (secProj.status) {
            if (error) {
              console.log("RESETTING ERROR ");
              setError(false);
              setErrorMessage("");
            }
            setIsQueried(false);
            setQueriedProjectsContainer([]);
            setSecThemeProjectsContainer(secProj.data);
          }
        } catch (e) {
          console.error("SEC PROJ USE EFFECT", e);
          let formatError = removeWordFromString(`${e}`, "Error:");
          setError(true);
          setErrorMessage(`${formatError}`);
        }
      };

      fetchSecurityProjects();
    }
  }, [theme]);

  const defaultOnClick = () => {
    if (error) {
      console.log("RESETTING ERROR ");
      setError(false);
      setErrorMessage("");
    }
    setIsQueried(true);
    setQueriedProjectsContainer(defaultProjects);
  };

  const handleClick = async (e: React.MouseEvent, type: string) => {
    try {
      console.log("ERROR STATE BEFORE CLEARING: ", error);
      if (error) {
        console.log("RESETTING ERROR ");
        setError(false);
        setErrorMessage("");
      }
      console.log("ERROR STATE BEFORE CLEARING: ", error);
      const projects = await onClickByType(type);

      setIsQueried(true);
      setQueriedProjectsContainer([]);
      setQueriedProjectsContainer(projects);
    } catch (e: any | unknown) {
      console.error(e);
      let formatError = removeWordFromString(`${e}`, "Error:");
      setError(true);
      setErrorMessage(`${formatError}`);
    }
  };

  return (
    <>
      <div className={theme === "dev" ? "hacker" : "dev"}>
        <Head>
          <title>Projects</title>
        </Head>
        <div className={assets.projectPageCSS}>
          <p className={assets.projectPageTitleCSS}>
            {theme === "dev" ? "Software Projects" : "Security Projects"}
          </p>
          {/* buttons */}
          {theme === "dev" ? (
            <div className="flex flex-row justify-center space-x-4">
              <ButtonAndImage
                className="text-navy space-x-2 flex flex-row p-8 py-2 h-10 border-creme border-2 rounded-md bg-gold hover:border-navy"
                text="Web"
                imgSrc="/web-icon.svg"
                imgAltText=""
                onClick={defaultOnClick}
              />
              <ButtonAndImage
                className="text-navy space-x-2 flex flex-row p-8 py-2 h-10 border-creme border-2 rounded-md bg-gold hover:border-navy"
                text="CLI"
                imgSrc="/terminal-icon.svg"
                imgAltText=""
                onClick={(e) => {
                  handleClick(e, "cli");
                }}
              />
              <ButtonAndImage
                className="text-navy space-x-2 flex flex-row p-8 py-2 h-10 border-creme border-2 rounded-md bg-gold hover:border-navy"
                text="Database"
                imgSrc="/db-icon.svg"
                imgAltText=""
                onClick={(e) => {
                  handleClick(e, "database");
                }}
              />
              <ButtonAndImage
                className="text-navy space-x-2 flex flex-row p-8 py-2 h-10 border-creme border-2 rounded-md bg-gold hover:border-navy"
                text="API"
                imgSrc="/api-icon.svg"
                imgAltText=""
                onClick={(e) => {
                  handleClick(e, "api");
                }}
              />
            </div>
          ) : (
            <div className="flex justify-center invert">
              <Image src="/cybersec-icon.svg" alt="" width={60} height={60} />
            </div>
          )}

          {/* error container */}
          {error ? (
            <div className={` ${error ? " text-red-800 text-center p-10" : "hidden"}`}>
              <p>{errorMessage}</p>
            </div>
          ) : (
            <></>
          )}

          {/* views */}
          <div className="p-20 flex flex-wrap justify-evenly content-center">
            {/* default view */}
            {theme === "dev" && isQueried
              ? queriedProjectsContainer?.map((proj: Projects) => {
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
                })
              : defaultProjects?.map((proj) => {
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

            {/* default sec view */}
            {theme === "hacker" &&
              secThemeProjectsContainer?.map((proj: Projects) => {
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
        </div>
      </div>
    </>
  );
}

/*
 * ***************** * IMPORTANT! * *****************
 * - in production: use getStaticProps func, and comment out getServerSideProps
 */

const getDefaultProjects = async () => {
  const defaultProjects = await queries.defaultProjQuery();
  return defaultProjects.map((proj) => ({ ...proj, _id: proj._id.toString() }));
};

// STATUS: serverSideProps for development
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const serializedProjects = await getDefaultProjects();
    console.log("DEFAULT PROJECT DB QUERY", serializedProjects);
    return {
      props: { defaultProjects: serializedProjects },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
};

// STATUS: getStaticProps for production
/* export const getStaticProps = async () => {
  try {
    const serializedProjects = await getDefaultProjects();
    console.log("DEFAULT PROJECT DB QUERY", serializedProjects);
    // 7200 - 2hrs
    return {
      props: { defaultProjects: serializedProjects, revalidate: 7200 },
    };
  } catch (e) {
    console.error(e);
    return {
      notFound: true,
    };
  }
}; */
