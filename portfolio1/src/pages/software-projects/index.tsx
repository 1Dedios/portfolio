import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function SoftwarePage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <Image src={"/images/404-nothere.png"} alt="404-icon" width={600} height={600} />
      </div>
      <Footer />
    </>
  );
}
