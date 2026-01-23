import Head from "next/head";
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
import Image from "next/image";
import { queries } from "@/util/queries";
import ButtonAndImage from "@/components/ButtonAndImage";
import { Projects } from "@/types/interface/db-interfaces";
import { ProjectPageProps } from "@/types/types";
import FlipCard from "@/components/FlipCard";
import { useTheme } from "@/components/Theme";

// STATUS: ALL TODOS ON THIS PAGE SHOULD BE HANDLED IN SEPARATE DB-REFACTOR BRANCH

export default function ProjectPage({ defaultProjects }: ProjectPageProps) {
  // TODO: might need to add state to handle original container - i.e defaultView, setDefaultView = useState(true) - otherwise might show both containers
  const [isQueried, setIsQueried] = useState(false);
  const [queriedProjectsContainer, setQueriedProjectsContainer] = useState<Projects[]>(
    []
  );
  const [secThemeProjectsContainer, setSecThemeProjectsContainer] = useState<Projects[]>(
    []
  );
  const { theme, assets } = useTheme();
  const projImgSize = 45;
  const techStackIconSize = 16;

  useEffect(() => {
    if (theme === "hacker") {
      // TODO: import fetchSecurityProjects func
      const fetchSecurityProjects = async () => {
        try {
          const res = await fetch("/api/default-sec-proj");
          const data = await res.json();
          setIsQueried(false);
          setQueriedProjectsContainer([]);
          setSecThemeProjectsContainer(data.data);
        } catch (e) {
          console.error(e);
        }
      };
      fetchSecurityProjects();
    }
  }, [theme]);

  // TODO: think about caching strategy
  /* const fetchDefaultProjects = async (type: Theme = "dev") => {
    // TODO: arg type: Theme
    // in /api/default-proj; make query - type === dev OR security - if dev status: deployed; if security - type: security
    if (type === "hacker") {
      // 1. check localStorage for results - if found check last update time - if > 2 hrs re fetch (placing results back into localStorage and updating expiry time and set projects state to this return) - else set projects state this return -
      const secDefaultQuery = localStorage.getItem("secDefaultProjects");
      // const currTime = new Date()
      // TODO: add the following to conditional below - || secDefaultQuery?.expiry > 2 hours from currTime
      if (!secDefaultQuery) {
        // 2. if not in localStorage or data > 2 hrs - fetch new
        try {
          const defaultProjects = await fetch("/api/default-proj", {
            next: { revalidate: 3600 },
          });
          const res = await defaultProjects.json();
          // TODO: check res should return data in data prop - res.data
          console.log(res);

          // secProjects type LocalStorageProjects
          // const currTime = new Date()
          // const secProjects = {value: defaultProjects, expiry: currTime}
          // localStorage.setItem("secDefaultProjects", JSON.stringify(secProjects))
        } catch (e) {
          console.error(e);
          // TODO: handle errors
        }
      }

      // secDefaultQuery.value = setProjects((proj) => proj = proj.data) - something like this if you keep in same file as state - otherwise return the value
    }
    // if theme is dev - do same as hacker - default query being deployed projects
    const devDefaultQuery = localStorage.getItem("devDefaultProjects");
    if (!devDefaultQuery) {
    }

    try {
      const res = await fetch("/api/default-proj", { next: { revalidate: 3600 } });
      const defaultProjects = await res.json();
      return defaultProjects;
    } catch (e) {
      console.error(e);
    }
  }; */

  const defaultOnClick = () => {
    setIsQueried(true);
    setQueriedProjectsContainer(defaultProjects);
  };

  // TODO: move onClickByType func & finish implementation
  const onClickByType = async (projType: string): Promise<void> => {
    try {
      const url = new URL("/api/projects");
      const params = { projectType: `${projType}` };
      const search = new URLSearchParams(params).toString();
      console.log("ENDPOINT FOR PROJ BY TYPE", search);
      const getProjects = await fetch(search);
      const projects = await getProjects.json();
      if (projects) {
        setIsQueried(true);
        setQueriedProjectsContainer(projects);
      }
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  };

  const handleClick = async (e: React.MouseEvent, type: string) => {
    await onClickByType(type);
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
              {/* TODO: ButtonAndImage component has onClick handlers - i.e - onClick={projQueries(web)} */}
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

          {/* views */}
          <div>
            <div className="p-20 flex flex-wrap justify-evenly content-center">
              {/* default view */}
              {theme === "dev" &&
                defaultProjects?.map((proj) => {
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

              {/* queried view */}
              {isQueried &&
                queriedProjectsContainer?.map((proj: Projects) => {
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
