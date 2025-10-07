"use client";
import React from "react";
import classes from "./AfterLoginHeader.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";

export default function AfterLoginHeader() {
  return (
    <Container fluid>
      <Row className="p-0">
        <Col md={3} className="p-0">
          <div className={classes.logo}>
            <Image src="/svgs/logo.svg" alt="Logo" fill priority />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
