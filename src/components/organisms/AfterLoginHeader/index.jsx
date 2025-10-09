"use client";
import { nav_data, therapist_nav_data } from "@/developmentContext/appData";
import { getUserRoleCookie } from "@/resources/utils/cookie";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./AfterLoginHeader.module.css";

export default function AfterLoginHeader() {
  const userRole = getUserRoleCookie();

  const pathname = usePathname();
  const router = useRouter();
  // const { user } = useSelector((state) => state.authReducer);
  const user = {
    photo: "/app-images/user-profile.png",
  };

  const navData = userRole === "therapist" ? therapist_nav_data : nav_data;

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
            {navData?.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={clsx(
                  classes.navLink,
                  item?.path === pathname && classes.selectedNav
                )}
              >
                <div
                  className={clsx(
                    classes.icon,
                    item?.path === pathname && classes.selectedNavIcon
                  )}
                >
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
            <div
              className={classes.profileImage}
              onClick={() => router.push("/user/profile")}
            >
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
