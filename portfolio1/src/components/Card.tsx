import Image from "next/image";

interface text {
  cardTitle: string;
  cardText: string;
  alt: string;
  image: any;
}

export default function Card({ image }, { alt, cardText, cardTitle }: text) {
  return (
    <div className="card_flipper w-96">
      <div className="card_inner">
        <div className="card_front">
          <h2>{cardTitle}</h2>
        </div>
        <div className="card_back">
          <div className="card_content">
            <div className="card_header">
              <figure>
                <Image src={image} alt={alt} />
              </figure>
              <h2>title</h2>
            </div>
            <div className="card_body">
              <h3>JS Wizard</h3>
              <p>{cardText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
