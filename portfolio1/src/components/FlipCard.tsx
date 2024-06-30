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
  shortDescription,
  buttonProjectText,
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
  shortDescription: string;
  buttonProjectText: string;
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
                  <Image src={ techStackIconsImageSrc} alt={techStackIconsImageAlt} width={techStackIconsImageWidth} height={techStackIconsImageHeight} />
                </div>
                <p>{shortDescription}</p>
                {/* TODO: this button will take you to that specific projects page */}
                <Button text={buttonProjectText} className="border-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
