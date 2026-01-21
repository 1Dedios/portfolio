import "@/styles/globals.css";
import { Nosifer, Poppins } from "next/font/google";
import { AppPropsWithLayout } from "@/types/types";
import Layout from "@/components/Layout";

export const nosifer = Nosifer({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-nosifer",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "200",
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <Layout>
        <main className={`${nosifer.variable} ${poppins.variable}`}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
