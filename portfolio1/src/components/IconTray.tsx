import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/Theme";
import { UilGithub, UilLinkedin, UilEnvelopeCheck } from "@iconscout/react-unicons";

export default function IconTray() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dev" ? "hacker" : "dev"}>
      {theme === "dev" ? (
        <>
          <div className="flex flex-row space-x-2">
            <Link href="https://www.linkedin.com/in/epadilla1/">
              <UilLinkedin width={18} height={18} />
            </Link>
            <Link href="https://github.com/1Dedios">
              <UilGithub width={18} height={18} />
            </Link>
            <Link href="/#contact-page">
              <UilEnvelopeCheck width={18} height={18} />
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row space-x-2">
            <Link href="https://www.linkedin.com/in/epadilla1/">
              <Image src="/linkedin-green.png" alt="" width={28} height={28} />
            </Link>
            <Link href="https://github.com/1Dedios">
              <Image src="/git-green.png" alt="github" width={24} height={24} />
            </Link>
            <Link href="/#contact-page">
              <Image src="/green-send-icon.png" alt="" width={24} height={24} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
