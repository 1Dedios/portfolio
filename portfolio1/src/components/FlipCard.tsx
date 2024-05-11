import Image from 'next/image';
import Button from '@/components/Button';
import styles from './FlipCard.module.css';

export default function FlipCard({
  title,
  subTitle,
  imgSrc,
  imgAlt,
  imgWidth,
  imgHeight,
  typeDesignation,
  classname,
  shortDescription,
  buttonText,
  buttonClassName,
}: {
  title: string;
  subTitle: string;
  imgSrc: any;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  typeDesignation: string;
  classname: string;
  shortDescription: string;
  buttonText: string;
  buttonClassName: string;
}) {
  const cardFlip = () => {
    // TODO: set state here for flip
  };

  return (
    <>
      {/* DaisyUI Attributes: card w-96 glass - everything else is JS*/}
      <div onClick={cardFlip} className={`glass ${styles.flip_card}`}>
        <div className={styles.flip_card_inner}>
          <div
            className={`${styles.flip_card_face} ${styles.flip_card_face_front}`}
          >
            <h2>{title}</h2>
            {/* TODO: typeDesignation = Site or App. Represent as a pill shaped badge "button" with Site or App - aligned to the right of the card*/}
            <Button text={typeDesignation} className={classname} />
            {/* TODO: images should be of the logos for these sites/apps */}
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={imgWidth}
              height={imgHeight}
            />
            <p>{subTitle}</p>
          </div>
          <div className={`${styles.flip_card_face} ${styles.flip_card_back}`}>
            <div className={`${styles.flip_card_content}`}>
              <div className={`${styles.flip_card_header}`}>
                <h2>{title}</h2>
                {/* TODO: This will show the tech stack used to build the project as icons */}
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  width={imgWidth}
                  height={imgHeight}
                />
                <span>Tech Stack:</span>
              </div>
              <div className={styles.flip_card_body}>
                <p>{shortDescription}</p>
                {/* TODO: this button will take you to that specific projects page */}
                <Button text={buttonText} className={buttonClassName} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
