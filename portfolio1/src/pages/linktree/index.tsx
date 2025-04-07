import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/watermelon_me_bitmoji.png";
import Button from "../../components/Button";
import { UilGithubAlt, UilLinkedinAlt, UilDiscord } from "@iconscout/react-unicons";

export default function LinkTree() {
  return (
    <>
      <div className="flex flex-col items-center h-screen text-center">
        <div>
          <div className="flex flex-col items-center avatar mt-20 mb-6">
            <div className="ring-creme ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
              <Image src={logo} alt="logo" height={104} width={104} />
            </div>
          </div>
          <p className="mt-4 text-creme">
            <span className="text-lime-400">Dedios@linux-desktop:</span>~$ _
          </p>
          <p className="italic text-sm text-creme">+ ECC 11:2</p>
        </div>
        <div className="mt-4 w-7/12">
          <p className="text-creme">
            "Modern physics teaches me that nature is not capable of ordering itself. The
            universe presupposes a huge mass of order. It therefore requires a great
            "First Cause" that is not subject to the second law of transformation of
            energy and that is therefore{" "}
            <span className="text-creme underline decoration-4 decoration-gold italic">
              Supernatural
            </span>
            ."
          </p>
          <br></br>
          <p className="italic">- H.Aiken</p>
        </div>
        <div className="flex flex-col space-y-4 mt-6 text-sm">
          <Link href="/" target="_blank">
            <Button
              text="My Site"
              textClassName="text-lime-400 italic"
              className="text-center glass rounded-lg pt-4 pb-4 pr-10 pl-10"
            />
          </Link>
          <Link href="/contact" target="_blank">
            <Button
              text="Contact"
              textClassName="text-lime-400 italic"
              className="text-center glass rounded-lg pt-4 pb-4 pr-10 pl-10"
            />
          </Link>
        </div>
        <div className="flex flex-row justify-center space-x-4 mt-6">
          <UilGithubAlt />
          <UilLinkedinAlt />
          <UilDiscord />
        </div>
      </div>
    </>
  );
}
