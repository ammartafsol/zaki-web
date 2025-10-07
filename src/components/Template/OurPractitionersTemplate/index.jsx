"use client";
import classes from "./OurPractitionersTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
// import { aboutUsPageData } from "@/developmentContext/aboutUsPage";
import { useState } from "react";
import Banner from "@/components/molecules/Banner";

export default function OurPractitionersTemplate() {
    // const [data, setData] = useState(aboutUsPageData);

  return (
    <div className={classes.wrapper}>
      <Container>
        <Row>
          <Col lg={12}>
           <Banner title="Our Practitioners" path="Our Practitioners" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}