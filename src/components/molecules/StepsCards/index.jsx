import React from "react";
import classes from "./StepsCards.module.css";
import clsx from "clsx";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";

export default function StepsCards({ data  , index}) {
  return (
    <div className={classes.stepsCards}>
      <div className={classes.stepsCardsHeader}>
        <div className={classes.stepsCardsIcon}>
          <Image src={imageUrl(data?.icon) || data?.icon} alt="icon" fill />
        </div>
        <span className={classes.stepsCardsIndex}>{index + 1}</span>
      </div>

      <div className={classes.stepsCardsContent}>
        <h3 className={clsx(classes.title, "fs24 fw-500")}>{data?.title}</h3>
        <p className={clsx(classes.description, "fs16 fw-400")}>
          {data?.description}
        </p>
      </div>
    </div>
  );
}
