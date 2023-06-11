import Image from "next/image";
import logo from "@/images/logo.png";
import { UilGithub } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilEnvelopeMinus } from "@iconscout/react-unicons";

export default function Footer() {
  return (
    <>
      <div className="footer footer-center p-10 bg-neutral-50/50 text-neutral-100">
        <div>
          <Image src={logo} alt="Watermelon Me" width={250} height={100} />

          <p>Copyright © 2022-2023 - Eddie Padilla</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.linkedin.com/in/epadilla1/">
              <UilLinkedin />
            </a>
            <a href="https://github.com/1Dedios">
              <UilGithub />
            </a>
            <a>
              <UilEnvelopeMinus />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
