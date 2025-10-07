"use client";
import classes from "./AboutUsTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
// import { aboutUsPageData } from "@/developmentContext/aboutUsPage";
import { useState } from "react";

export default function AboutUsTemplate() {
    // const [data, setData] = useState(aboutUsPageData);

  return (
    <div className={classes.wrapper}>
      <Container>
        <Row>
          <Col lg={12}>
           <h1>About Us</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}