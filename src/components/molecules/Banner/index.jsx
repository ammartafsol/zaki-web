import React from "react";
import classes from "./Banner.module.css";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function Banner({ title, path }) {
  const router = useRouter();
  return (
    <div className={classes.banner}>
      <h1 className={clsx(classes.bannerTitle, "fs44 fw-500")}>{title}</h1>
      <div className={classes.bannerContent}>
        <p className={clsx(classes.bannerPath, "fs16 fw-400")}>
          <span
            onClick={() => router.push("/")}
            className={classes.bannerPathLink}
          >
            Home{" "}
          </span>{" "}
          / {path}
        </p>
      </div>
    </div>
  );
}
