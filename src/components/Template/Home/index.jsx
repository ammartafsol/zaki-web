"use client";
import Link from "next/link";
import classes from "./HomeTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { homePageData } from "@/developmentContext/homePage";
import clsx from "clsx";
import { useState } from "react";
import HeroSection from "@/components/molecules/HeroSection";
import { imageUrl } from "@/resources/utils/helper";
import Button from "@/components/atoms/Button";

export default function HomeTemplate() {
  const [data, setData] = useState(homePageData);

  return (
    <main>
      {data?.hero && (
        <div
          className={clsx(classes.heroSection)}
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) -31.56%, rgba(0, 0, 0, 0.00) 80.62%), url(${imageUrl(
              data?.hero?.image) || data?.hero?.image } ) lightgray -80px -25px / 111.111% 128.571% no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <HeroSection data={data?.hero} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </main>
  );
}
