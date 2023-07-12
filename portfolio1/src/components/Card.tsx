import Image from "next/image";

interface text {
  cardTitle: string;
  cardText: string;
  alt: string;
}

export default function Card({ image }, { alt, cardText, cardTitle }: text) {
  return (
    <div className="card w-96">
      <figure>
        <Image src={image} alt={alt} />
      </figure>
      <div className="card-front">
        <h2>{cardTitle}</h2>
      </div>
      <div className="card-back">
        <div className="card-body">
          <p>{cardText}</p>
        </div>
      </div>
    </div>
  );
}
