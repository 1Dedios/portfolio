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
              <UilLinkedin />
            </Link>
            <Link href="https://github.com/1Dedios">
              <UilGithub />
            </Link>
            <Link href="/contact">
              <UilEnvelopeCheck />
            </Link>
          </div>
          <div></div>
        </>
      ) : (
        <>
          <div className="flex flex-row space-x-2">
            <Link href="https://www.linkedin.com/in/epadilla1/">
              <Image src="/linkedin-green.png" alt="" width={24} height={24} />
            </Link>
            <Link href="https://github.com/1Dedios">
              <Image src="/git-green.png" alt="github" width={24} height={24} />
            </Link>
            <Link href="/contact">
              <Image src="/green-send-icon.png" alt="" width={24} height={24} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
