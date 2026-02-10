import { Theme } from "@/types/types";
import { Projects } from "@/types/interface/db-interfaces";

export const removeWordFromString = (stringToFormat: string, wordToRemove: string) => {
  return `${stringToFormat}`
    .split(" ")
    .filter((word: string) => {
      return word !== `${wordToRemove}`;
    })
    .join(" ");
};

export const onClickByType = async (projType: string): Promise<Projects[]> => {
  // TODO: sanitize arg
  const getProjects = await fetch(`/api/projects?projType=${projType}`);
  const projects = await getProjects.json();
  console.log("PROJ TYPE REQUEST: ", projects);
  if (projects.status) {
    return projects.data;
  }

  throw new Error(projects.error);
};

/**
 * Home Page - ProjectSection Component - helpers
 */
const themeTypeMap = {
  dev: "web",
  hacker: "security",
};

export const filterProjBasedOnTheme = <T extends { type: string }>(
  projectObj: T[],
  themeType: Theme
): T[] => {
  return projectObj.filter((proj) => proj.type === themeTypeMap[themeType]);
};

// STATUS: SOLIDIFY which projects you want to showcase on home project section
export const homePageProjShowcase = [
  /* STATUS: First 3 = "web" projects, Next 3 = "security" projects */
  {
    type: "web",
    title: "Timestamp Microservice",
    imgSrc: "/logo.png",
    imgAlt: "",
    imgWidth: 16,
    imgHeight: 16,
    projectType: "API",
    techStackIconsImageSrc: "/tech-stack-logos/html5.svg",
    techStackIconsImageAlt: "",
    techStackIconsImageWidth: 16,
    techStackIconsImageHeight: 16,
    techStackIconsImageSrc2: "/tech-stack-logos/express.svg",
    techStackIconsImageAlt2: "",
    techStackIconsImageWidth2: 16,
    techStackIconsImageHeight2: 16,
    shortDescription:
      "Microservice that responds with different formats for time and date such as returning the current UNIX time.",
    buttonCodeText: "Src Code",
    codeLink: "https://github.com/1Dedios/timestamp-microservice",
  },
  {
    type: "web",
    title: "My Site (this site)",
    imgSrc: "https://personal-site.b-cdn.net/my-site.png",
    imgAlt: "",
    imgWidth: 16,
    imgHeight: 16,
    projectType: "Web Site",
    techStackIconsImageSrc: "/tech-stack-logos/nextdotjs.svg",
    techStackIconsImageAlt: "",
    techStackIconsImageWidth: 16,
    techStackIconsImageHeight: 16,
    techStackIconsImageSrc2: "/tech-stack-logos/ts.svg",
    techStackIconsImageAlt2: "",
    techStackIconsImageWidth2: 16,
    techStackIconsImageHeight2: 16,
    techStackIconsImageSrc3: "/tech-stack-logos/mongodb.svg",
    techStackIconsImageAlt3: "",
    techStackIconsImageWidth3: 16,
    techStackIconsImageHeight3: 16,
    shortDescription: "My tech site/blog, displaying past/current projects.",
    buttonProjectText: "Project",
    projectLink: "/",
    buttonCodeText: "Src Code",
    codeLink: "https://github.com/1Dedios/timestamp-microservice",
    blogLink: "/",
    buttonBlogText: "Blog",
  },
  {
    type: "web",
    title: "Auth Service-Worker",
    imgSrc: "https://personal-site.b-cdn.net/placeholder-img.png",
    imgAlt: "",
    imgWidth: 16,
    imgHeight: 16,
    projectType: "Web App",
    techStackIconsImageSrc: "https://cdn.simpleicons.org/react/000000",
    techStackIconsImageAlt: "",
    techStackIconsImageWidth: 16,
    techStackIconsImageHeight: 16,
    techStackIconsImageSrc2: "https://cdn.simpleicons.org/vite/000000",
    techStackIconsImageAlt2: "",
    techStackIconsImageWidth2: 16,
    techStackIconsImageHeight2: 16,
    shortDescription:
      "REST API that responds with time manipulated data using the Date object in JS.",
    buttonCodeText: "Src Code",
    codeLink: "https://github.com/1Dedios/timestamp-microservice",
  },
  {
    type: "security",
    title: "SECURITY",
    imgSrc: "/logo.png",
    imgAlt: "",
    imgWidth: 16,
    imgHeight: 16,
    projectType: "Web App",
    techStackIconsImageSrc: "/tech-stack-logos/nodedotjs.svg",
    techStackIconsImageAlt: "",
    techStackIconsImageWidth: 16,
    techStackIconsImageHeight: 16,
    techStackIconsImageSrc2: "/tech-stack-logos/express.svg",
    techStackIconsImageAlt2: "",
    techStackIconsImageWidth2: 16,
    techStackIconsImageHeight2: 16,
    shortDescription:
      "REST API that responds with time manipulated data using the Date object in JS.",
    buttonCodeText: "Src Code",
    codeLink: "https://github.com/1Dedios/timestamp-microservice",
  },
  {
    type: "security",
    title: "SECURITY",
    imgSrc: "/logo.png",
    imgAlt: "",
    imgWidth: 16,
    imgHeight: 16,
    projectType: "Web App",
    techStackIconsImageSrc: "/tech-stack-logos/nodedotjs.svg",
    techStackIconsImageAlt: "",
    techStackIconsImageWidth: 16,
    techStackIconsImageHeight: 16,
    techStackIconsImageSrc2: "/tech-stack-logos/express.svg",
    techStackIconsImageAlt2: "",
    techStackIconsImageWidth2: 16,
    techStackIconsImageHeight2: 16,
    techStackIconsImageSrc3: "/tech-stack-logos/express.svg",
    techStackIconsImageAlt3: "",
    techStackIconsImageWidth3: 16,
    techStackIconsImageHeight3: 16,
    shortDescription:
      "REST API that responds with time manipulated data using the Date object in JS.",
    buttonCodeText: "Src Code",
    codeLink: "https://github.com/1Dedios/timestamp-microservice",
  },
  {
    type: "security",
    title: "SECURITY",
    imgSrc: "/logo.png",
    imgAlt: "",
    imgWidth: 16,
    imgHeight: 16,
    projectType: "Web App",
    techStackIconsImageSrc: "/tech-stack-logos/nodedotjs.svg",
    techStackIconsImageAlt: "",
    techStackIconsImageWidth: 16,
    techStackIconsImageHeight: 16,
    techStackIconsImageSrc2: "/tech-stack-logos/express.svg",
    techStackIconsImageAlt2: "",
    techStackIconsImageWidth2: 16,
    techStackIconsImageHeight2: 16,
    shortDescription:
      "REST API that responds with time manipulated data using the Date object in JS.",
    buttonCodeText: "Src Code",
    codeLink: "https://github.com/1Dedios/timestamp-microservice",
  },
];
