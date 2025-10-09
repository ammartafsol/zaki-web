"use client";

import { loginFormValues } from "@/formik/initialValues";
import { LoginSchema } from "@/formik/schema";
import { useFormik } from "formik";
import React, { useState } from "react";
import Input from "@/components/atoms/Input/Input";
import Button from "@/components/atoms/Button";
import classes from "./LoginTemplate.module.css";
import Link from "next/link";
import { FiLock, FiMail } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setTokenCookie } from "@/resources/utils/cookie";
import RenderToast from "@/components/atoms/RenderToast";
import { handleDecrypt, handleEncrypt } from "@/interceptor/encryption";
import {
  TOKEN_COOKIE_NAME,
  USER_ROLE_COOKIE_NAME,
} from "@/resources/utils/cookie";
import Cookies from "js-cookie";

export default function LoginTemplate() {
  const router = useRouter();
  const [loading, setLoading] = useState("");

  const loginForm = useFormik({
    initialValues: loginFormValues,
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const users = [
    {
      email: "therapist@yopmail.com",
      password: "12345678",
      role: "therapist",
      accessToken: "12345678",
    },
    {
      email: "user@yopmail.com",
      password: "12345678",
      role: "user",
      accessToken: "12345678",
    },
  ];

  const handleSubmit = async (values) => {
    setLoading("submit-form");
    console.log(values);

    // Find the matching user in the array
    const foundUser = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (foundUser) {
      if (foundUser.role === "therapist") {
        router.push("/therapist/dashboard");
      } else {
        router.push("/user/dashboard");
      }
      Cookies.set(TOKEN_COOKIE_NAME, handleEncrypt(foundUser.accessToken), {
        expires: 90,
      });
      Cookies.set(USER_ROLE_COOKIE_NAME, handleEncrypt(foundUser.role), {
        expires: 90,
      });
      // setTokenCookie(foundUser.accessToken);
      // setUserMetadataCookie(foundUser);

      // saveLoginUserData(foundUser);
      RenderToast({
        message: "Login successful",
        type: "success",
      });
    }
    setLoading("");
  };

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
                  <h1 className={classes.title}>Welcome back</h1>
                  <p className={classes.subtitle}>Please sign in to continue</p>
                </div>
              </div>

              <div className={classes.form}>
                <Input
                  label="Email"
                  type="email"
                  leftIcon={<FiMail size={18} />}
                  placeholder="you@example.com"
                  value={loginForm.values.email}
                  setValue={(val) => loginForm.setFieldValue("email", val)}
                  onBlur={loginForm.handleBlur}
                  error={loginForm.touched.email && loginForm.errors.email}
                  onEnterClick={() => {
                    loginForm.handleSubmit();
                  }}
                />

                <Input
                  leftIcon={<FiLock size={18} />}
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  value={loginForm.values.password}
                  setValue={(val) => loginForm.setFieldValue("password", val)}
                  onBlur={loginForm.handleBlur}
                  error={
                    loginForm.touched.password && loginForm.errors.password
                  }
                  onEnterClick={() => {
                    loginForm.handleSubmit();
                  }}
                />

                <Link href="/forgot-password" className={classes.forgotLink}>
                  Forgot password?
                </Link>

                <Button
                  type="submit"
                  variant="secondary"
                  className={classes.submitBtn}
                  label="Sign in"
                  onClick={() => {
                    loginForm.handleSubmit();
                  }}
                  disabled={loading === "submit-form"}
                  loading={loading === "submit-form"}
                />
              </div>

              <div className={classes.footerNote}>
                <span>Don&apos;t have an account?</span>
                <Link href="/sign-up" className={classes.signUpLink}>
                  Sign up
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
