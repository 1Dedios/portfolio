import Image from "next/image";
import Head from "next/head";
import { useTheme } from "@/components/Theme";

export default function AboutPage() {
  const { theme, assets } = useTheme();

  return (
    <>
      <div className={theme === "dev" ? "hacker" : "dev"}>
        <Head>
          <title>Whoami</title>
        </Head>
        <div className={assets.aboutPageCSS}>
          <p className={assets.aboutPageTitleCSS}>Eddie P.</p>

          {/* anime panel */}
          <div className="flex flex-row justify-center p-10">
            <Image src="/anime-panel.png" alt="" width={400} height={200} />
            <Image src="/anime-panel2.png" alt="" width={200} height={200} />
          </div>

          {/* quote */}
          <div className="p-10 grid grid-cols-1 justify-items-center">
            <p className={assets.aboutPageQuote}>
              "Life before death, strength before weakness, journey before destination."
            </p>
            <p className="text-2xl">- Brandon Sanderson</p>
          </div>

          <div className="divider p-10">
            <Image src="/dedios_logo.png" alt="" height={60} width={60} />
          </div>

          {/* image and bio */}
          <div className="flex flex-row justify-around space-x-4 mt-10 mb-10 p-4">
            <div>
              <Image
                className={assets.aboutPageMainImageCSS}
                src="/the_boss.jpg"
                alt=""
                height={400}
                width={400}
              />
            </div>
            <div className="divider divider-horizontal"></div>
            <div className={assets.aboutPageBioCSS}>
              <p className="leading-relaxed tracking-wide">
                <span className={assets.aboutPageBioAccent1}>
                  Versatile Full-Stack Engineer{" "}
                </span>
                with{" "}
                <span className={assets.aboutPageBioAccent2}>
                  SECURITY ENGINEER KNOWLEDGE AND ETHICAL HACKER TRAINING
                </span>{" "}
                through{" "}
                <span className={assets.aboutPageBioAccent3}> SANS Institute. </span>I
                have 4 years of hands-on experience designing, building and securing
                modern web applications{" "}
                <span className={assets.aboutPageBioAccent4}>&</span> infrastructure.
                Adept at bridging software development and security disciplines to{" "}
                <span className={assets.aboutPageBioAccent5}>
                  deliver fast, resilient, scalable solutions across cloud and on-prem
                  environments.
                </span>{" "}
              </p>
              <div className="divider"></div>
              <p>
                {" "}
                Moreover, I really enjoy the intersection between World Politics (my B.A)
                and Cybersecurity. Cybersecurity's roots are in the military after all and
                <span className={assets.aboutPageBioAccent6}>
                  {" "}
                  ultimately you can't build good, resilient and useful software, if
                  security is not interleaved during the SDLC process.{" "}
                </span>{" "}
                So though my experience is diverse they all bake wonderfully
                together.{" "}
              </p>
            </div>
          </div>

          {/* recreation */}
          <div className="grid grid-cols-1 gap-4 p-10">
            <div className="collapse">
              <input type="checkbox" className="peer" title="fav-things-to-do" />
              <div className={assets.aboutPageCollapseClosed1}>
                FAVORITE THINGS TO DO:
              </div>
              <div className={assets.aboutPageCollapseOpen1}>
                <p>Video Games 👾</p>
                <p>Programming 👨‍💻</p>
                <p>CTF Competitions ⛳</p>
                <p>Hackathons 🏇</p>
                <p>Electrical Engineering ⚡</p>
                <p>Learning 🤓</p>
              </div>
            </div>
          </div>

          {/* professional development */}
          <div className="grid grid-cols-1 gap-4 p-10">
            <div className="collapse">
              <input type="checkbox" className="peer" title="fav-things-to-do" />
              <div className={assets.aboutPageCollapseClosed2}>
                PROFESSIONAL DEVELOPMENT:
              </div>
              <div className={assets.aboutPageCollapseOpen2}>
                <div className="divider">
                  <span className={assets.aboutPageCollapseOpenDates2}> 2026 </span>
                </div>
                <p>
                  Stevens Tech Quackhacks -{" "}
                  <span className="italic">
                    <span className={assets.aboutPageCollapseBadges}>Hackathon</span>{" "}
                  </span>
                </p>
                <p>Stevens Tech Torchlight Mentorship</p>
                <div className="divider">
                  <span className={assets.aboutPageCollapseOpenDates2}> 2025 </span>
                </div>
                <p>SANS Institute Cyber Immersion Academy - '25 -'26</p>
                <p>The Knowledge House (TKH) - Innovation Cybersecurity Fellowship</p>
                <p>The Forage - Deloitte Incident Response</p>
                <p>
                  Bloomberg Hackathon -{" "}
                  <span className="italic">
                    {" "}
                    <span className={assets.aboutPageCollapseBadges}>CTF</span>{" "}
                  </span>
                </p>
                <p>Fortinet Training</p>
                <p>
                  U.S DoD Cyber Sentinel Challenge -{" "}
                  <span className="italic">
                    {" "}
                    <span className={assets.aboutPageCollapseBadges}>CTF</span>{" "}
                  </span>
                </p>
                <p>
                  MLH - Global Hack Week -{" "}
                  <span className="italic">
                    {" "}
                    <span className={assets.aboutPageCollapseBadges}>Hackathon</span>{" "}
                  </span>
                </p>
                <div className="divider">
                  <span className={assets.aboutPageCollapseOpenDates2}> 2024 </span>
                </div>
                <p>GCP - Associate Cloud Engineer Training</p>
                <div className="divider">
                  <span className={assets.aboutPageCollapseOpenDates2}> 2023 </span>
                </div>
                <p>Hack Weekly - '23-'24</p>
                <p>Revature Java Programming Bootcamp</p>
              </div>
            </div>
          </div>

          {/* education */}
          <div className="grid grid-cols-2 gap-4 pl-10 pr-10 pb-20 pt-20">
            <div>
              <p className="flex justify-start text-2xl">EDUCATION</p>
              <div className="divider"></div>
              <div className="grid grid-rows-2 gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <p>
                    Stevens Institute of Technology{" "}
                    <span className="italic font-poppins">M.S</span> Computer Science
                  </p>
                  <span className={assets.aboutPageEducationLogo}>
                    <Image src="/stevens-logo.png" alt="" width={60} height={24} />
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <p>
                    {" "}
                    Hamilton College <span className="italic font-poppins">B.A</span>{" "}
                    World Politics{" "}
                  </p>
                  <span className={assets.aboutPageEducationLogo}>
                    {" "}
                    <Image src="/hc-logo.png" alt="" width={60} height={24} />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <Image src="/anime-panel3.png" alt="" width={600} height={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
