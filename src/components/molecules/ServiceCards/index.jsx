import React from "react";
import classes from "./ServiceCards.module.css";
import clsx from "clsx";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";
import Button from "@/components/atoms/Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ServiceCards({ data }) {
  return (
    <div className={classes.serviceCards}>
      <div className={classes.content}>
        <h3 className={clsx(classes.title, "fs24 fw-500")}>{data?.title}</h3>
        <p className={clsx(classes.description, "fs16 fw-400")}>
          {data?.description}
        </p>
      </div>
      <div className={classes.image}>
        <Image src={imageUrl(data?.image) || data?.image} alt="icon" fill />
      </div>
      <Button
        label="Read More"
        variant="transparent"
        className={classes.button}
        rightIcon={<FaArrowRightLong size={20} /> }
      />
    </div>
  );
}
