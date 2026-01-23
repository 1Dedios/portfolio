import Image from "next/image";
import Link from "next/link";
import IconTray from "./IconTray";
import { useTheme } from "@/components/Theme";

export default function Navbar() {
  const { theme, toggleTheme, assets } = useTheme();

  return (
    <div className={assets.navbarCSS}>
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
              <Link href="/software-projects">Software</Link>
            </li>
            <li>
              <Link href="/sec-projects">CyberSecurity</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/whoami">Whoami</Link>
            </li>
            <li>
              <Link href="https://1dedios.github.io/resume/" target="_blank">
                Resume
              </Link>
            </li>
          </ul>
        </div>

        {/* theme changer */}
        <label className="swap swap-rotate mr-4">
          <input
            type="checkbox"
            className="theme-controller"
            value="synthwave"
            onClick={toggleTheme}
          />

          {/* dev icon */}
          <svg
            fill="#fffae6"
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fffae6"
            className="swap-off h-10 w-10 fill-current"
          >
            <path d="M 2 7 L 2 25 L 30 25 L 30 7 L 2 7 z M 4 9 L 28 9 L 28 23 L 4 23 L 4 9 z M 6 11 L 6 21 L 9 21 C 10.654 21 12 19.654 12 18 L 12 14 C 12 12.346 10.654 11 9 11 L 6 11 z M 16 11 C 14.897 11 14 11.897 14 13 L 14 19 C 14 20.103 14.897 21 16 21 L 18 21 L 18 19 L 16 19 L 16 17 L 18 17 L 18 15 L 16 15 L 16 13 L 18 13 L 18 11 L 16 11 z M 19.691406 11 L 21.775391 20.025391 C 21.907391 20.595391 22.415 21 23 21 C 23.585 21 24.092609 20.595391 24.224609 20.025391 L 26.308594 11 L 24.255859 11 L 23 16.439453 L 21.744141 11 L 19.691406 11 z M 8 13 L 9 13 C 9.552 13 10 13.448 10 14 L 10 18 C 10 18.552 9.552 19 9 19 L 8 19 L 8 13 z" />
          </svg>

          {/* hacker icon */}
          <svg
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            width="40px"
            height="40px"
            viewBox="0 0 512 512"
            fill="#01fe01"
            stroke="#01fe01"
            className="swap-on h-10 w-10"
          >
            <path
              className="st0"
              d="M378.625,209.465c-6.531-38.344-13.672-80-15.844-91.844c-5.313-28.906-43.375-45.063-71.656-24.234 c-14.828,10.938-28.094,11.719-35.125,11.719s-14.828,1.563-35.125-11.719c-29.391-19.219-66.344-4.672-71.656,24.234 c-2.172,11.844-9.313,53.5-15.844,91.844C53.906,219.418,0,238.778,0,261.012c0,32.438,114.625,58.719,256,58.719 c141.391,0,256-26.281,256-58.719C512,238.778,458.094,219.418,378.625,209.465z"
            />
            <path
              className="st0"
              d="M109.125,330.45l7.547,86.515c39.563,6.719,79.734,10.219,119.703,11.078L256,401.278l19.625,26.765 c39.969-0.859,80.141-4.359,119.703-11.078l7.547-86.515c-48.375,9.359-97.906,13.5-146.875,13.5 C207.016,343.95,157.516,339.809,109.125,330.45z M186.688,401.997c-33.469-1.578-35.563-41.766-35.563-41.766l75.125,14.672 C226.25,374.903,220.156,403.59,186.688,401.997z M360.875,360.231c0,0-2.094,40.188-35.563,41.766 c-33.469,1.594-39.563-27.094-39.563-27.094L360.875,360.231z"
            />
          </svg>
        </label>
      </div>

      {/* links to the left of the logo */}
      <div>
        <ul className="flex flex-row space-x-8">
          <li className={assets.navbarLinkCSS}>
            <Link href="/projects">{theme === "dev" ? "Software" : "Security"}</Link>
          </li>
          <li className={assets.navbarLinkCSS}>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>

      {/* middle logo */}
      <div className="navbar-center pl-8 pr-8">
        <Link href="/">
          <Image
            src={assets.logo}
            alt={theme === "dev" ? "logo" : "sec-me"}
            width={160}
            height={160}
          />
        </Link>
      </div>

      {/* links to right */}
      <div>
        <ul className="flex flex-row space-x-8 ">
          <li className={assets.navbarLinkCSS}>
            <Link href="/whoami">Whoami</Link>
          </li>
          <li className={assets.navbarLinkCSS}>
            <Link href="https://1dedios.github.io/resume/" target="_blank">
              Resume
            </Link>
          </li>
        </ul>
      </div>

      {/* icons */}
      <div className="navbar-end">
        <IconTray />
      </div>
    </div>
  );
}
