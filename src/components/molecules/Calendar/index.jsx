"use client";

import React, { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import classes from "./Calendar.module.css";
import clsx from "clsx";

export default function Calendar({ appointments = [], onDateSelect }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAppointments, setSelectedAppointments] = useState([]);

  // Get appointments for a specific date
  const getAppointmentsForDate = (date) => {
    if (!appointments || appointments.length === 0) return [];

    return appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      return (
        appointmentDate.getDate() === date.getDate() &&
        appointmentDate.getMonth() === date.getMonth() &&
        appointmentDate.getFullYear() === date.getFullYear()
      );
    });
  };

  // Handle date click
  const handleDateClick = (date) => {
    setSelectedDate(date);
    const dayAppointments = getAppointmentsForDate(date);
    setSelectedAppointments(dayAppointments);

    if (onDateSelect) {
      onDateSelect(date, dayAppointments);
    }
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

  // Check if date has appointments
  const hasAppointments = (date) => {
    return getAppointmentsForDate(date).length > 0;
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
  const isSelected = (date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
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
              day && isSelected(day) && classes.selectedDay,
              day && hasAppointments(day) && classes.hasAppointments
            )}
            onClick={() => day && handleDateClick(day)}
            disabled={!day}
          >
            {day && day.getDate()}
          </button>
        ))}
      </div>

      {/* Selected Date Appointments */}
      {selectedDate && (
        <div className={classes.appointmentsSection}>
          <h4 className={classes.appointmentsTitle}>Next Appointment</h4>

          {selectedAppointments.length > 0 ? (
            <div className={classes.appointmentDetails}>
              <div className={classes.appointmentDate}>
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </div>

              {selectedAppointments.map((appointment, index) => (
                <div key={index} className={classes.appointmentItem}>
                  <div className={classes.appointmentTime}>
                    <FaClock size={14} />
                    <span>Time {appointment.time}</span>
                  </div>
                  {appointment.title && (
                    <div className={classes.appointmentTitle}>
                      {appointment.title}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={classes.noAppointments}>
              No appointments scheduled for this date
            </div>
          )}
        </div>
      )}
    </div>
  );
}
