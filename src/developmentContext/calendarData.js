// Sample appointment data for calendar
export const sampleAppointments = [
  {
    id: 1,
    title: "Therapy Session - John Doe",
    date: new Date(2025, 6, 17), // July 17, 2025
    time: "11:50 PM",
    type: "therapy",
    status: "scheduled",
  },
  {
    id: 2,
    title: "Consultation - Jane Smith",
    date: new Date(2025, 6, 20), // July 20, 2025
    time: "2:30 PM",
    type: "consultation",
    status: "scheduled",
  },
  {
    id: 3,
    title: "Follow-up - Mike Johnson",
    date: new Date(2025, 6, 25), // July 25, 2025
    time: "10:00 AM",
    type: "follow-up",
    status: "scheduled",
  },
  {
    id: 4,
    title: "Initial Assessment - Sarah Wilson",
    date: new Date(2025, 6, 28), // July 28, 2025
    time: "3:15 PM",
    type: "assessment",
    status: "scheduled",
  },
  {
    id: 5,
    title: "Group Session",
    date: new Date(2025, 6, 30), // July 30, 2025
    time: "4:00 PM",
    type: "group",
    status: "scheduled",
  },
];

// Get appointments for current month
export const getAppointmentsForMonth = (year, month) => {
  return sampleAppointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.date);
    return (
      appointmentDate.getFullYear() === year &&
      appointmentDate.getMonth() === month
    );
  });
};

// Get appointments for a specific date
export const getAppointmentsForDate = (date) => {
  return sampleAppointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.date);
    return (
      appointmentDate.getDate() === date.getDate() &&
      appointmentDate.getMonth() === date.getMonth() &&
      appointmentDate.getFullYear() === date.getFullYear()
    );
  });
};
