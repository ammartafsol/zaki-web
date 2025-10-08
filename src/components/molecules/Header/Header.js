import React from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import { BiMenu, BiOutline } from "react-icons/bi";
import { webNavData } from "@/developmentContext/appData";
import { imageUrl } from "@/resources/utils/helper";
import { HiArrowRightCircle } from "react-icons/hi2";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";

const Header = () => {
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
          <div className={classes.logo} onClick={() => router.push("/")}>
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
          <nav className={clsx(classes.nav, pathname === "/" && classes.whiteNav)}>
            {webNavData.map((item, index) => (
              <Link
                key={index}
                href={item?.path}
                className={clsx(
                  classes.navLink,
                  pathname === "/" && classes.whiteNavLink,
                  pathname === item?.path && classes.activeNavLink,
                )
              }
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
            className={classes.ctaButton}
          />
        </div>
      </Container>
    </header>
  );
};

export default Header;
