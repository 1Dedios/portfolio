import Image from "next/image";

export default function Carousel({
  imagesArray,
  imagesAltTextArray,
}: {
  imagesArray: any[];
  imagesAltTextArray: string[];
}) {
  return (
    <div className="relative overflow-hidden max-w-screen-md mx-auto">
      <div className="carousel rounded-box">
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
  );
}
