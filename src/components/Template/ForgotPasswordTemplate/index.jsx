"use client";

import { forgotPasswordValues } from "@/formik/initialValues";
import { ForgotPasswordSchema } from "@/formik/schema";
import { useFormik } from "formik";
import React, { useState } from "react";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import classes from "../LoginTemplate/LoginTemplate.module.css";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function ForgotPasswordTemplate() {
  const [loading, setLoading] = useState("");

  const form = useFormik({
    initialValues: forgotPasswordValues,
    validationSchema: ForgotPasswordSchema,
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
                  <h1 className={classes.title}>Forgot password</h1>
                  <p className={classes.subtitle}>
                    We will send a code to your email
                  </p>
                </div>
              </div>

              <div className={classes.form}>
                <Input
                  label="Email"
                  type="email"
                  leftIcon={<FiMail size={18} />}
                  placeholder="you@example.com"
                  value={form.values.email}
                  setValue={(val) => form.setFieldValue("email", val)}
                  onBlur={form.handleBlur}
                  error={form.touched.email && form.errors.email}
                  onEnterClick={() => {
                    form.handleSubmit();
                  }}
                />

                <Button
                  type="submit"
                  variant="secondary"
                  className={classes.submitBtn}
                  label="Send code"
                  onClick={() => {
                    form.handleSubmit();
                  }}
                  disabled={loading === "submit-form"}
                  loading={loading === "submit-form"}
                />

                <div className={classes.footerNote}>
                  <span>Remembered it?</span>
                  <Link href="/login" className={classes.signUpLink}>
                    Go back to login
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
