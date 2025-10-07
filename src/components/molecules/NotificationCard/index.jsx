import React from "react";
import classes from "./NotificationCard.module.css";
import moment from "moment";

export default function NotificationCard({ data }) {
  return (
    <div className={classes.card}>
      <div className={classes.title}>{data?.title}</div>
      <div className={classes.description}>{data?.message}</div>
      <div className={classes.time}>
        Today {moment(data?.createdAt).format("hh:mm A")}
      </div>
    </div>
  );
}
