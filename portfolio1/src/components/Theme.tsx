import { ThemeContextType, Theme } from "@/types/types";
import { createContext, useContext, useState } from "react";
import { ThemeProviderProps } from "@/types/types";

export const ThemeProvider = ({
  children,
  theme: initialTheme = "dev",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dev" ? "hacker" : "dev"));
  };

  const assets = {
    dev: {
      logo: "/logo.png",
      navbarCSS: "navbar bg-purple shadow-lx glass text-creme",
      navbarLinkCSS: "hover:text-gold hover:uppercase hover:font-semibold",
      navbarMobileMenu: "bg-purple text-creme",
      notificationBadge: "badge bg-green text-black gap-2",
      heroCSS: "hero h-[1200px] bg-auto bg-purple",
      heroBlurb:
        "Highly skilled, professional, polyglot Software Engineer. I am passionate about solving problems through Technology and building cool things 😛 for the Human Race.",
      heroBlurbCSS:
        "rounded-lg p-4 bg-creme shadow-md shadow-slate-200 font-sans text-navy text-center italic w-64 absolute top-1/4 mx-10 my-40 xl:left-40 lg:mx-40 lg:my-20 md:inline md:-left-0 md:mx-10",
      heroImage: "/watermelon_me_bitmoji.png",
      heroImageCSS: "",
      heroTitleCSS:
        "font-nosifer font-extrabold text-9xl text-center text-creme absolute -mx-16 -my-12 -z-10 sm:-mx-40",
      heroDynamicTitleCSS:
        "font-poppins font-extrabold text-4xl italic my-48 pt-5 text-creme",
      homeProjectSectionCSS: "min-h-min p-10 bg-creme",
      homeProjectSectionTitle: "PROJECTS",
      homeProjectSectionTitleCSS:
        "text-5xl text-center font-poppins font-bold p-4 text-navy",
      homeProjectSectionSubtitle:
        "Software creation is all about the decisions you make while building it. That's where the craft is evident between each Software Engineer.",
      homeProjectSectionSubtitleCSS: "pt-4 text-center text-navy italic",
      homeProjectSectionClickFlipCSS: "text-red-600 text-center italic text-md pt-4",
      homeProjectSectionArrow: "/purple-arrow.svg",
      homeProjectSectionButtonCSS:
        "bg-gold p-3 pl-5 pr-5 rounded-full text-navy hover:uppercase",
      projectPageCSS: "bg-creme min-h-screen",
      projectPageTitleCSS: "text-navy font-nosifer text-8xl text-center p-20 bg-creme",
      blogPage: "bg-creme",
      aboutPageCSS: "bg-creme text-navy",
      aboutPageTitleCSS: "text-navy font-nosifer text-8xl text-center p-20",
      aboutPageQuote: "italic text-navy text-2xl",
      aboutPageMainImageCSS:
        "border-purple border-dashed border-2 rounded-md h-auto md:w-full",
      aboutPageBioCSS: "text-navy text-center content-center p-8",
      aboutPageBioAccent1: "text-ally text-4xl font-nosifer",
      aboutPageBioAccent2: "text-xl italic text-rose-600",
      aboutPageBioAccent3:
        "text-ally italic text-xl underline decoration-rose-600 decoration-4",
      aboutPageBioAccent4: "text-xl text-rose-600",
      aboutPageBioAccent5:
        "text-xl italic text-rose-600 underline decoration-4 decoration-ally",
      aboutPageBioAccent6:
        "italic text-xl text-ally underline decoration-4 decoration-rose-600",
      aboutPageCollapseClosed1:
        "collapse-title bg-gold text-center text-navy peer-checked:bg-turk peer-checked:text-navy",
      aboutPageCollapseOpen1:
        "collapse-content bg-gold text-navy font-semibold text-center peer-checked:bg-turk peer-checked:text-navy",
      aboutPageCollapseClosed2:
        "collapse-title text-navy text-center bg-turk peer-checked:bg-gold peer-checked:text-navy",
      aboutPageCollapseOpen2:
        "collapse-content bg-turk text-navy font-semibold peer-checked:bg-gold peer-checked:text-navy",
      aboutPageCollapseOpenDates2: "italic text-rose-600",
      aboutPageCollapseBadges: "badge badge-primary badge-md",
      aboutPageEducationLogo: "justify-items-end",
      aboutPageLastAnimePanel: "border-8 border-purple",
      contactPageCSS: "p-8 bg-creme text-navy",
      contactPageLogo: "/dedios_logo.png",
      contactFormCSS:
        "flex flex-col font-semibold [&>input]:bg-navy [&>input]:text-creme [&>input]:caret-creme [&>textarea]:bg-navy [&>textarea]:text-creme",
      contactFormButtonCSS: "pt-4 hover:uppercase hover:bg-gold rounded-lg shadow-2xl",
      certsDisplayCSS: "p-10 bg-creme",
      certsCSS: "flex justify-center bg-creme mx-auto p-4",
      certsTitleCSS: "bg-creme font-poppins font-bold text-navy text-center text-5xl",
      footerImage: "/logo.png",
      footerCSS: "footer footer-center bg-creme text-navy grid grid-cols-1 p-8",
      /* BELOW lg:justify-end */
      footerTHMBadgeCSS: "hidden",
      footerNetworksCSS: "grid grid-cols-7 lg:flex lg:flex-row lg:justify-around",
    },
    hacker: {
      logo: "/sec-me.png",
      navbarCSS: "navbar bg-gray text-green shadow-lx glass",
      navbarLinkCSS: "hover:text-creme hover:uppercase hover:font-semibold",
      navbarMobileMenu: "bg-green text-gray",
      notificationBadge: "badge bg-gold text-black gap-2",
      heroCSS: "hero h-[1200px] bg-auto bg-gray",
      heroBlurb:
        "Software Engineer with 4 years of experience and deep cybersecurity expertise shaped by intensive SANS Institute training. Known for strengthening applications against modern threats, unifying development and security practices, and engineering scalable, resilient systems that reduce organizational risk.",
      heroBlurbCSS:
        "rounded-lg p-4 bg-creme shadow-md shadow-slate-200 font-sans text-navy text-center italic w-64 absolute top-1/4 -mx-4 -my-32 md:mx-28 md:my-10 lg:-my-20",
      heroImage: "/sec-me.png",
      heroImageCSS: "",
      heroTitleCSS:
        "font-nosifer text-9xl text-center text-green font-extrabold absolute -mx-16 -z-10 sm:-mx-40 ",
      heroDynamicTitleCSS:
        "font-poppins font-extrabold text-4xl italic my-60 pt-10 text-creme",
      homeProjectSectionCSS: "min-h-min p-4 bg-gray",
      homeProjectSectionTitle: "SECURITY",
      homeProjectSectionTitleCSS:
        "text-6xl text-center font-poppins font-bold pt-10 text-green",
      homeProjectSectionSubtitle:
        "Security is simply about assessing risk levels. If the risk of an asset is too great to stomach you simply do what is necessary to lower the risk of what you fear happening to your asset if placed in the wrong hands.",
      homeProjectSectionSubtitleCSS: "pt-4 text-center text-green italic",
      homeProjectSectionClickFlipCSS: "text-creme text-center italic text-md pt-4",
      homeProjectSectionArrow: "/green-arrow.svg",
      homeProjectSectionButtonCSS:
        "bg-green p-3 pl-5 pr-5 rounded-full text-gray hover:uppercase",
      projectPageCSS: "bg-gray",
      projectPageTitleCSS: "text-green font-nosifer text-8xl text-center p-20 bg-gray ",
      blogPage: "bg-gray",
      aboutPageCSS: "bg-gray text-green",
      aboutPageTitleCSS: "text-green font-nosifer text-8xl text-center p-20",
      aboutPageQuote: "italic text-green text-2xl",
      aboutPageMainImageCSS: "border-green border-2 rounded-md h-auto md:w-full",
      aboutPageBioCSS: "text-green text-center content-center p-8",
      aboutPageBioAccent1: "text-gold text-4xl font-nosifer",
      aboutPageBioAccent2: "text-xl italic text-creme",
      aboutPageBioAccent3:
        "text-turk italic text-xl underline decoration-rose-600 decoration-4",
      aboutPageBioAccent4: "text-xl text-creme",
      aboutPageBioAccent5:
        "text-xl italic text-creme underline decoration-4 decoration-gold",
      aboutPageBioAccent6:
        "italic text-xl text-gold underline decoration-4 decoration-creme",
      aboutPageCollapseClosed1:
        "collapse-title bg-green text-gray border-2 border-green text-center peer-checked:bg-gray peer-checked:text-green",
      aboutPageCollapseOpen1:
        "collapse-content bg-gray text-green font-semibold peer-checked:bg-gray peer-checked:text-creme",
      aboutPageCollapseClosed2:
        "collapse-title text-green border-2 border-green text-center peer-checked:bg-gray peer-checked:text-creme",
      aboutPageCollapseOpen2:
        "collapse-content bg-gray font-semibold peer-checked:bg-gray peer-checked:text-green",
      aboutPageCollapseOpenDates2: "italic text-creme",
      aboutPageCollapseBadges: "badge badge-accent badge-md",
      aboutPageEducationLogo: "invert justify-items-end",
      aboutPageLastAnimePanel: "border-8 border-turk",
      contactPageCSS: "p-8 bg-gray text-green",
      contactPageLogo: "/heart-hands.png",
      contactFormCSS:
        "flex flex-col font-semibold [&>input]:bg-gray [&>input]:border-2 [&>input]:text-green [&>input]:caret-green [&>textarea]:bg-gray [&>textarea]:border-2 [&>textarea]:text-green",
      contactFormButtonCSS:
        "pt-4 hover:uppercase hover:bg-green rounded-lg hover:text-gray shadow-2xl",
      certsDisplayCSS: "grid grid-row-1 p-10 bg-gray",
      certsCSS: "flex justify-center bg-gray mx-auto p-4",
      certsTitleCSS: "bg-gray font-poppins font-bold text-green text-center text-5xl",
      footerImage: "/sec-me.png",
      footerCSS: "footer footer-center bg-gray text-green grid grid-cols-1 p-8 glass",
      /* BELOW lg:justify-end */
      footerTHMBadgeCSS: "bg-gray p-4 sm:flex sm:justify-end",
      footerNetworksCSS: "grid grid-cols-7 invert",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, assets: assets[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    console.log("useTheme must be used within ThemeProvider");
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
