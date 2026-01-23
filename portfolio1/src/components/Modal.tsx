import Image from "next/image";
import Button from "./Button";
import logo from "../../public/logo.png";

export default function Modal({ closeModal }: { closeModal: any }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-jasper shadow-2xl shadow-creme border-4 border-double rounded-lg p-20 text-center">
        <Image src={logo} alt="dedios logo" height={250} width={250} />
        <p className="pt-3 text-creme text-xl">Thank You</p>
        <p className="pt-1 pb-3 italic">I'll be in contact, ASAP.</p>
        <Button
          onClick={closeModal}
          text="cool 👍🏽"
          className="text-creme border-2 rounded-md p-2 px-8 hover:bg-gold hover:text-xl hover:text-black"
        ></Button>
      </div>
    </div>
  );
}
