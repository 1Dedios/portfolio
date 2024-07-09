import Image from 'next/image';
import logo from '/public/logo.png';
import { UilGithub, UilLinkedin, UilEnvelopeMinus } from '@iconscout/react-unicons';

export default function Footer() {
  return (
    <>
      <div className="footer footer-center p-10 bg-creme text-navy">
        <div className="mb-3">
          <Image src={logo} alt="Watermelon Me" width={250} height={100} />
          <p className="font-sans">
            Copyright © 2022-2024 - Created w/ ❤️ Eddie Padilla
          </p>
        </div>
        <div className="grid grid-flow-col gap-1">
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
    </>
  );
}
