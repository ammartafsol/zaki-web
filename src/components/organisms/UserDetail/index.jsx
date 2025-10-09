import React from "react";
import classes from "./UserDetail.module.css";
import Image from "next/image";
import { FaCalendar, FaClock, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import moment from "moment";
import { RenderStatusCell } from "../ResponsiveTable/CommonCells";
import { getFormattedPrice } from "@/resources/utils/helper";
import Button from "@/components/atoms/Button";

export default function UserDetail({ data, setShowModal }) {
  return (
    <div className={classes.card}>
      <div className={classes.header}>
        <div className={classes.avatar}>
          <Image
            src={data?.therapist?.photo ?? "/app-images/default-user.png"}
            alt={data?.therapist?.fullName}
            fill
          />
        </div>
        <div className={classes.userInfo}>
          <div className={classes.name}>{data?.therapist?.fullName}</div>
          <div className={classes.email}>{data?.therapist?.email}</div>
        </div>
        <RenderStatusCell cellValue={data?.status} />
      </div>

      <div className={classes.categorySection}>
        <div className={classes.categoryLabel}>Category</div>
        <div className={classes.categoryValue}>{data?.category?.title}</div>
      </div>

      <div className={classes.detailsSection}>
        <div className={classes.detailsList}>
          <div className={classes.detailRow}>
            <div className={classes.detailIcon}>
              <Image src={"/svgs/calendar.svg"} alt={data?.date} fill />
            </div>
            <span className={classes.detailText}>
              {moment(data?.date).format("ddd MMM, DD")}
            </span>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.detailIcon}>
              <Image src={"/svgs/clock.svg"} alt={data?.slot?.startTime} fill />
            </div>
            <span className={classes.detailText}>
              {data?.slot?.startTime} - {data?.slot?.endTime}
            </span>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.detailIcon}>
              <Image src={"/svgs/location.svg"} alt={data?.location} fill />
            </div>
            <span className={classes.detailText}>{data?.location}</span>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.detailIcon}>
              <Image src={"/svgs/globe.svg"} alt={data?.language} fill />
            </div>
            <span className={classes.detailText}>{data?.language}</span>
          </div>
        </div>
        <div className={classes.priceSection}>
          <div className={classes.price}>{getFormattedPrice(data?.price)}</div>
          <div className={classes.priceLabel}>Price</div>
        </div>
      </div>
      {data?.review === false && (
        <div className={classes.addReview}>
          <Button
            label="Add Review"
            variant="secondary"
            className={classes.addReviewButton}
            onClick={() => setShowModal(true)}
          />
        </div>
      )}
    </div>
  );
}
