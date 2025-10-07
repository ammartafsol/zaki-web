"use client";
import classes from "./WhyImproselfTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
// import { aboutUsPageData } from "@/developmentContext/aboutUsPage";
import { useState } from "react";
import Banner from "@/components/molecules/Banner";


export default function WhyImproselfTemplate() {
    // const [data, setData] = useState(aboutUsPageData);

  return (
    <div className={classes.wrapper}>
      <Container>
        <Row>
          <Col lg={12}>
           <Banner title="Why Improself" path="Why Improself?" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}