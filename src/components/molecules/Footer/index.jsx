"use client";
import React from "react";
import classes from "./Footer.module.css";
import clsx from "clsx";
import { FOOTER_DATA, pagesWithHeader } from "@/developmentContext/appData";
import { useState } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { imageUrl } from "@/resources/utils/helper";
import Link from "next/link";
import moment from "moment";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [data, setData] = useState(FOOTER_DATA);
  const pathname = usePathname();

  if (pagesWithHeader.includes(pathname)) {
    return (
      <footer className={clsx(classes.footer)}>
        <Container>
          <div className={classes.footerContent}>
            <div>
              <div className={classes.footerLogo}>
                <Image
                  src={imageUrl(data?.logo) || data?.logo}
                  alt="logo"
                  fill
                />
              </div>
            </div>
            <div className={classes.linksDiv}>
              {data?.links.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={classes.footerLink}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className={classes.socialLinksDiv}>
              {data?.socialLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={classes.socialLink}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className={classes.bottomDiv}>
            <p className={classes.copyright}>
              Copyright © {moment().format("YYYY")} Zenlift{" "}
              <span> Design by Tafsol</span>
            </p>
            <div className={classes.legalLinks}>
              {data?.legalLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={classes.legalLink}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </footer>
    );
  }
}
