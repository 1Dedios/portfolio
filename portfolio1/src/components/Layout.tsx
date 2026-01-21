import Navbar from "./Navbar";
import Footer from "./Footer";
import { Props } from "../types/types";

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
