import React from "react";
import classes from "./ExpertTherapists.module.css";
import clsx from "clsx";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";

export default function ExpertTherapists({ data }) {
  return (
    <div className={classes.expertTherapists}>
      <div className={classes.image}>
        <Image src={imageUrl(data?.photo) || data?.photo} alt="expert" fill />
      </div>
      <div className={classes.content}>
        <h3 className={clsx(classes.title, "fs24 fw-500")}>{data?.fullName}</h3>
        <p className={clsx(classes.specialization, "fs14 fw-400")}>
          {data?.specialization}
        </p>
      </div>
    </div>
  );
}
