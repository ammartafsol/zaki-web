"use client";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import React from "react";
import classes from "./TitleHeader.module.css";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function TitleHeader({ title }) {
  const router = useRouter();
  return (
    <div className={classes.titleHeader}>
      <Button
        className={classes.routeDiv}
        onClick={() => router.back()}
        variant="secondary"
        leftIcon={
          <div className={classes.routeDivIcon}>
            <Image src="/svgs/left-arrow.svg" alt="left-arrow" fill priority />
          </div>
        }
      />
      <p className={clsx(classes.title, "fs24 fw-600")}>{title}</p>
    </div>
  );
}
