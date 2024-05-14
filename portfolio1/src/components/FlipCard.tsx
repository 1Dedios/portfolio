import Image from 'next/image';
import Button from '@/components/Button';
import styles from './FlipCard.module.css';
import { useState } from 'react';

export default function FlipCard({
  mainTitle,
  backTitle,
  subTitle,
  imgFrontSrc,
  imgFrontAlt,
  imgFrontWidth,
  imgFrontHeight,
  projectType,
  classname,
  shortDescription,
  buttonText,
  buttonClassName,
}: {
  mainTitle: string;
  backTitle: string;
  subTitle: string;
  imgFrontSrc: any;
  imgFrontAlt: string;
  imgFrontWidth: number;
  imgFrontHeight: number;
  projectType: string;
  classname: string;
  shortDescription: string;
  buttonText: string;
  buttonClassName: string;
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
            <div>{mainTitle}</div>
            {/* TODO: typeDesignation = Site or App. Represent as a pill shaped badge "button" with Site or App - aligned to the right of the card*/}
            <Button text={projectType} className={classname} />

            <div>{subTitle}</div>
          </div>
          <div
            className={`${styles.flip_card_face} ${styles.flip_card_face_back}`}
          >
            <div className={`${styles.flip_card_content}`}>
              <div className={`${styles.flip_card_header}`}>
                <h2>{backTitle}</h2>
                {/* TODO: This will show the tech stack used to build the project as icons */}

                {/* TODO: images should be of the logos for these sites/apps */}
              </div>
              <div className="flex justify-center">
                <Image
                  src={imgFrontSrc}
                  alt={imgFrontAlt}
                  width={imgFrontWidth}
                  height={imgFrontHeight}
                />
              </div>
              <div className={styles.flip_card_body}>
                <span>Tech Stack: React, NextJS</span>
                <p>{shortDescription}</p>
                {/* TODO: this button will take you to that specific projects page */}
                <Button text={buttonText} className="mt-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
