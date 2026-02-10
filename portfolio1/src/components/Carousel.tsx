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
        <div
          /* grid grid-cols-${imagesArray.length} */
          className={`carousel rounded-box flex space-x-4 justify-center`}
        >
          {imagesArray.map((image, index) => {
            return (
              <Image
                src={image}
                key={index}
                alt={imagesAltTextArray[index]}
                width={60}
                height={60}
                className="h-auto"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
