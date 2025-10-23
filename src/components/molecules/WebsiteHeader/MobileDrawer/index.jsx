import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import Drawer from "react-modern-drawer";
import classes from "./MobileDrawer.module.css";
import Button from "@/components/atoms/Button";
import { webNavData } from "@/developmentContext/appData";

export default function MobileDrawer() {
    const [isOpen, setIsOpen] = React.useState(false);
    const router = useRouter();
    const pathName = usePathname();

    // const accessToken = "true";

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={classes.mainDiv}>
            <div className={classes.header}>
                <Container fluid>
                    <Row>
                        <Col xs={8}>
                            <div className={classes.logoDiv} onClick={() => router.push("/")}>
                                <Image src={"/app-images/logo.png"} alt="logo" fill />
                            </div>
                        </Col>
                        <Col xs={4} className={classes.barsIcon}>
                            <div onClick={toggleDrawer}>
                                <HiOutlineBars3BottomLeft
                                    size={40}
                                    color="var(--yellow)"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction="right"
                    className={classes.drawer}
                >
                    <div className={classes.MobileDrawer}>
                        <div className={classes.top}>
                            <div className={classes.headerDiv}>
                                <div
                                    className={clsx(classes.logoDiv, classes.drawerLogoDiv)}
                                    onClick={() => router.push("/")}
                                >
                                    <Image src={"/app-images/logo-icon.png"} alt="logo" fill />
                                </div>
                            </div>

                            <div className={classes.navigationDiv}>
                                {webNavData.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item?.path}
                                        className={clsx(classes.navLink, item?.path === pathName ? classes.active : "")}
                                    >
                                        {item?.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className={classes.bottomSection}>

                            <div className={classes.buttonSection}>
                                <Button
                                    variant="primary"
                                    label="Contact us"
                                    onClick={() => router.push("/contact-us")}
                                />
                            </div>

                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    );
}
