import React from "react";
import classes from "./Header.module.css";
import Image from "next/image";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import { BiMenu, BiOutline } from "react-icons/bi";
import { webNavData } from "@/developmentContext/appData";
import { imageUrl } from "@/resources/utils/helper";
import Button from "@/components/atoms/Button";

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.headerContent}>
          {/* Logo */}
          <div className={classes.logo}>
            <Image src="/app-images/web-logo.png" alt="logo" fill />
          </div>

          {/* Navigation Menu */}
          <nav className={classes.nav}>

          </nav>

          {/* Mobile menu button */}
          <button type="button" className={styles.mobileMenuButton}>
            <BiMenu size={30} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
