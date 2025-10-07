"use client";

import { ClickAwayListener } from "@mui/material";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Style from "./PopOver.module.css";
import { BiDotsHorizontalRounded } from "react-icons/bi";

export default function PopOver({
  popover = [],
  onClick = () => {},
  children = null,
}) {
  const [show, setShow] = useState(false);
  const [placement, setPlacement] = useState("bottom-start");
  const triggerRef = useRef(null);

  // Function to calculate optimal placement
  const calculatePlacement = () => {
    if (!triggerRef.current) return "bottom-start";

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    // PopOver dimensions (approximate)
    const popoverHeight = 200; // max-height from CSS
    const popoverWidth = 200; // max-width from CSS

    // Check if there's enough space below
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    const spaceRight = viewportWidth - triggerRect.left;
    const spaceLeft = triggerRect.right;

    // Determine vertical placement
    let verticalPlacement = "bottom";
    if (spaceBelow < popoverHeight && spaceAbove > popoverHeight) {
      verticalPlacement = "top";
    }

    // Determine horizontal placement
    let horizontalPlacement = "start";
    if (spaceRight < popoverWidth && spaceLeft > popoverWidth) {
      horizontalPlacement = "end";
    }

    return `${verticalPlacement}-${horizontalPlacement}`;
  };

  // Update placement when show changes
  useEffect(() => {
    if (show) {
      const newPlacement = calculatePlacement();
      setPlacement(newPlacement);
    }
  }, [show]);

  const overlayPopover = (
    <Popover
      id="popover-basic"
      className={Style?.overlayPopover}
      popover="false"
    >
      <ClickAwayListener onClickAway={() => setShow(false)}>
        <Popover.Body className="p-0 m-0">
          <ul className={clsx(Style.overlay, "m-0 p-0")}>
            {Array.isArray(popover) && popover.length > 0 ? (
              popover?.map((item, index) => (
                <li
                  key={index}
                  className={clsx(
                    Style.overlayLink,
                    item?.borderBottom && Style.borderBottom,
                    item?.borderTop && Style.borderTop
                  )}
                  onClick={() => {
                    onClick(item?.value);
                    setShow(false);
                  }}
                >
                  {item?.icon && (
                    <div className={clsx(Style.iconDiv)}>{item?.icon}</div>
                  )}
                  <span className={clsx("text-black body05", Style.label)}>
                    {item?.label}
                  </span>
                </li>
              ))
            ) : (
              <div className={Style.noOption}>
                <li>No options available</li>
              </div>
            )}
          </ul>
        </Popover.Body>
      </ClickAwayListener>
    </Popover>
  );

  return (
    <>
      <div>
        <OverlayTrigger
          trigger="click"
          placement={placement}
          overlay={overlayPopover}
          show={show}
          onToggle={() => setShow(!show)}
        >
          <div ref={triggerRef} onClick={() => setShow(true)}>
            {children ? (
              children
            ) : (
              <BiDotsHorizontalRounded
                className={Style.icon}
                fontSize={16}
                color="rgba(0, 13, 77, 0.45)"
                size={16}
              />
            )}
          </div>
        </OverlayTrigger>
      </div>
    </>
  );
}
