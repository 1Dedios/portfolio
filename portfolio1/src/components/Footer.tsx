import Image from "next/image";
import Link from "next/link";
import BuyCoffee from "./BuyCoffee";
import IconTray from "./IconTray";
import { useTheme } from "@/components/Theme";

export default function Footer() {
  const { theme, assets } = useTheme();
  const time = new Date();
  return (
    <div className={theme === "dev" ? "hacker" : "dev"}>
      <div className={assets.footerTHMBadgeCSS}>
        <Image
          src="https://tryhackme-badges.s3.amazonaws.com/0x1Dedios1.png"
          alt=""
          height={350}
          width={350}
        />
      </div>
      <div className={assets.footerCSS}>
        <Link href="/">
          <Image src={assets.footerImage} alt="home" width={250} height={100} />
        </Link>
        <IconTray />
        <Link href="https://www.credly.com/users/eddiep">
          <Image src="/credly-icon.png" alt="home" width={64} height={64} />
        </Link>
        <div className={assets.footerNetworksCSS}>
          <Image src="/stevens-logo-nobg.png" alt="" height={100} width={100} />
          <div className="divider"></div>
          <Image src="/hamilton-logo-nobg.png" alt="" height={100} width={100} />
          <div className="divider"></div>
          <Image src="/sans-logo-nobg.png" alt="" height={100} width={100} />
          <div className="divider"></div>
          <Image src="/shpe-logo.png" alt="" height={100} width={100} />
          <div className="divider"></div>
          <Image src="/mlh-logo.png" alt="" height={100} width={100} />
          <div className="divider"></div>
          <div className="invert">
            <Image src="/bit-logo-nobg.png" alt="" height={100} width={100} />
          </div>
          <div className="divider"></div>
          <Image src="/nsbe-logo-nobg.png" alt="" height={100} width={100} />
        </div>
        <p className="font-sans">
          © 2022-{time.getFullYear()} All rights reserved - Created w/ ❤️ Eddie P.
        </p>
        <BuyCoffee />
      </div>
    </div>
  );
}
