import React from "react";
import classes from "./TrustedProfessionalsSection.module.css";
import clsx from "clsx";
import Image from "next/image";

export default function TrustedProfessionalsSection({
  data,
  statsClass,
  statsDetailClass,
}) {
  return (
    <div className={classes.section}>
      {data?.logo && (
        <div className={classes.header}>
          <div className={classes.logo}>
            <Image src={data?.logo} alt="logo" fill />
          </div>
        </div>
      )}
      {(data?.title && data?.description && data?.text) && (
        <div className={classes.content}>
          <p className={clsx(classes.text, "fs14 fw-600")}>{data?.text}</p>
          <h2 className={clsx(classes.title, "fs44 fw-500")}>{data?.title}</h2>
          <p className={clsx(classes.description, "fs18 fw-400")}>
            {data?.description}
          </p>
        </div>
      )}
      {(data?.heading || data?.subHeading) && (
        <div className={classes.content}>
          <p className={clsx(classes.text, "fs14 fw-600")}>{data?.subHeading}</p>
          <h2 className={clsx(classes.title, "fs44 fw-500")}>{data?.heading}</h2>
        </div>
      )}
      {data?.stats && (
        <div className={clsx(classes.stats, statsClass)}>
          {data?.stats.map((stat, index) => (
            <div
              className={clsx(classes.statDetail, statsDetailClass)}
              key={index}
            >
              <div className={classes.statIcon}>
                <Image src={stat?.icon} alt="icon" fill />
              </div>
              <div className={classes.statContent}>
                <h3 className={clsx(classes.statTitle, "fs32 fw-500")}>
                  {stat?.title}
                </h3>
                <p className={clsx(classes.statDescription, "fs18 fw-400")}>
                  {stat?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {data?.arr && (
        <div className={clsx(classes.card, statsClass)}>
          {data?.arr.map((item, index) => (
            <div
              className={clsx(classes.cardItems, statsDetailClass)}
              key={index}
            >
              <div className={classes.cardIcon}>
                <Image src={item?.icon} alt="icon" fill />
              </div>
              <div className={classes.cardContent}>
                <h3 className={clsx(classes.cardTitle, "fs20 fw-500")}>
                  {item?.title}
                </h3>
                <p className={clsx(classes.cardDescription, "fs14 fw-400")}>
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
