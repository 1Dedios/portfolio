import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image src={"/404-nothere.png"} alt="404-icon" width={600} height={600} />
      </div>
    </>
  );
}
