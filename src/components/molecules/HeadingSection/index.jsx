import React from "react";
import classes from "./HeadingSection.module.css";
import clsx from "clsx";

export default function HeadingSection({ title, description, text,  titleClass, descriptionClass, textClass }) {
  return (
    <div className={classes.headingSection}>
      <p className={clsx(classes.text, "fs14 fw-600", textClass)}>{text}</p>
      <h1 className={clsx(classes.title, "fs44 fw-500", titleClass)}>{title}</h1>
      <p className={clsx(classes.description, "fs18 fw-400", descriptionClass)}>{description}</p>
    </div>
  );
}
