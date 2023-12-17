import Image from 'next/image';
import Button from '@/components/Button';

export default function ProjectCard({
  image,
  alt,
  cardText,
  cardTitle,
  buttonText,
  webDesignation,
}) {
  return (
    <div className="card w-96 glass">
      <figure>
        <Image src={image} alt={alt} />
      </figure>
      <div className="card-body">
        <h2>{cardTitle}</h2>
        <p>{cardText}</p>
        <p>{webDesignation}</p>
        <div className="card-actions justify-end">
          <Button text={buttonText} className="btn-primary" />
        </div>
      </div>
    </div>
  );
}
