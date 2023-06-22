import Image from "next/image";
import Logo from "@/images/logo.png";
import { UilGithub } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilEnvelopeMinus } from "@iconscout/react-unicons";

export default function Navbar() {
  return (
    <div className="navbar bg-purple">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
              <a>Homepage</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Open Source</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a>
          <Image src={Logo} alt="logo" width={160} height={160} />
        </a>
      </div>
      <div className="navbar-end gap-4">
        <a>
          {" "}
          <UilLinkedin />{" "}
        </a>
        <a>
          {" "}
          <UilGithub />{" "}
        </a>
        <UilEnvelopeMinus />
      </div>
    </div>
  );
}
