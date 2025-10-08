"use client";
import classes from "./OurPractitionersTemplate.module.css";
import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";
import { ourPractitionersPageData } from "@/developmentContext/webiste/ourPractitioners";
import { useState } from "react";
import Banner from "@/components/molecules/Banner";
import HeadingSection from "@/components/molecules/HeadingSection";
import ExpertTherapists from "@/components/molecules/ExpertTherapists";
import WelcomeSection from "@/components/molecules/WelcomeSection";
import TrustedProfessionalsSection from "@/components/molecules/TrustedProfessionalsSection";
import ContactForm from "@/components/molecules/ContactForm";
import Image from "next/image";
import { useFormik } from "formik";
import { contactFormValues } from "@/formik/initialValues";
import { ContactFormSchema } from "@/formik/schema";

export default function OurPractitionersTemplate() {
  const [data, setData] = useState(ourPractitionersPageData);

  const contactForm = useFormik({
    initialValues: contactFormValues,
    validationSchema: ContactFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main>
      <div className={classes.wrapper}>
        <Container>
          <Row>
            <Col lg={12}>
              <Banner title="Our Practitioners" path="Our Practitioners" />
            </Col>
          </Row>
        </Container>
      </div>
      {data?.sectionOne && (
        <div className={clsx(classes.sectionOne)}>
          <Container>
            <Row className="gy-5">
              <Col lg={12}>
                <WelcomeSection
                  data={data?.sectionOne}
                  imageClass={classes.sectionOneImage}
                />
                <p
                  className={clsx(classes.sectionOneDescription, "fs16 fw-400")}
                >
                  {data?.sectionOne?.description}
                </p>
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
                  {data?.sectionTwo?.arr?.map((item, index) => (
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
        <Container>
          <div className={clsx(classes.sectionThree)}>
            <Row>
              <Col lg={6}>
                <div className={classes.sectionThreeContent}>
                  <div className={classes.imagesSection}>
                    {data?.sectionThree?.arr.slice(0, 8).map((item, index) => (
                      <div key={index} className={classes.sectionThreeImage}>
                        {item?.photo && (
                          <Image
                            src={item?.photo}
                            alt={`Profile ${index + 1}`}
                            fill
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <h2 className={clsx(classes.title, "fs42 fw-500")}>
                    {data?.sectionThree?.title}
                  </h2>
                  <p className={clsx(classes.description, "fs20 fw-400")}>
                    {data?.sectionThree?.description}
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <ContactForm form={contactForm} />
              </Col>
            </Row>
          </div>
        </Container>
      )}
    </main>
  );
}
