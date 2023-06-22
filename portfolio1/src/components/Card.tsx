import Image from "next/image";
import Button from "@/components/Button";

export default function Card({ image, alt, cardText, cardTitle, buttonText }) {
  return (
    <div className="card w-96 glass">
      <figure>
        <Image src={image} alt={alt} />
      </figure>
      <div className="card-body">
        <h2>{cardTitle}</h2>
        <p>{cardText}</p>
        <div className="card-actions justify-end">
          <Button text={buttonText} className="btn-primary" />
        </div>
      </div>
    </div>
  );
}
