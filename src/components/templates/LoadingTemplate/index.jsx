"use client";

import React from "react";
import classes from "./LoadingTemplate.module.css";
import Image from "next/image";

export default function LoadingTemplate({
  label = "Loading...",
  logoSrc = "/svgs/logo.svg",
  tagline = "Please wait while we prepare your experience",
}) {
  return (
    <div className={classes.loaderWrapper} role="status" aria-live="polite">
      {/* Animated gradient background */}
      <div className={classes.gradientBackdrop} />

      {/* Floating blobs */}
      <div className={classes.blob} />
      <div className={classes.blobAlt} />

      {/* Center content */}
      <div className={classes.centerStage}>
        <div className={classes.logoWrap}>
          <div className={classes.spinnerRing} />
          <Image
            src={logoSrc}
            alt="Logo"
            width={56}
            height={56}
            priority
            className={classes.logo}
          />
        </div>

        <p className={classes.label}>{label}</p>
        <p className={classes.tagline}>{tagline}</p>

        <div className={classes.progressBar}>
          <div className={classes.progress} />
        </div>
      </div>
    </div>
  );
}
