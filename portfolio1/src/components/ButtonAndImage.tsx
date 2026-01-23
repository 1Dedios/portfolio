import Image from "next/image";
import { MouseEventHandler } from "react";

export default function ButtonAndImage({
  className,
  text,
  imgSrc,
  imgAltText,
  onClick,
}: {
  className: string;
  text: string;
  imgSrc: string;
  imgAltText: string;
  onClick?: MouseEventHandler;
}) {
  return (
    <button onClick={onClick} className={className}>
      {text}
      <span className="flex flex-row pl-2">
        <Image src={imgSrc} alt={imgAltText} width={20} height={40}></Image>
      </span>
    </button>
  );
}
