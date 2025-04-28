import Image from "next/image";
import Button from "@/components/Button";
import styles from "./FlipCard.module.css";
import { useEffect, useState } from "react";

export default function FlipCard({
  title,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  projectType,
  techStackIconsImageSrc,
  techStackIconsImageAlt,
  techStackIconsImageWidth,
  techStackIconsImageHeight,
  techStackIconsImageSrc2,
  techStackIconsImageAlt2,
  techStackIconsImageWidth2,
  techStackIconsImageHeight2,
  techStackIconsImageSrc3,
  techStackIconsImageAlt3,
  techStackIconsImageWidth3,
  techStackIconsImageHeight3,
  shortDescription,
  projectLink,
  codeLink,
  buttonProjectText,
  buttonCodeText,
  blogLink,
}: {
  title: string;
  imgSrc: any;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  projectType: string;
  techStackIconsImageSrc: any;
  techStackIconsImageAlt: string;
  techStackIconsImageWidth: number;
  techStackIconsImageHeight: number;
  techStackIconsImageSrc2: any;
  techStackIconsImageAlt2: string;
  techStackIconsImageWidth2: number;
  techStackIconsImageHeight2: number;
  techStackIconsImageSrc3?: any;
  techStackIconsImageAlt3?: string;
  techStackIconsImageWidth3?: number | undefined;
  techStackIconsImageHeight3?: number | undefined;
  shortDescription: string;
  projectLink?: string;
  codeLink?: string;
  buttonProjectText: string;
  buttonCodeText: string;
  blogLink?: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [thirdTechStackImage, setThirdTechStackImage] = useState(false);
  const [projectLinkFlag, setProjectLinkFlag] = useState(false);
  const [codeLinkFlag, setCodeLinkFlag] = useState(false);
  const [blogLinkFlag, setBlogLinkFlag] = useState(false);

  useEffect(() => {
    if (techStackIconsImageSrc3) setThirdTechStackImage(true);
    if (projectLink) setProjectLinkFlag(true);
    if (codeLink) setCodeLinkFlag(true);
    if (blogLink) setBlogLinkFlag(true);
  }, []);

  const cardFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  };

  const flipStyle = {
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(360deg)",
  };

  return (
    <>
      <div className={`${styles.flip_card}`}>
        <div className={styles.flip_card_inner} style={flipStyle} onClick={cardFlip}>
          <div
            className={`flex flex-col ${styles.flip_card_face} ${styles.flip_card_face_front}`}
          >
            <p className="text-lg text-navy font-bold">{title}</p>
            <p className="italic text-creme underline decoration-gold">{projectType}</p>
          </div>
          <div className={`${styles.flip_card_face} ${styles.flip_card_face_back}`}>
            <div className={`${styles.flip_card_content}`}>
              <div className={`${styles.flip_card_header}`}>
                <h2 className="text-navy font-bold">{title}</h2>
              </div>
              <div className="flex justify-center">
                <Image src={imgSrc} alt={imgAlt} width={imgWidth} height={imgHeight} />
              </div>
              <div className={styles.flip_card_body}>
                <span className="text-creme font-bold">Tech Stack:</span>
                <div className="flex flex-row space-x-2">
                  <Image
                    src={techStackIconsImageSrc}
                    alt={techStackIconsImageAlt}
                    width={techStackIconsImageWidth}
                    height={techStackIconsImageHeight}
                  />
                  <Image
                    src={techStackIconsImageSrc2}
                    alt={techStackIconsImageAlt2}
                    width={techStackIconsImageWidth2}
                    height={techStackIconsImageHeight2}
                  />
                  {thirdTechStackImage && (
                    <Image
                      src={techStackIconsImageSrc3}
                      alt={techStackIconsImageAlt3 || "no-image"}
                      width={techStackIconsImageWidth3}
                      height={techStackIconsImageHeight3}
                    />
                  )}
                </div>
                <p className="text-creme italic">{shortDescription}</p>
                {projectLinkFlag && (
                  <a href={projectLink} title={title} target="_blank">
                    <Button
                      text={buttonProjectText}
                      className="mt-2 p-1 hover:bg-gold hover:text-navy hover:border-navy hover:border-2 hover:rounded-md"
                    />
                  </a>
                )}
                {codeLinkFlag && (
                  <a href={codeLink} title="src-code" target="_blank">
                    <Button
                      text={buttonCodeText}
                      className="ml-2 mt-2 p-1 hover:bg-gold hover:text-navy hover:border-navy hover:border-2 hover:rounded-md"
                    />
                  </a>
                )}
                {blogLinkFlag && (
                  <a href={blogLink} title="blog-article" target="_blank">
                    <Button
                      text="Blog"
                      className="mt-2 p-1 hover:bg-gold hover:text-navy hover:border-navy hover:border-2 hover:rounded-md"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
