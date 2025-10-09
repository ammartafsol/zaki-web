"use client";
import { nav_data, therapist_nav_data } from "@/developmentContext/appData";
import {
  getUserRoleCookie,
  USER_ROLE_COOKIE_NAME,
} from "@/resources/utils/cookie";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import classes from "./AfterLoginHeader.module.css";
import { TbLogout2 } from "react-icons/tb";
import { PiUserCircleFill } from "react-icons/pi";

export default function AfterLoginHeader() {
  const userRole = getUserRoleCookie();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const popoverRef = useRef(null);

  const pathname = usePathname();
  const router = useRouter();
  // const { user } = useSelector((state) => state.authReducer);
  const user = {
    photo: "/app-images/user-profile.png",
  };

  const navData = userRole === "therapist" ? therapist_nav_data : nav_data;

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsPopoverOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    Cookies.remove(USER_ROLE_COOKIE_NAME);

    // Redirect to home page
    router.push("/");
    setIsPopoverOpen(false);
  };

  const handleProfileClick = () => {
    router.push(
      userRole === "therapist" ? "/therapist/profile" : "/user/profile"
    );
    setIsPopoverOpen(false);
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
              href={
                userRole === "therapist"
                  ? "/therapist/notifications"
                  : "/user/notifications"
              }
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
            <div className={classes.profileContainer} ref={popoverRef}>
              <div
                className={classes.profileImage}
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              >
                <Image
                  src={user?.photo ?? "/app-images/default-user.png"}
                  fill
                  priority
                  alt="Profile"
                />
              </div>

              {isPopoverOpen && (
                <div className={classes.popover}>
                  <button
                    className={classes.popoverItem}
                    onClick={handleProfileClick}
                  >
                    <PiUserCircleFill className={classes.icon} />
                    Profile
                  </button>
                  <button
                    className={classes.popoverItem}
                    onClick={handleLogout}
                  >
                    <TbLogout2 className={classes.icon} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
