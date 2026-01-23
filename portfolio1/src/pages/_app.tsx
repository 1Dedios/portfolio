import "@/styles/globals.css";
import { Nosifer, Poppins } from "next/font/google";
import { AppPropsWithLayout } from "@/types/types";
import Layout from "@/components/Layout";
import { ThemeProvider } from "@/components/Theme";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const noLayoutRoutes = ["/linktree"];
  const shouldShowLayout = !noLayoutRoutes.includes(router.pathname);

  return (
    <ThemeProvider>
      {shouldShowLayout ? (
        <Layout
          className={`${nosifer.variable} ${poppins.variable} min-h-screen scroll-smooth`}
        >
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
      ) : (
        <main
          className={`${nosifer.variable} ${poppins.variable} min-h-screen scroll-smooth`}
        >
          <Component {...pageProps} />
        </main>
      )}
    </ThemeProvider>
  );
}
