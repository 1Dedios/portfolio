import Image from "next/image";
import Head from "next/head";
import Logo from "/public/logo.png";
import { UilGithub, UilLinkedin, UilEnvelopeCheck } from "@iconscout/react-unicons";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-purple shadow-lx glass text-creme">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* extreme left elements */}
      <div className="navbar-start mr-4">
        {/* mobile menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Software</Link>
            </li>
            <li>
              <Link href="/">CyberSecurity</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Resume</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* links to the left of the logo */}
      {/* TODO: add visited property to links to change color when they've been clicked */}
      <div>
        <ul className="flex flex-row space-x-8">
          <li className="hover:text-gold hover:uppercase hover:font-semibold">
            <Link href="/">Software</Link>
          </li>
          <li className="hover:text-gold hover:uppercase hover:font-semibold">
            <Link href="/">Cybersecurity</Link>
          </li>
          <li className="hover:text-gold hover:uppercase hover:font-semibold">
            <Link href="/">Blog</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-center flex space-x-6">
        <Link href="//">
          <Image src={Logo} alt="logo" width={160} height={160} />
        </Link>
      </div>

      {/* links to the right of the logo */}
      <div>
        <ul className="flex flex-row space-x-8 ">
          <li className="hover:text-gold hover:uppercase hover:font-semibold">
            <Link href="/whoami">Whoami</Link>
          </li>
          <li className="hover:text-gold hover:uppercase hover:font-semibold">
            <Link href="/">Resume</Link>
          </li>
          <li className="hover:text-gold hover:uppercase hover:font-semibold">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* extreme right elements */}
      <div className="navbar-end gap-4 mr-4">
        <Link href="https://www.linkedin.com/in/epadilla1/">
          <UilLinkedin />
        </Link>
        <Link href="https://github.com/1Dedios">
          <UilGithub />
        </Link>
        <UilEnvelopeCheck />
      </div>
    </div>
  );
}
