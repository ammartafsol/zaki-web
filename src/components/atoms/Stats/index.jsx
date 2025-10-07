import React from "react";
import classes from "./Stats.module.css";
import Image from "next/image";

export default function Stats({ data }) {
  return (
    <div className={classes.card}>
      <div className={classes.headerRow}>
        <h3 className={classes.title}>{data?.title}</h3>
        {data?.icon && (
          <div className={classes.iconPill}>
            <div className={classes.iconPillImage}>
              <Image src={data?.icon} alt={data?.title} fill priority />
            </div>
          </div>
        )}
      </div>

      <div className={classes.contentRow}>
        <div className={classes.value}>{data?.value}</div>
        <div
          className={`${classes.delta} ${
            data?.difference > 0 ? classes.positive : classes.negative
          }`}
        >
          {data?.difference > 0 && "+"}
          {data?.difference} % {data?.difference > 0 ? "↑" : "↓"}
        </div>
      </div>
    </div>
  );
}
