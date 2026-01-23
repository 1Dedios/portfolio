import { ReactElement, ReactNode } from "react";
import { InferGetServerSidePropsType, NextPage } from "next";
import { AppProps } from "next/app";
import { Projects } from "@/types/interface/db-interfaces";
import { getServerSideProps } from "@/pages/projects";

// react events

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type MouseEvent = React.MouseEvent<HTMLButtonElement>;
export type MouseEventHandler = React.MouseEventHandler<HTMLButtonElement>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ChangeEventTextArea = React.ChangeEvent<HTMLTextAreaElement>;

// network events

export type ResponseData = {
  status: boolean;
  data?: Projects[];
  error?: string;
};

// themes

export type Theme = "dev" | "hacker";

export interface ThemeContextType {
  theme?: Theme;
  toggleTheme: () => void;
  assets: {
    logo: string;
    navbarCSS: string;
    navbarLinkCSS: string;
    heroCSS: string;
    heroBlurb: string;
    heroImage: string;
    heroImageCSS: string;
    heroTitleCSS: string;
    heroDynamicTitleCSS: string;
    homeProjectSectionCSS: string;
    homeProjectSectionTitle: string;
    homeProjectSectionTitleCSS: string;
    homeProjectSectionSubtitle: string;
    homeProjectSectionSubtitleCSS: string;
    homeProjectSectionClickFlipCSS: string;
    homeProjectSectionArrow: string;
    homeProjectSectionButtonCSS: string;
    projectPageCSS: string;
    projectPageTitleCSS: string;
    aboutPageCSS: string;
    aboutPageBioCSS: string;
    aboutPageTitleCSS: string;
    aboutPageQuote: string;
    aboutPageMainImageCSS: string;
    aboutPageBioAccent1: string;
    aboutPageBioAccent2: string;
    aboutPageBioAccent3: string;
    aboutPageBioAccent4: string;
    aboutPageBioAccent5: string;
    aboutPageBioAccent6: string;
    aboutPageCollapseClosed1: string;
    aboutPageCollapseOpen1: string;
    aboutPageCollapseClosed2: string;
    aboutPageCollapseOpen2: string;
    aboutPageCollapseOpenDates2: string;
    aboutPageCollapseBadges: string;
    aboutPageEducationLogo: string;
    contactPageCSS: string;
    contactPageLogo: string;
    contactFormCSS: string;
    contactFormButtonCSS: string;
    certsDisplayCSS: string;
    certsCSS: string;
    certsTitleCSS: string;
    footerImage: string;
    footerCSS: string;
    footerTHMBadgeCSS: string;
    footerNetworksCSS: string;
  };
}

export interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

// props

export type Props = ReactNode;
export type ProjectPageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

// layout

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };

// TODO: might need to move all interfaces to a general file in types/interfaces dir

export interface LocalStorageProject {
  // value is really an array of InterfaceProjects[]
  value: string;
  expiry: number;
}
