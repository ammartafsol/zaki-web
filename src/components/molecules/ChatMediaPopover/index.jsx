"use client";

import React, { useEffect, useRef, useState } from "react";
import classes from "./ChatMediaPopover.module.css";
import { FaPaperclip, FaRegSmile, FaImages, FaFileAlt } from "react-icons/fa";
import { RxLink2 } from "react-icons/rx";

export default function ChatMediaPopover({
  onPickMedia = () => {},

  placement = "left",
  position = "top", // "bottom" | "top"
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className={classes.wrapper} ref={ref}>
      <button
        type="button"
        aria-label="Attach"
        className={classes.triggerBtn}
        onClick={() => setOpen((v) => !v)}
      >
        <RxLink2 size={16} className={classes.linkIcon} />
      </button>

      {open && (
        <div
          className={classes.popover}
          style={{
            left: placement === "left" ? 0 : "auto",
            right: placement === "right" ? 0 : "auto",
            top: position === "bottom" ? "calc(100% + 8px)" : "auto",
            bottom: position === "top" ? "calc(100% + 8px)" : "auto",
          }}
        >
          <div className={classes.list}>
            <div
              className={classes.item}
              onClick={() => {
                onPickMedia();
                setOpen(false);
              }}
            >
              <FaImages className={classes.icon} />
              <span className={classes.label}>Upload from the device</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
