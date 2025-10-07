"use client";
import classes from "./FaqTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
// import { aboutUsPageData } from "@/developmentContext/aboutUsPage";
import { useState } from "react";
import Banner from "@/components/molecules/Banner";

export default function FaqTemplate() {
    // const [data, setData] = useState(aboutUsPageData);

  return (
    <div className={classes.wrapper}>
      <Container>
        <Row>
          <Col lg={12}>
           <Banner title="FAQ" path="FAQ" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}