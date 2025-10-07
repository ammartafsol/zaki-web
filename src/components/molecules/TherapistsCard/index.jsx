"use client";
import React from "react";
import classes from "./TherapistsCard.module.css";
import Image from "next/image";
import { FaClock, FaLocationDot, FaStar } from "react-icons/fa6";
import Button from "@/components/atoms/Button";
import clsx from "clsx";

export default function TherapistsCard({ data = {}, onBook = () => {} }) {
  return (
    <div className={classes.card}>
      <div className={classes.topStrip}>
        <div className={classes.avatar}>
          <Image src={data?.photo} alt={data?.name} fill />
        </div>
        <div className={classes.nameBlock}>
          <div className={classes.nameRow}>
            <div className={classes.name}>{data?.name}</div>
            <div className={classes.rating}>
              <FaStar className={classes.ratingIcon} />{" "}
              <span className={clsx("fs10 fw-500", classes.ratingText)}>
                ({data?.rating})
              </span>
            </div>
          </div>
          <div className={classes.subTitle}>{data?.specialty}</div>
        </div>
      </div>

      {data?.bio && (
        <div className={classes.bio}>
          <p>{data?.bio}</p>
        </div>
      )}

      <div className={classes.bottomRow}>
        <div className={classes.meta}>
          <div className={classes.metaRow}>
            <div className={classes.metaIcon}>
              <Image src={"/svgs/clock.svg"} alt={data?.slot} fill />
            </div>
            <span className={classes.metaLabel}>Slots:</span>
            <span className={clsx(classes.metaValue)}>
              {data?.slot?.startTime} - {data?.slot?.endTime}
            </span>
          </div>
          <div className={classes.metaRow}>
            <div className={classes.metaIcon}>
              <Image src={"/svgs/location.svg"} alt={data?.location} fill />
            </div>
            <span className={classes.metaLabel}>Location:</span>
            <span className={clsx(classes.metaValue)}>{data?.location}</span>
          </div>
        </div>
        <Button
          onClick={() => onBook(data)}
          variant="secondary"
          label="Book Now"
          className={classes.bookButton}
        />
      </div>
    </div>
  );
}
