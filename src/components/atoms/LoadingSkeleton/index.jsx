import { Skeleton } from "@mui/material";
import React from "react";

export default function LoadingSkeleton({ width, height, animation = "wave" }) {
  return (
    <Skeleton
      variant="rectangular"
      width={width}
      height={height}
      animation={animation}
    />
  );
}
