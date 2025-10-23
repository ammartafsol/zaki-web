"use client";
import classes from "./TermsandConditionTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import Banner from "@/components/molecules/Banner";
import { useState } from "react";
import Parse from "html-react-parser";
import { termsAndConditionPageData } from "@/developmentContext/webiste/termsAndConditionPage";
export default function TermsandConditionTemplate() {
    const [data, setData] = useState(termsAndConditionPageData);
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