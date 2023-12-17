import Image from 'next/image';
import Button from '@/components/Button';

export default function FlipCard({
  title,
  subTitle,
  image,
  alt,
  typeDesignation,
  shortDescription,
}) {
  return (
    <>
      <div className="flip_card">
        <div className="flip_card_inner">
          <div className="flip_card_face_front">
            <h2>{title}</h2>
            {/* TODO: typeDesignation = Site or App. Represent as a pill shaped badge "button" with Site or App - aligned to the right of the card*/}
            <Button text={typeDesignation} />
            {/* TODO: images should be of the logos for these sites/apps */}
            <Image src={image} alt={alt} />
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
                {/* TODO: this button will take you to that specifc projects page */}
                <Button text={text} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
