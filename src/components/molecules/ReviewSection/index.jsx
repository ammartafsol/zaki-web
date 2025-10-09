import classes from "./ReviewSection.module.css";
import Image from "next/image";
import clsx from "clsx";
import { imageUrl } from "@/resources/utils/helper";
import Rating from "react-rating";
import { GoStar, GoStarFill } from "react-icons/go";

export default function ReviewSection({ data }) {
  return (
    <div className={classes.card}>
      <div>
        <p className={clsx(classes.review, "fs14 fw-500")}>{data?.review}</p>
      </div>
      <div className={classes.reviewSectionContent}>
        <div className={classes.userImage}>
          <Image
            src={imageUrl(data?.photo) || data?.photo}
            alt="image"
            height={40}
            width={40}
          />
        </div>
        <div className={classes.reviewBox}>
          <p className={clsx(classes.fullName, "fs16 fw-600")}>
            {data?.fullName}
          </p>
          <div className={classes.ratingBox}>
            <Rating
              initialRating={data?.rating}
              emptySymbol={
                <GoStarFill color="#EAEAEA" className={classes.star} size={14} />
              }
              fullSymbol={
                <GoStarFill
                  color="#024757"
                  className={classes.star}
                  size={14}
                />
              }
              readonly
              size={14}
              spaceBetween={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
