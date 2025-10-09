import React from "react";
import classes from "./BlogsCards.module.css";
import Image from "next/image";
import { imageUrl } from "@/resources/utils/helper";
import moment from "moment";
import clsx from "clsx";
import Button from "@/components/atoms/Button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BlogsCards({ data }) {
  return (
    <div className={classes.blogsCards}>
      <div className={classes.blogsCardsImage}>
        <Image
          src={imageUrl(data?.image) || data?.image}
          alt={data.title}
          fill
        />
      </div>
      <p className={clsx(classes.createdAt, "fs16 fw-600")} translate="no">
        {moment(data?.createdAt).format("DD MMM")}
      </p>
      <div className={classes.blogsCardsContent}>
        <p className={clsx(classes.category, "fs14 fw-600")} >
          {data?.category}
        </p>
        <h3 className={clsx(classes.title, "fs24 fw-500 maxLine1")}>
          {data?.title}
        </h3>
        <p className={clsx(classes.description, "fs16 fw-400")}>
          {data?.description}
        </p>
        <div className={classes.blogsCardsFooter}>
          <Button
            label="Read More"
            variant="transparent"
            rightIcon={<FaArrowRightLong size={20} />}
            className={classes.button}
          />
        </div>
      </div>
    </div>
  );
}
