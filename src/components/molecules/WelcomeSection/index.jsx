import React from "react";
import classes from "./WelcomeSection.module.css";
import clsx from "clsx";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";
import Parse from "html-react-parser";

export default function WelcomeSection({ data , imageClass }) {
  return (
    <div className={classes.welcomeSection}>
      {data?.title && data?.description && (
        <div className={classes.welcomeSectionContent}>
          <h2 className={clsx(classes.title, "fs56 fw-600")}>{data?.title}</h2>
          <p className={clsx(classes.description, "fs18 fw-400")}>
            {data?.description}
          </p>
        </div>
      )}
      <div className={clsx(classes.welcomeSectionImage, imageClass)}>
        <div className={clsx(classes.welcomeSectionImageContent,)}>
          <Image src={imageUrl(data?.image) || data?.image} alt="image" fill />
        </div>
      </div>
      {data?.mission && data?.vision && (
        <div className={classes.missionVisionSection}>
          {data?.mission && (
            <div className={classes.missionSection}>
              <h2 className={clsx(classes.sectionTitle, "fs44 fw-500")}>
                {data?.mission?.title}
              </h2>
              <div className={clsx(classes.sectionDescription, "fs18 fw-400")}>
                {Parse(data?.mission?.htmlDescription)}
              </div>
            </div>
          )}
          {data?.vision && (
            <div className={classes.visionSection}>
              <h2 className={clsx(classes.sectionTitle, "fs44 fw-500")}>
                {data?.vision?.title}
              </h2>
              <div className={clsx(classes.sectionDescription, "fs18 fw-400")}>
                {Parse(data?.vision?.htmlDescription)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
