import Button from "@/components/atoms/Button";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";
import { webNavData } from "@/developmentContext/appData";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import { HiArrowRightCircle } from "react-icons/hi2";
import { useSelector } from "react-redux";
import classes from "./Header.module.css";

const Header = () => {
  const { language } = useSelector((state) => state.commonReducer);

  let isDe = language === "de";

  const router = useRouter();
  const pathname = usePathname();

  return (
    <header
      className={clsx(classes.header, {
        [classes.absolute]: pathname === "/",
        [classes.relative]: pathname !== "/",
      })}
    >
      <Container>
        <div className={classes.headerContent}>
          {/* Logo */}
          <div
            className={clsx(classes.logo, isDe && classes.deLogo)}
            onClick={() => router.push("/")}
          >
            <Image
              src={
                pathname === "/"
                  ? "/app-images/web-logo.png"
                  : "/svgs/black-logo.svg"
              }
              alt="logo"
              fill
            />
          </div>
          <nav
            className={clsx(classes.nav, pathname === "/" && classes.whiteNav)}
          >
            {webNavData.map((item, index) => (
              <Link
                key={index}
                href={item?.path}
                className={clsx(
                  classes.navLink,
                  isDe && classes.deNavLink,
                  pathname === "/" && classes.whiteNavLink,
                  pathname === item?.path && classes.activeNavLink
                )}
              >
                {item?.title}
              </Link>
            ))}
          </nav>
          <div className={classes.languageSwitcherDiv}>
            <LanguageSwitcher />
          </div>
          <Button
            label="Finde Therapeuten"
            variant="primary"
            leftIcon={<HiArrowRightCircle size={16} />}
            className={clsx(classes.ctaButton, isDe && classes.deCtaButton)}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
