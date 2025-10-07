import {
  capitalizeFirstLetter,
  getFormattedPrice,
  imageUrl,
} from "@/resources/utils/helper";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import {
  MdOutlineCancel,
  MdOutlinePending,
  MdOutlineWatchLater,
} from "react-icons/md";
import classes from "./CommonCells.module.css";
import ToolTip from "@/components/atoms/ToolTip";

// statusClassMap - a map of status classes
const statusClassMap = {
  active: {
    className: classes.activeStatus,
    icon: <FaRegCheckCircle size={13}/>,
  },
  inactive: {
    className: classes.deactiveStatus,
    icon: <MdOutlineCancel size={13}/>,
  },

  completed: {
    icon: <FaRegCheckCircle size={13}/>,
    className: classes.statusCompleted,
  },
  ongoing: {
    icon: <MdOutlinePending size={13}/>,
    className: classes.statusOngoing,
  },
  pending: {
    icon: <MdOutlineWatchLater size={13}/>,
    className: classes.statusPending,
  },
};
export const RenderCurrencyCell = ({ cellValue }) => {
  return (
    <span className={classes.textCell}>
      {cellValue != null ? getFormattedPrice(cellValue) : "-"}
    </span>
  );
};

export const RenderTextCell = ({ cellValue: item }) => {
  return (
    <span className={clsx("maxLine1", classes.textCell)}>
      {item ? capitalizeFirstLetter(item?.toString()) : item ?? "-"}
    </span>
  );
};

export const RenderDateCell = ({ cellValue: item }) => {
  return (
    <span className={clsx(classes?.date)}>
      {moment(item).format("DD.MM.YYYY")}
    </span>
  );
};

export const RenderStatusCell = ({ cellValue: item }) => {
  const isBoolean = typeof item === "boolean";
  const displayValue = isBoolean ? (item ? "active" : "inactive") : item;

  const statusClass = statusClassMap[displayValue];

  return (
    <span
      className={clsx(
        classes.status,
        "fs12 fw600 lh18",
        statusClass && statusClass?.className
      )}
    >
      {statusClass?.icon && statusClass.icon}
      {capitalizeFirstLetter(displayValue)}
    </span>
  );
};

export const RenderUserCell = ({ cellValue }) => {
  if (!cellValue) return null;

  return (
    <div className={classes.userDataCell}>
      {cellValue?.photo && (
        <div className={classes.userAvatar}>
          <Image
            src={
              cellValue?.photo ? imageUrl(cellValue?.photo) : cellValue?.photo
            }
            alt={cellValue?.fullName}
            width={48}
            height={48}
          />
        </div>
      )}
      <div className={classes.userInfo}>
        <div className={clsx(classes.userName, "maxLine1")}>
          {cellValue?.fullName}
        </div>
        <div className={clsx(classes.userEmail, "maxLine1")}>
          {cellValue?.email}
        </div>
      </div>
    </div>
  );
};

// export const categoryCell = ({ cellValue: { item } }) => {
//   return item?.map((item, index) => (
//     <div title={item} key={index} className={classes.textCell}>
//       {item ? capitalizeFirstLetter(item) : "-"}
//     </div>
//   ));
// };
export const RenderCategoryCell = ({ cellValue: item }) => {
  const isArray = Array.isArray(item);
  const gradeCount = isArray ? item.length - 1 : 0;

  const gradeName =
    Array.isArray(item) && item.length > 1
      ? item
          .slice(1)
          .map((e) => (e?.name ? capitalizeFirstLetter(e.name) : ""))
          .filter(Boolean)
          .join(" - ")
      : "";

 
  return (
    <div className="d-flex justify-content-start align-items-center gap-2">
      <span className={clsx("body05 maxLine1", classes.categoryDiv)}>
        {isArray
          ? item.length
            ? capitalizeFirstLetter(item[0]?.name)
            : "N/A"
          : item?.name || "N/A"}
      </span>
      {gradeCount > 0 && isArray && (
        <ToolTip data={gradeName} placement="top">
          <span
            className={clsx("body05 cursor-pointer", classes.countDiv)}
          >{`+${gradeCount}`}</span>
        </ToolTip>
      )}
    </div>
  );
};

export const RenderBillingMonthCell = ({ cellValue: item }) => {
  return (
    <span className={clsx(classes?.date)}>
      {moment(item).format("MMMM YYYY")}
    </span>
  );
};