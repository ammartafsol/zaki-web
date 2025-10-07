"use client";
import React from "react";
import classes from "./AfterLoginHeader.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { nav_data } from "@/developmentContext/appData";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function AfterLoginHeader() {
  const pathname = usePathname();
  // const { user } = useSelector((state) => state.authReducer);
  const user = {
    photo: "/app-images/user-profile.png",
  };

  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col md={2} className="p-0">
          <div className={classes.logo}>
            <Image src="/svgs/logo.svg" alt="Logo" fill priority />
          </div>
        </Col>
        <Col md={7}>
          <div className={classes.nav}>
            {nav_data?.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={clsx(
                  classes.navLink,
                  item?.path === pathname && classes.selectedNav
                )}
              >
                <div className={classes.icon}>
                  <Image src={item?.icon} fill priority alt={item?.title} />
                </div>
                {item.title}
              </Link>
            ))}
          </div>
        </Col>
        <Col md={3}>
          <div className={clsx(classes.nav, classes.profile)}>
            <Link
              href={"/user/notifications"}
              className={clsx(
                classes.navLink,
                classes.selectedNav,
                classes.profileNav
              )}
            >
              <div className={classes.icon}>
                <Image
                  src={"/svgs/notifications.svg"}
                  fill
                  priority
                  alt="Notification"
                />
              </div>
              Notifications
            </Link>
            <div className={classes.profileImage}>
              <Image
                src={user?.photo ?? "/app-images/default-user.png"}
                fill
                priority
                alt="Profile"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
