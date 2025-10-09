import TitleHeader from "@/components/molecules/TitleHeader";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CalendarTemplate() {
  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="p-0">
          <TitleHeader title="Calendar" />
        </Col>
      </Row>
    </Container>
  );
}
