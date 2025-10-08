"use client";
import classes from "./FaqTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { faqPageData } from "@/developmentContext/webiste/fagPage";
import { useState } from "react";
import Banner from "@/components/molecules/Banner";
import FaqSection from "@/components/molecules/FaqSection";

export default function FaqTemplate() {
  const [data, setData] = useState(faqPageData);

  return (
    <main>
      <div className={classes.wrapper}>
        <Container>
          <Row>
            <Col lg={12}>
              <Banner title="FAQ" path="FAQ" />
            </Col>
          </Row>
        </Container>
      </div>

      {data?.sectionOne && (
        <div className={clsx(classes.sectionOne)}>
          <Container>
            <Row>
              <Col lg={12}>
                <FaqSection data={data?.sectionOne} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </main>
  );
}
