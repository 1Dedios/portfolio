import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

// events

export type FormEvent = React.FormEvent<HTMLFormElement>;
export type MouseEvent = React.MouseEvent<HTMLButtonElement>;
export type MouseEventHandler = React.MouseEventHandler<HTMLButtonElement>;
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
export type ChangeEventTextArea = React.ChangeEvent<HTMLTextAreaElement>;

// themes

export type Theme = "dev" | "hacker";
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// props

export type Props = {
  children: ReactNode;
};

// layout

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & { Component: NextPageWithLayout };
