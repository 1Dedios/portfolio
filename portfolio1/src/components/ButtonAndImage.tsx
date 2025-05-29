import Image from "next/image";

export default function ButtonAndImage({
  className,
  buttonTitle,
  imgSrc,
  imgAltText,
}: {
  className: string;
  buttonTitle: string;
  imgSrc: string;
  imgAltText: string;
}) {
  return (
    <button className={className}>
      {buttonTitle}
      <span className="flex flex-row pl-2">
        <Image src={imgSrc} alt={imgAltText} width={16} height={16}></Image>
      </span>
    </button>
  );
}
