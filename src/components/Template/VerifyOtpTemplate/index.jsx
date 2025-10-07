"use client";

import { verifyOtpValues } from "@/formik/initialValues";
import { VerifyOtpSchema } from "@/formik/schema";
import { useFormik } from "formik";
import React, { useState } from "react";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import classes from "../LoginTemplate/LoginTemplate.module.css";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function VerifyOtpTemplate() {
  const [loading, setLoading] = useState("");

  const form = useFormik({
    initialValues: verifyOtpValues,
    validationSchema: VerifyOtpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
                  <h1 className={classes.title}>Verify code</h1>
                  <p className={classes.subtitle}>
                    Enter the code we sent to your email
                  </p>
                </div>
              </div>

              <div className={classes.form}>
                <Input
                  label="One-time code"
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={form.values.otp}
                  setValue={(val) => form.setFieldValue("otp", val)}
                  onBlur={form.handleBlur}
                  error={form.touched.otp && form.errors.otp}
                  onEnterClick={() => {
                    form.handleSubmit();
                  }}
                />

                <Button
                  type="submit"
                  variant="secondary"
                  className={classes.submitBtn}
                  buttonStyles={{ height: 44 }}
                  label="Verify"
                  onClick={() => {
                    form.handleSubmit();
                  }}
                  disabled={loading === "submit-form"}
                  loading={loading === "submit-form"}
                />

                <div className={classes.footerNote}>
                  <span>Didn’t receive it?</span>
                  <Link href="/forgot-password" className={classes.signUpLink}>
                    Resend code
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
