"use client";

import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import classes from "./Calendar.module.css";
import clsx from "clsx";

export default function Calendar({ setSelectedDate, setDate, date, children }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Handle date click
  const handleDateClick = (selectedDate) => {
    if (setDate) {
      setDate(selectedDate);
    }

    setSelectedDate(selectedDate);
  };

  // Navigation functions
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

  // Get days in month with proper grid layout
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

  // Check if date is today
  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Check if date is selected
  const isSelected = (dateToCheck) => {
    if (!date) return false;
    return (
      dateToCheck.getDate() === date.getDate() &&
      dateToCheck.getMonth() === date.getMonth() &&
      dateToCheck.getFullYear() === date.getFullYear()
    );
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

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={classes.calendar}>
      {/* Calendar Header */}
      <div className={classes.calendarHeader}>
        <button
          type="button"
          className={classes.navButton}
          onClick={handlePrevMonth}
        >
          <IoChevronBack size={20} />
        </button>

        <h3 className={classes.monthYear}>
          {monthNames[currentMonth.getMonth()]}, {currentMonth.getFullYear()}
        </h3>

        <button
          type="button"
          className={classes.navButton}
          onClick={handleNextMonth}
        >
          <IoChevronForward size={20} />
        </button>
      </div>

      {/* Day Headers */}
      <div className={classes.dayHeaders}>
        {dayNames.map((day) => (
          <div key={day} className={classes.dayHeader}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className={classes.calendarGrid}>
        {days.map((day, index) => (
          <button
            key={index}
            type="button"
            className={clsx(
              classes.dayButton,
              !day && classes.emptyDay,
              day && isToday(day) && classes.today,
              day && isSelected(day) && classes.selectedDay
            )}
            onClick={() => day && handleDateClick(day)}
            disabled={!day}
          >
            {day && day.getDate()}
          </button>
        ))}
      </div>

      {/* Children content */}
      {children}
    </div>
  );
}
