import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";
import { getFormattedPrice } from "@/resources/utils/helper";

export const dashboardData = {
  totalBookings: 344,
  upcomingSessions: 344,
  completedSessions: 344,
  totalPaidAmount: 344,
  totalSessionDifference: 34,
  upcomingSessionsDifference: -34,
  completedSessionsDifference: -34,
  totalPaidAmountDifference: 34,
  upcomingAppointments: [
    {
      user: {
        fullName: "Loretta Rippin",
        location: "1901 Thornridge Cir. Shiloh, 81063",
        email: "loretta@gmail.com",
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      title: "Therapist",
      status: "upcoming",
    },
    {
      user: {
        fullName: "Loretta Rippin",
        location: "1901 Thornridge Cir. Shiloh, 81063",
        email: "loretta@gmail.com",
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      title: "Therapist",
      status: "upcoming",
    },
    {
      user: {
        fullName: "Loretta Rippin",
        location: "1901 Thornridge Cir. Shiloh, 81063",
        email: "loretta@gmail.com",
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      title: "Therapist",
      status: "completed",
    },
    {
      user: {
        fullName: "Loretta Rippin",
        location: "1901 Thornridge Cir. Shiloh, 81063",
        email: "loretta@gmail.com",
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      title: "Therapist",
      status: "cancelled",
    },
    {
      user: {
        fullName: "Loretta Rippin",
        location: "1901 Thornridge Cir. Shiloh, 81063",
        email: "loretta@gmail.com",
        createdAt: "2025-01-01T00:00:00.000Z",
      },
      title: "Therapist",
      status: "upcoming",
    },
  ],
  notifications: [
    {
      title: "New Appointment Books",
      createdAt: "2025-01-01T00:00:00.000Z",
      message:
        "John Smith has registered as a therapist and is awaiting profile verification.",
    },
    {
      title: "New Appointment Books",
      createdAt: "2025-01-01T00:00:00.000Z",
      message:
        "John Smith has registered as a therapist and is awaiting profile verification.",
    },
    {
      title: "New Appointment Books",
      createdAt: "2025-01-01T00:00:00.000Z",
      message:
        "John Smith has registered as a therapist and is awaiting profile verification.",
    },
  ],
};

export const statsData = (data) => [
  {
    title: "Total Bookings",
    value: data?.totalBookings ?? 0,
    difference: data?.totalSessionDifference,
    icon: "/svgs/users.svg",
  },
  {
    title: "Upcoming Sessions",
    value: data?.upcomingSessions ?? 0,
    difference: data?.upcomingSessionsDifference,
    icon: "/svgs/users.svg",
  },
  {
    title: "Completed Sessions",
    value: data?.completedSessions ?? 0,
    difference: data?.completedSessionsDifference,
    icon: "/svgs/users.svg",
  },
  {
    title: "Total Paid Amount",
    value: data?.totalPaidAmount ? getFormattedPrice(data?.totalPaidAmount) : 0,
    difference: data?.totalPaidAmountDifference,
    icon: "/svgs/users.svg",
  },
];

export const dashboardTableHeader = [
  {
    title: "Therapist Name",
    key: "user",
    style: {
      width: "20%",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue?.fullName} bold />
    ),
  },
  {
    title: "Email",
    key: "user",
    style: {
      width: "15%",
    },
    renderValue: (cellValue) => <RenderTextCell cellValue={cellValue?.email} />,
  },
  {
    title: "Location",
    key: "user",
    style: {
      width: "20%",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue?.location} />
    ),
  },
  {
    title: "Date",
    key: "user",
    style: {
      width: "15%",
    },
    renderValue: (cellValue) => (
      <RenderDateCell cellValue={cellValue?.createdAt} />
    ),
  },
  {
    title: "Status",
    key: "status",
    style: {
      width: "20%",
    },
    renderValue: (cellValue) => <RenderStatusCell cellValue={cellValue} />,
  },
  {
    title: "",
    key: "action",
    style: {
      width: "10%",
    },
  },
];
