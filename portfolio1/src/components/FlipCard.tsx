import Image from 'next/image';
import Button from '@/components/Button';

// TODO: Add this component to the "recent project" section and see how it looks before styling it to see the structure - remember to add the logos of the projects as the images

let test = 'test';

export default function FlipCard({
  title,
  subTitle,
  image,
  alt,
  width,
  height,
  typeDesignation,
  classname,
  shortDescription,
}: {
  title: string;
  subTitle: string;
  image: any;
  alt: string;
  width: number;
  height: number;
  typeDesignation: string;
  classname: string;
  shortDescription: string;
}) {
  return (
    <>
      <div className="flip_card">
        <div className="flip_card_inner">
          <div className="flip_card_face_front">
            <h2>{title}</h2>
            {/* TODO: typeDesignation = Site or App. Represent as a pill shaped badge "button" with Site or App - aligned to the right of the card*/}
            <Button text={typeDesignation} className={classname} />
            {/* TODO: images should be of the logos for these sites/apps */}
            <Image src={image} alt={alt} width={width} height={height} />
            <p>{subTitle}</p>
          </div>
          <div className="flip_card_face_back">
            <div className="flip_card_content">
              <div className="flip_card_header">
                <h2>{title}</h2>
                {/* TODO: This will show the tech stack used to build the project as icons */}

                <span>Tech Stack:</span>
              </div>
              <div className="flip_card_body">
                <p>{shortDescription}</p>
                {/* TODO: this button will take you to that specific projects page */}
                <Button text="button" className={test} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
