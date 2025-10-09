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
import { getUserRoleCookie } from "@/resources/utils/cookie";
import MuiltFileUpload from "@/components/molecules/MultiFileUpload";
import classes from "./ProfileTemplate.module.css";
import clsx from "clsx";
import { userData } from "@/developmentContext/appData";
import Button from "@/components/atoms/Button";
import SuggestCategoryModal from "@/components/organisms/Modals/SuggestCategoryModal";
import { HiPlus } from "react-icons/hi";
import Image from "next/image";

export default function ProfileTemplate() {
  //   const { user } = useSelector((state) => state.authReducer);
  const [loading, setLoading] = useState("");

  const userRole = getUserRoleCookie();

  const [showModal, setShowModal] = useState("");
  const profileFormik = useFormik({
    initialValues: profileFormValues,
    validationSchema: ProfileFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container fluid>
      <Row className="gy-3">
        <Col md={12}>
          <TitleHeader title="Profile Setting" />
        </Col>
        <Col md={12}>
          <BoxWrapper>
            <ContactForm form={profileFormik} setShowModal={setShowModal} />
          </BoxWrapper>
        </Col>

        {userRole === "therapist" && (
          <>
            <Col md={12}>
              <BoxWrapper>
                <p className={clsx(classes.title, "fs18 fw-600")}>Categories</p>
                <div className={classes.categories}>
                  {userData.categories.map((category) => (
                    <p className={clsx(classes.category, "fs16 fw-600")}>
                      {category}
                    </p>
                  ))}
                </div>
                <div
                  className={classes.addCategory}
                  onClick={() => setShowModal("add-category")}
                >
     
                  <p className={clsx(classes.addCategoryText, "fs14 fw-600")}>Suggest category</p>
                  <Image src="/svgs/add.svg" alt="plus" width={24} height={24} />
                </div>
              </BoxWrapper>
            </Col>
            <Col md={12}>
              <BoxWrapper>
                <MuiltFileUpload
                  label="Upload Documents"
                  uploadText="a Document"
                  files={profileFormik.values.documents}
                  setFiles={(value) => {
                    profileFormik.setFieldValue("documents", value);
                  }}
                />
              </BoxWrapper>
            </Col>
          </>
        )}
      </Row>
      {showModal === "add-category" && (
        <SuggestCategoryModal show={showModal} setShow={setShowModal} />
      )}
      {showModal === "update-password" && (
        <UpdatePasswordModal show={showModal} setShow={setShowModal} />
      )}
    </Container>
  );
}
