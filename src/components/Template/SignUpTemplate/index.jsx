"use client";

import { signUpFormValues } from "@/formik/initialValues";
import { SignUpSchema } from "@/formik/schema";
import { useFormik } from "formik";
import React, { useState } from "react";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import classes from "./SignUpTemplate.module.css";
import Link from "next/link";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import CustomPhoneInput from "@/components/atoms/PhoneInput/PhoneInput";

export default function SignUpTemplate() {
  const [loading, setLoading] = useState("");

  const signUpForm = useFormik({
    initialValues: signUpFormValues,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(signUpForm.values);
  console.log(signUpForm.errors);

  return (
    <div className={classes.wrapper}>
      <Container>
        <Row className={classes.rowCenter}>
          <Col xs={12} md={8} lg={5} xl={4}>
            <div className={classes.card}>
              <div className={classes.header}>
                <div className={classes.logo}>
                  <Image src="/svgs/logo.svg" alt="Logo" fill priority />
                </div>
                <div className={classes.titleContainer}>
                  <h1 className={classes.title}>Welcome to Improself</h1>
                  <p className={classes.subtitle}>Please sign up to continue</p>
                </div>
              </div>

              <div className={classes.form}>
                <Input
                  label="Full Name"
                  type="text"
                  leftIcon={<FiUser size={18} />}
                  placeholder="Full Name"
                  value={signUpForm.values.fullName}
                  setValue={(val) => signUpForm.setFieldValue("fullName", val)}
                  onBlur={signUpForm.handleBlur}
                  error={
                    signUpForm.touched.fullName && signUpForm.errors.fullName
                  }
                  onEnterClick={() => {
                    signUpForm.handleSubmit();
                  }}
                />
                <Input
                  label="Email"
                  type="email"
                  leftIcon={<FiMail size={18} />}
                  placeholder="you@example.com"
                  value={signUpForm.values.email}
                  setValue={(val) => signUpForm.setFieldValue("email", val)}
                  onBlur={signUpForm.handleBlur}
                  error={signUpForm.touched.email && signUpForm.errors.email}
                  onEnterClick={() => {
                    signUpForm.handleSubmit();
                  }}
                />

                <Input
                  leftIcon={<FiLock size={18} />}
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={signUpForm.values.password}
                  setValue={(val) => signUpForm.setFieldValue("password", val)}
                  onBlur={signUpForm.handleBlur}
                  error={
                    signUpForm.touched.password && signUpForm.errors.password
                  }
                  onEnterClick={() => {
                    signUpForm.handleSubmit();
                  }}
                />
                <Input
                  leftIcon={<FiLock size={18} />}
                  label="Confirm Password"
                  type="password"
                  placeholder="Enter your confirm password"
                  value={signUpForm.values.confirmPassword}
                  setValue={(val) =>
                    signUpForm.setFieldValue("confirmPassword", val)
                  }
                  onBlur={signUpForm.handleBlur}
                  error={
                    signUpForm.touched.confirmPassword &&
                    signUpForm.errors.confirmPassword
                  }
                  onEnterClick={() => {
                    signUpForm.handleSubmit();
                  }}
                />
                <CustomPhoneInput
                  label={"Phone Number"}
                  setValue={(values) => {
                    signUpForm.setFieldValue(
                      "callingCode",
                      values?.callingCode
                    );
                    signUpForm.setFieldValue(
                      "phoneNumber",
                      values?.phoneNumber
                    );
                  }}
                  value={
                    signUpForm.values.phoneNumber == ""
                      ? ""
                      : `${signUpForm.values.callingCode}${signUpForm.values.phoneNumber}`
                  }
                  errorText={
                    signUpForm.touched.phoneNumber &&
                    signUpForm.errors.phoneNumber
                  }
                  containerClass={classes.phoneInputContainerStaff}
                  inputClass={classes.inputClass}
                />

                <Button
                  type="submit"
                  variant="secondary"
                  className={classes.submitBtn}
                  label="Sign Up"
                  onClick={() => {
                    signUpForm.handleSubmit();
                  }}
                  disabled={loading === "submit-form"}
                  loading={loading === "submit-form"}
                />
              </div>

              <div className={classes.footerNote}>
                <span>Already have an account?</span>
                <Link href="/login" className={classes.signUpLink}>
                  Sign in
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
