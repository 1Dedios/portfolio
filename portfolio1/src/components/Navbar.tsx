import Image from 'next/image';
import Logo from '/public/logo.png';
import { UilGithub } from '@iconscout/react-unicons';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilEnvelopeMinus } from '@iconscout/react-unicons';

export default function Navbar() {
  return (
    <div className="navbar bg-purple shadow-lx glass text-creme">
      {/* extreme left elements */}
      <div className="navbar-start mr-4">
        {/* mobile menu */}
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
              <a>Software</a>
            </li>
            <li>
              <a>CyberSecurity</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Resume</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>

      {/* links to the left of the logo */}
      <div>
        <ul className="flex flex-row space-x-8">
          <li className="hover:text-gold hover:uppercase">
            <a href="">Software</a>
          </li>
          <li className="hover:text-gold hover:uppercase">
            <a href="">Cybersecurity</a>
          </li>
          <li className="hover:text-gold hover:uppercase">
            <a href="">Blog</a>
          </li>
        </ul>
      </div>

      <div className="navbar-center flex space-x-6">
        <a href="/">
          <Image src={Logo} alt="logo" width={160} height={160} />
        </a>
      </div>

      {/* links to the right of the logo */}
      <div>
        <ul className="flex flex-row space-x-8">
          <li className="hover:text-gold hover:uppercase">
            <a href="">About</a>
          </li>
          <li className="hover:text-gold hover:uppercase">
            <a href="">Resume</a>
          </li>
          <li className="hover:text-gold hover:uppercase">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      {/* extreme right elements */}
      <div className="navbar-end gap-4 mr-4">
        <a>
          {' '}
          <UilLinkedin />{' '}
        </a>
        <a>
          {' '}
          <UilGithub />{' '}
        </a>
        <UilEnvelopeMinus />
      </div>
    </div>
  );
}
