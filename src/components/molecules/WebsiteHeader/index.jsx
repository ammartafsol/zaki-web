"use client";
import React from "react";
import Header from "@/components/molecules/Header/Header";
import { pagesWithHeader } from "@/developmentContext/appData";
import { usePathname } from "next/navigation";

export default function WebsiteHeader() {
  const pathname = usePathname();

  if (pagesWithHeader.includes(pathname)) {
    return <Header />;
  }
}
