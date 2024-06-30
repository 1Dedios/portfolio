import Image from 'next/image';
import Button from '@/components/Button';
import styles from './FlipCard.module.css';
import { useState } from 'react';

export default function FlipCard({
  frontTitle,
  backTitle,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  projectType,
  buttonTypeClassName,
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
  buttonProjectText,
  buttonCodeText,
}: {
  frontTitle: string;
  backTitle: string;
  imgSrc: any;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  projectType: string;
  buttonTypeClassName: string;
  techStackIconsImageSrc: any;
  techStackIconsImageAlt: string;
  techStackIconsImageWidth: number;
    techStackIconsImageHeight: number;
  techStackIconsImageSrc2: any,
  techStackIconsImageAlt2: string,
  techStackIconsImageWidth2: number,
  techStackIconsImageHeight2: number,
  techStackIconsImageSrc3: any,
  techStackIconsImageAlt3: string,
  techStackIconsImageWidth3: number,
  techStackIconsImageHeight3: number,
  shortDescription: string;
  buttonProjectText: string;
  buttonCodeText: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  console.log(isFlipped);

  const cardFlip = () => {
    if (!isFlipped) {
      setIsFlipped(true);
    } else {
      setIsFlipped(false);
    }
  };

  const flipStyle = {
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(360deg)',
  };

  return (
    <>
      <div className={`${styles.flip_card}`}>
        <div
          className={styles.flip_card_inner}
          style={flipStyle}
          onClick={cardFlip}
        >
          <div
            className={`flex flex-col ${styles.flip_card_face} ${styles.flip_card_face_front}`}
          >
            <div>{frontTitle}</div>
            <Button text={projectType} className={buttonTypeClassName} />
          </div>
          <div
            className={`${styles.flip_card_face} ${styles.flip_card_face_back}`}
          >
            <div className={`${styles.flip_card_content}`}>
              <div className={`${styles.flip_card_header}`}>
                <h2>{backTitle}</h2>

              </div>
              <div className="flex justify-center">
                {/* TODO: images should be of the logos for these sites/apps */}
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  width={imgWidth}
                  height={imgHeight}
                  />
              </div>
              <div className={styles.flip_card_body}>
                  {/* TODO: This will show the tech stack used to build the project as icons */}
                <span>Tech Stack:</span>
                <div className='flex flex-row space-x-2'>
                  <Image src={techStackIconsImageSrc} alt={techStackIconsImageAlt} width={techStackIconsImageWidth} height={techStackIconsImageHeight} />
                  <Image src={techStackIconsImageSrc2} alt={techStackIconsImageAlt2} width={techStackIconsImageWidth2} height={techStackIconsImageHeight2} />
                  <Image src={ techStackIconsImageSrc3} alt={techStackIconsImageAlt3} width={techStackIconsImageWidth3} height={techStackIconsImageHeight3} />
                </div>
                <p>{shortDescription}</p>
                {/* TODO: this button will take you to that specific projects page */}
                <Button text={buttonProjectText} className="border-2 border-black mt-2 p-1" />
                <Button text={buttonCodeText} className='border-2 border-black ml-2 mt-2 p-1' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
