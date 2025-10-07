import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AfterLoginHeader from "../AfterLoginHeader";
import classes from "./DashboardLayout.module.css";

export default function DashboardLayout({ children }) {
  return (
    <div className={classes.dashboardLayout}>
      <Container className={"dashboardContainer"}>
        <Row className={classes.dashboardRow}>
          <Col md={12}>
            <AfterLoginHeader />
          </Col>
          <Col md={12}>{children}</Col>
        </Row>
      </Container>
    </div>
  );
}
