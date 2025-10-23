"use client";
import classes from "./AboutUsTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { aboutUsPageData } from "@/developmentContext/webiste/aboutPage";
import { useState } from "react";
import Banner from "@/components/molecules/Banner";
import FaqSection from "@/components/molecules/FaqSection";
import JourneySection from "@/components/molecules/JourneySection";
import ExpertTherapists from "@/components/molecules/ExpertTherapists";
import HeadingSection from "@/components/molecules/HeadingSection";
import TrustedProfessionalsSection from "@/components/molecules/TrustedProfessionalsSection";
import WelcomeSection from "@/components/molecules/WelcomeSection";
import ReviewsCards from "@/components/molecules/ReviewsCards";

export default function AboutUsTemplate() {
  const [data, setData] = useState(aboutUsPageData);

  return (
    <main>
      <div className={classes.wrapper}>
        <Container>
          <Row>
            <Col lg={12}>
              <Banner title="About Us" path="About" />
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
              <Col lg={12}>
                <TrustedProfessionalsSection
                  data={data?.sectionOne}
                  statsClass={classes.statsClass}
                  statsDetailClass={classes.statsDetailClass}
                />
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {data?.sectionTwo && (
        <div className={clsx(classes.sectionTwo)}>
          <Container>
            <Row className="gy-5">
              <Col lg={12}>
                <HeadingSection
                  title={data?.sectionTwo?.title}
                  description={data?.sectionTwo?.description}
                  text={data?.sectionTwo?.text}
                />
              </Col>
              <Col lg={12}>
                <Row className="gy-5">
                  {data?.sectionTwo?.therapists?.map((item, index) => (
                    <Col lg={3} md={6} sm={12} key={index}>
                      <ExpertTherapists data={item} />
                    </Col>
                  ))}
                </Row>
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
                <FaqSection data={data?.sectionFour} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {data?.sectionFive && (
        <div className={clsx(classes.sectionFive)}>
          <Container>
            <Row>
              <Col lg={12}>
                <JourneySection data={data?.sectionFive} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </main>
  );
}
