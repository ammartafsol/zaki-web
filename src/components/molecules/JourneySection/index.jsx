import React from "react";
import classes from "./JourneySection.module.css";
import clsx from "clsx";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";
import Button from "@/components/atoms/Button";
import { HiArrowRightCircle } from "react-icons/hi2";

export default function JourneySection({ data }) {
  return (
    <div className={classes.journeySection}>
      <div className={classes.left}>
        <p className={clsx(classes.text, "fs14 fw-600")}>{data?.text}</p>
        <h2 className={clsx(classes.title, "fs44 fw-500")}>{data?.title}</h2>
        <p className={clsx(classes.description, "fs18 fw-400")}>
          {data?.description}
        </p>
        <div className={classes.buttonsDiv}>
            <Button label="Finde Therapeuten" variant="primary" leftIcon={<HiArrowRightCircle size={20} />} />
            <Button label="Treten Sie als Therapeut bei" variant="primary-outlined" />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightImage}>
          <Image src={imageUrl(data?.image) || data?.image} fill alt="journey" />
        </div>
      </div>
    </div>
  );
}
