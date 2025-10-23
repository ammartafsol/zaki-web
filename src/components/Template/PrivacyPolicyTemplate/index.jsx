"use client";
import classes from "./PrivacyPolicyTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Banner from "@/components/molecules/Banner";
import { useState } from "react";
import Parse from "html-react-parser";
import { privacyPolicyPageData } from "@/developmentContext/webiste/privacyPolicyPage";

export default function PrivacyPolicyTemplate() {
    const [data, setData] = useState(privacyPolicyPageData);
    return (
        <main>
            <div className={classes.wrapper}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Banner title={data?.title} path={data?.title} />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={classes.content}>
                            {data?.htmlDescription && Parse(data?.htmlDescription)}
                        </div>
                    </Col>
                </Row>
            </Container>

        </main>
    );
}