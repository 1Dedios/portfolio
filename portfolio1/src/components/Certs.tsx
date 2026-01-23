import Carousel from "./Carousel";
import { useTheme } from "./Theme";

export default function Certs() {
  const certsImagesArray: string[] = [
    "/cc-cert.png",
    "/oracle-cert.avif",
    "/gfact-cert.png",
  ];
  const certsAltTextArray: string[] = ["", "", ""];
  const { theme, assets } = useTheme();

  return (
    <>
      <div className={theme === "dev" ? "hacker" : "dev"}>
        <div className={assets.certsDisplayCSS}>
          <div className="divider"></div>
          <h1 className={assets.certsTitleCSS}>Certifications</h1>
          <Carousel
            imagesArray={certsImagesArray}
            imagesAltTextArray={certsAltTextArray}
            className={assets.certsCSS}
          />
        </div>
      </div>
    </>
  );
}
