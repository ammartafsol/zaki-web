"use client";

import React, { useState } from "react";
import TitleHeader from "@/components/molecules/TitleHeader";
import { profileFormValues } from "@/formik/initialValues";
import { ProfileFormSchema } from "@/formik/schema";
import { useFormik } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import BoxWrapper from "@/components/molecules/BoxWrapper";
import ContactForm from "@/components/organisms/ContactForm";
import { useSelector } from "react-redux";
import UpdatePasswordModal from "@/components/organisms/Modals/UpdatePasswordModal";

export default function ProfileTemplate() {
  //   const { user } = useSelector((state) => state.authReducer);
  const [loading, setLoading] = useState("");

  const [showModal, setShowModal] = useState(false);
  const profileFormik = useFormik({
    initialValues: profileFormValues,
    validationSchema: ProfileFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <TitleHeader title="Profile Setting" />
        </Col>
        <Col md={12}>
          <BoxWrapper>
            <ContactForm form={profileFormik} setShowModal={setShowModal} />
          </BoxWrapper>
        </Col>
      </Row>
      {showModal && (
        <UpdatePasswordModal show={showModal} setShow={setShowModal} />
      )}
    </Container>
  );
}
