"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import classes from "./DatePickerPopover.module.css";

export default function DatePickerPopover({ setDate, date }) {
  const [isOpen, setIsOpen] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(new Date());
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
        setPopoverPosition({
          left: "auto",
          right: 0,
        });
      } else {
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

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const isSameDay = (date1, date2) => {
    if (!date1 || !date2) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = (date) => {
    const today = new Date();
    return isSameDay(date, today);
  };

  const formatDate = (date) => {
    if (!date) return "Date";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={clsx(classes.datePickerPopover, isOpen && classes.open)}
      ref={ref}
    >
      <p className={classes.triggerText}>{formatDate(date)}</p>
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
          className={classes.popoverContent}
          style={{
            left: popoverPosition.left,
            right: popoverPosition.right,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.calendarHeader}>
            <button
              type="button"
              className={classes.navButton}
              onClick={handlePrevMonth}
            >
              <IoChevronBack size={16} />
            </button>
            <h3 className={classes.monthYear}>
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <button
              type="button"
              className={classes.navButton}
              onClick={handleNextMonth}
            >
              <IoChevronForward size={16} />
            </button>
          </div>

          <div className={classes.calendarGrid}>
            <div className={classes.dayHeaders}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className={classes.dayHeader}>
                  {day}
                </div>
              ))}
            </div>
            <div className={classes.daysGrid}>
              {days.map((day, index) => (
                <button
                  key={index}
                  type="button"
                  className={clsx(
                    classes.dayButton,
                    day && isSameDay(day, date) && classes.selectedDay,
                    day && isToday(day) && classes.today,
                    !day && classes.emptyDay
                  )}
                  onClick={() => day && handleDateSelect(day)}
                  disabled={!day}
                >
                  {day && day.getDate()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
