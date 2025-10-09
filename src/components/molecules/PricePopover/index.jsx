"use client";
import React, { useState, useEffect, useRef } from "react";
import classes from "./PricePopover.module.css";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import clsx from "clsx";
import Input from "@/components/atoms/Input/Input";
import { FaDollarSign } from "react-icons/fa6";
import Button from "@/components/atoms/Button";

export default function PricePopover({ onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState("");
  const [popoverPosition, setPopoverPosition] = useState({
    left: 0,
    right: "auto",
  });
  const ref = useRef(null);
  const popoverRef = useRef(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle smart positioning to prevent overflow
  useEffect(() => {
    if (isOpen && ref.current && popoverRef.current) {
      const triggerRect = ref.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      // Check if popover would overflow on the right
      const wouldOverflowRight =
        triggerRect.left + popoverRect.width > viewportWidth - 20;

      if (wouldOverflowRight) {
        // Position from the right edge instead
        setPopoverPosition({
          left: "auto",
          right: 0,
        });
      } else {
        // Normal positioning from left
        setPopoverPosition({
          left: 0,
          right: "auto",
        });
      }
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleApply = () => {
    onApply(price);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
    setPrice("");
  };

  return (
    <div
      className={clsx(classes.pricePopover, isOpen && classes.open)}
      onClick={() => setIsOpen(!isOpen)}
      ref={ref}
    >
      <p className={classes.pricePopoverLabel}>Price</p>
      {isOpen ? (
        <RiArrowDropUpLine
          size={24}
          color="var(--heading-color)"
          onClick={handleToggle}
          className={classes.arrowIcon}
        />
      ) : (
        <RiArrowDropDownLine
          size={24}
          color="var(--heading-color)"
          onClick={handleToggle}
          className={classes.arrowIcon}
        />
      )}
      {isOpen && (
        <div
          ref={popoverRef}
          className={classes.pricePopoverContent}
          style={{
            left: popoverPosition.left,
            right: popoverPosition.right,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <Input
            setValue={setPrice}
            value={price}
            placeholder="Enter Price"
            leftIcon={<FaDollarSign />}
            type="number"
          />
          <div className={classes.buttonContainer}>
            <Button
              variant="secondary"
              label="Apply"
              onClick={handleApply}
              disabled={!price || price.trim() === ""}
            />
            <Button
              variant="secondary-outline"
              label="Cancel"
              onClick={handleCancel}
              disabled={!price || price.trim() === ""}
            />
          </div>
        </div>
      )}
    </div>
  );
}
