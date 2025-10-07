import React from "react";
import classes from "./HeroSection.module.css";
import Button from "@/components/atoms/Button";
import clsx from "clsx";

export default function HeroSection({ data }) {
  return (
    <div className={classes.heroSection}>
      <div className={classes.heroSectionContent}>
        <h1 className={clsx(classes.title, "fs54 fw-500")}>{data?.title}</h1>
        <p className={clsx(classes.description, "fs16 fw-500")}>
          {data?.description}
        </p>
      </div>
      <div className={classes.heroSectionImage}>
       <Button label="Finde Therapeuten" variant="primary" />
       <Button label="Treten Sie als Therapeut bei" variant="outlined" />
      </div>
    </div>
  );
}
