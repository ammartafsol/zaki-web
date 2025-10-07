import React, { useState } from "react";
import Image from "next/image";
import classes from "./NoDataFound.module.css";
import { mergeClass } from "@/resources/utils/helper";
import { HiRefresh } from "react-icons/hi";

export default function NoDataFound({
  className = "",
  title = "No Data Found",
  subtitle = "It looks like there's nothing here yet. Check back later or try refreshing the page.",
  onRefresh,
  refreshText = "Try Again",
  showRefresh = false,
  size = "medium",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    if (onRefresh && !isRefreshing) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } catch (error) {
        console.error("Refresh failed:", error);
      } finally {
        setIsRefreshing(false);
      }
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return classes.small;
      case "large":
        return classes.large;
      default:
        return classes.medium;
    }
  };

  return (
    <div
      className={mergeClass(classes.main, getSizeClass(), className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={mergeClass(
          classes.imageContainer,
          isHovered ? classes.hovered : ""
        )}
      >
        <Image
          src="/app-images/no-data.png"
          alt="No data found illustration"
          width={200}
          height={200}
          className={classes.image}
          priority
        />
        <div className={classes.imageOverlay}></div>
      </div>

      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}

        {showRefresh && onRefresh && (
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className={mergeClass(
              classes.refreshButton,
              isRefreshing ? classes.refreshing : ""
            )}
            aria-label="Refresh data"
          >
            <HiRefresh
              className={mergeClass(
                classes.refreshIcon,
                isRefreshing ? classes.spinning : ""
              )}
            />
            {isRefreshing ? "Refreshing..." : refreshText}
          </button>
        )}
      </div>

      <div className={classes.decorativeElements}>
        <div className={classes.circle1}></div>
        <div className={classes.circle2}></div>
        <div className={classes.circle3}></div>
      </div>
    </div>
  );
}
