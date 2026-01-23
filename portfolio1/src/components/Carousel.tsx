import Image from "next/image";

export default function Carousel({
  imagesArray,
  imagesAltTextArray,
  className,
}: {
  imagesArray: any[];
  imagesAltTextArray: string[];
  className: string;
}) {
  return (
    <div>
      <div className={className}>
        <div className="carousel rounded-box flex space-x-4">
          {imagesArray.map((image, index) => {
            return (
              <Image
                src={image}
                key={index}
                alt={imagesAltTextArray[index]}
                width={80}
                height={80}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
