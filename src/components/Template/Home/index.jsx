"use client";
import Link from "next/link";
import classes from "./HomeTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { homePageData } from "@/developmentContext/webiste/homePage";
import clsx from "clsx";
import { useState } from "react";
import HeroSection from "@/components/molecules/HeroSection";
import { imageUrl } from "@/resources/utils/helper";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import TrustedProfessionalsSection from "@/components/molecules/TrustedProfessionalsSection";
import ServiceCards from "@/components/molecules/ServiceCards";
import { HiArrowRightCircle } from "react-icons/hi2";
import StepsCards from "@/components/molecules/StepsCards";
import BlogsCards from "@/components/molecules/BlogsCards";
import HeadingSection from "@/components/molecules/HeadingSection";
import ContactForm from "@/components/molecules/ContactForm";
import { useFormik } from "formik";
import { contactFormValues } from "@/formik/initialValues";
import { ContactFormSchema } from "@/formik/schema";
import FaqSection from "@/components/molecules/FaqSection";
import ReviewsCards from "@/components/molecules/ReviewsCards";


export default function HomeTemplate() {
  const [data, setData] = useState(homePageData);

  const contactForm = useFormik({
    initialValues: contactFormValues,
    validationSchema: ContactFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main>
      {data?.hero && (
        <div
          className={clsx(classes.heroSection)}
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.40) -31.56%, rgba(0, 0, 0, 0.00) 80.62%), url(${
              imageUrl(data?.hero?.image) || data?.hero?.image
            } ) lightgray -80px -25px / 111.111% 128.571% no-repeat`,
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
      {data?.sectionOne && (
        <div className={clsx(classes.sectionOne)}>
          <Container>
            <Row>
              <Col lg={6}>
                <TrustedProfessionalsSection data={data?.sectionOne} />
              </Col>
              <Col lg={6}>
                <div className={classes.sectionOneImageContainer}>
                  <div className={classes.sectionOneImage}>
                    <Image src={data?.sectionOne?.image} alt="image" fill />
                  </div>
                </div>
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
                <div className={classes.sectionTwoTitle}>
                  <div className={classes.sectionTwoTitleContent}>
                    <p className={clsx(classes.text, "fs14 fw-600")}>
                      {data?.sectionTwo?.text}
                    </p>
                    <h2 className={clsx(classes.title, "fs44 fw-500")}>
                      {data?.sectionTwo?.title}
                    </h2>
                    <p className={clsx(classes.description, "fs18 fw-400")}>
                      {data?.sectionTwo?.description}
                    </p>
                  </div>
                  <Button label="Explore Our Services" variant="primary-outlined" />
                </div>
              </Col>

              <Col lg={12}>
                <Row className="gy-4">
                  {data?.sectionTwo?.services?.map((item, index) => (
                    <Col lg={4} key={index}>
                      <ServiceCards data={item} />
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
          <Container>
            <Row>
              <Col lg={6}>
                <div className={classes.sectionThreeContent}>
                  <p className={clsx(classes.text, "fs14 fw-600")}>
                    {data?.sectionThree?.text}
                  </p>
                  <h2 className={clsx(classes.title, "fs44 fw-500")}>
                    {data?.sectionThree?.title}
                  </h2>
                  <p className={clsx(classes.description, "fs18 fw-400")}>
                    {data?.sectionThree?.description}
                  </p>

                  <div className={classes.sectionThreeButtons}>
                    <Button
                      label="Finde Therapeuten"
                      variant="primary"
                      leftIcon={<HiArrowRightCircle size={20} />}
                    />
                    <Button
                      label="Treten Sie als Therapeut bei"
                      variant="primary-outlined"
                    />
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <Row className="gy-4">
                  {data?.sectionThree?.steps?.map((item, index) => (
                    <Col lg={12} key={index}>
                      <StepsCards data={item} index={index} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {data?.sectionFour && (
        <div className={clsx(classes.sectionFour)}>
          <Container fluid className="px-0">
            <Row className="gy-5">
              <Col lg={12}>
                <HeadingSection
                  title={data?.sectionFour?.title}
                  description={data?.sectionFour?.description}
                  text={data?.sectionFour?.text}
                  titleClass="text-white"
                  descriptionClass="text-white opacity-80"
                  textClass="text-white"
                />
              </Col>
              <Col lg={12}>
                <ReviewsCards data={data?.sectionFour?.reviews} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {data?.sectionFive && (
        <div className={clsx(classes.sectionFive)}>
          <Container>
            <Row className="gy-5">
              <Col lg={12}>
                <HeadingSection
                  title={data?.sectionFive?.title}
                  description={data?.sectionFive?.description}
                  text={data?.sectionFive?.text}
                />
              </Col>
              <Col lg={12}>
                <Row className="gy-4">
                  {data?.sectionFive?.blogs?.map((item, index) => (
                    <Col lg={4} key={index}>
                      <BlogsCards data={item} />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      )}
      {data?.sectionSix && (
        <Container>
          <div className={clsx(classes.sectionSix)}>
            <Row>
              <Col lg={6}>
                <div className={classes.sectionSixContent}>
                  <div className={classes.imagesSection}>
                    {data?.sectionSix?.users?.slice(0, 8).map((item, index) => (
                      <div key={index} className={classes.sectionSixImage}>
                        {item.photo && (
                          <Image src={item.photo} alt={`Profile ${index + 1}`} fill />
                        )}
                      </div>
                    ))}
                    </div>
                  <h2 className={clsx(classes.title, "fs42 fw-500")}>{data?.sectionSix?.title}</h2>
                  <p className={clsx(classes.description, "fs20 fw-400")}>{data?.sectionSix?.description}</p>
                </div>
              </Col>
              <Col lg={6}>
                <ContactForm form={contactForm} />
              </Col>
            </Row>
          </div>
        </Container>
      )}
      {data?.sectionSeven && (
        <div className={clsx(classes.sectionSeven)}>
          <Container>
            <Row>
              <Col lg={12}>
            <FaqSection data={data?.sectionSeven} />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </main>
  );
}
