"use client";

import { resetPasswordValues } from "@/formik/initialValues";
import { ResetPasswordSchema } from "@/formik/schema";
import { useFormik } from "formik";
import React, { useState } from "react";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import classes from "../LoginTemplate/LoginTemplate.module.css";
import Link from "next/link";
import { FiLock } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export default function ResetPasswordTemplate() {
  const [loading, setLoading] = useState("");

  const form = useFormik({
    initialValues: resetPasswordValues,
    validationSchema: ResetPasswordSchema,
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
                  <h1 className={classes.title}>Set new password</h1>
                  <p className={classes.subtitle}>
                    Choose a strong password you remember
                  </p>
                </div>
              </div>

              <div className={classes.form}>
                <Input
                  leftIcon={<FiLock size={18} />}
                  label="New password"
                  type="password"
                  placeholder="Enter new password"
                  value={form.values.password}
                  setValue={(val) => form.setFieldValue("password", val)}
                  onBlur={form.handleBlur}
                  error={form.touched.password && form.errors.password}
                  onEnterClick={() => {
                    form.handleSubmit();
                  }}
                />

                <Input
                  leftIcon={<FiLock size={18} />}
                  label="Confirm password"
                  type="password"
                  placeholder="Re-enter new password"
                  value={form.values.confirmPassword}
                  setValue={(val) => form.setFieldValue("confirmPassword", val)}
                  onBlur={form.handleBlur}
                  error={
                    form.touched.confirmPassword && form.errors.confirmPassword
                  }
                  onEnterClick={() => {
                    form.handleSubmit();
                  }}
                />

                <Button
                  type="submit"
                  variant="secondary"
                  className={classes.submitBtn}
                  buttonStyles={{ height: 44 }}
                  label="Update password"
                  onClick={() => {
                    form.handleSubmit();
                  }}
                  disabled={loading === "submit-form"}
                  loading={loading === "submit-form"}
                />

                <div className={classes.footerNote}>
                  <span>Changed your mind?</span>
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
