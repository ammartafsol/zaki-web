import { emailRegex } from "@/resources/utils/regex";
import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test(
      "no-special-chars",
      "Email contains invalid characters",
      (value) => !value || emailRegex.test(value)
    ),
  password: Yup.string().required("Password is required"),
});

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test(
      "no-special-chars",
      "Email contains invalid characters",
      (value) => !value || emailRegex.test(value)
    ),
});

export const VerifyOtpSchema = Yup.object({
  code: Yup.string()
    .required("OTP is required")
    .matches(/^\d{4,6}$/, "Enter a valid 4-6 digit code"),
});

export const ResetPasswordSchema = Yup.object({
  password: Yup.string()
    .min(6, "At least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

export const ContactFormSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test(
      "no-special-chars",
      "Email contains invalid characters",
      (value) => !value || emailRegex.test(value)
    ),
  message: Yup.string().required("Message is required"),
});

export const ProfileFormSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test(
      "no-special-chars",
      "Email contains invalid characters",
      (value) => !value || emailRegex.test(value)
    ),
  phoneNumber: Yup.string().required("Phone number is required"),
  callingCode: Yup.string(),
  location: Yup.string().required("Location is required"),
  language: Yup.object().required("Language is required"),
  photo: Yup.mixed().required("Photo is required"),
});

export const ChangePasswordFormSchema = Yup.object({
  currentPassword: Yup.string().required("Current password is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().required("Confirm password is required"),
});
