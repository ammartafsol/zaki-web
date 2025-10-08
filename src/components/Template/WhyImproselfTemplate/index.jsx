"use client";
import classes from "./WhyImproselfTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { whyImproselfPageData } from "@/developmentContext/webiste/whyImproselfPage";
import { useState } from "react";
import Banner from "@/components/molecules/Banner";
import WelcomeSection from "@/components/molecules/WelcomeSection";
import HeadingSection from "@/components/molecules/HeadingSection";
import JourneySection from "@/components/molecules/JourneySection";
import ReviewsCards from "@/components/molecules/ReviewsCards";
import TrustedProfessionalsSection from "@/components/molecules/TrustedProfessionalsSection";
import Image from "next/image";

export default function WhyImproselfTemplate() {
  const [data, setData] = useState(whyImproselfPageData);

  return (
    <main>
      <div className={classes.wrapper}>
        <Container>
          <Row>
            <Col lg={12}>
              <Banner title="Why Improself" path="Why Improself?" />
            </Col>
          </Row>
        </Container>
      </div>

      {data?.sectionOne && (
        <div className={clsx(classes.sectionOne)}>
          <Container>
            <Row className="gy-5">
              <Col lg={12}>
                <WelcomeSection data={data?.sectionOne} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
       {data?.sectionTwo && (
        <div className={clsx(classes.sectionTwo)}>
          <Container>
            <Row>
              <Col lg={6}>
                <TrustedProfessionalsSection data={data?.sectionTwo} />
              </Col>
              <Col lg={6}>
                <div className={classes.sectionTwoImageContainer}>
                  <div className={classes.sectionTwoImage}>
                    <Image src={data?.sectionTwo?.image} alt="image" fill />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}

      {data?.sectionThree && (
        <div className={clsx(classes.sectionThree)}>
          <Container fluid className="px-0">
            <Row className="gy-5">
              <Col lg={12}>
                <HeadingSection
                  title={data?.sectionThree?.title}
                  description={data?.sectionThree?.description}
                  text={data?.sectionThree?.text}
                  titleClass="text-white"
                  descriptionClass="text-white opacity-80"
                  textClass="text-white"
                />
              </Col>
              <Col lg={12}>
                <ReviewsCards data={data?.sectionThree?.reviews} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {data?.sectionFour && (
        <div className={clsx(classes.sectionFour)}>
          <Container>
            <Row>
              <Col lg={12}>
                <JourneySection data={data?.sectionFour} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </main>
  );
}
