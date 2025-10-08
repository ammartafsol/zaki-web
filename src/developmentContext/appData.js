import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

export const webNavData = [
  {
    title: "About",
    path: "/about-us",
  },
  {
    title: "Why Improself?",
    path: "/why-improself",
  },
  {
    title: "Our Practitioners",
    path: "/our-practitioners",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
];

export const FOOTER_DATA = {
  logo: "/svgs/footer-logo.svg",
  links: [
    {
      title: "About",
      path: "/about-us",
    },
    {
      title: "Why Improself?",
      path: "/why-improself",
    },
    {
      title: "Our Practitioners",
      path: "/our-practitioners",
    },
    {
      title: "FAQ",
      path: "/faq",
    },
  ],
  socialLinks: [
    {
      title: "X",
      path: "#",
      icon: <TbBrandTwitterFilled />,
    },
    {
      title: "LinkedIn",
      path: "#",
      icon: <FaLinkedinIn />,
    },
    {
      title: "Instagram",
      path: "#",
      icon: <PiInstagramLogoFill />,
    },
  ],
  legalLinks: [
    {
      title: "Terms of Use",
      path: "/terms-of-use",
    },
    {
      title: "Privacy Policy",
      path: "/privacy-policy",
    },
  ],
};

export const pagesWithHeader = [
  "/about-us",
  "/why-improself",
  "/our-practitioners",
  "/faq",
  "/",
];

export const nav_data = [
  { title: "Dashboard", path: "/user/dashboard", icon: "/svgs/dashboard.svg" },
  {
    title: "Therapists",
    path: "/user/therapists",
    icon: "/svgs/therapists.svg",
  },
  {
    title: "Appointments",
    path: "/user/appointments",
    icon: "/svgs/appointments.svg",
  },
  { title: "Chat", path: "/user/chat", icon: "/svgs/chat.svg" },
  { title: "Wallet", path: "/user/wallet", icon: "/svgs/wallet.svg" },
];
