import Navbar from "./Navbar";
import Footer from "./Footer";
import { Props } from "../types/types";
import Certs from "./Certs";

export default function Layout({
  children,
  className,
}: {
  children: Props;
  className: string;
}) {
  return (
    <>
      <div className={className}>
        <Navbar />
        <main>{children}</main>
        <Certs />
        <Footer />
      </div>
    </>
  );
}
