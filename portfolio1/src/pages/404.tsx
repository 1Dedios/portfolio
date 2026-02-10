import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <div className="grid grid-rows-1 place-content-center p-10">
        <Image
          src="/404-nothere.png"
          alt="404-icon"
          width={600}
          height={600}
          className="rounded-md w-full h-auto"
        />
      </div>
    </>
  );
}
