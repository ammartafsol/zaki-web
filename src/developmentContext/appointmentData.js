import {
  RenderDateCell,
  RenderStatusCell,
  RenderTextCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";

export const appointmentData = [
  {
    category: {
      title: "Psychodynamic Therapy",
    },
    therapist: {
      fullName: "Loretta RippinLoretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    date: "2025-01-01T00:00:00.000Z",
    status: "upcoming",
    time: "10:00",
  },
  {
    category: {
      title: "Psychodynamic Therapy",
    },
    therapist: {
      fullName: "Loretta RippinLoretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    date: "2025-01-01T00:00:00.000Z",
    status: "upcoming",
    time: "10:00",
  },
  {
    category: {
      title: "Psychodynamic Therapy",
    },
    therapist: {
      fullName: "Loretta RippinLoretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    date: "2025-01-01T00:00:00.000Z",
    status: "upcoming",
    time: "10:00",
  },
  {
    category: {
      title: "Psychodynamic Therapy",
    },
    therapist: {
      fullName: "Loretta RippinLoretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    date: "2025-01-01T00:00:00.000Z",
    status: "completed",
    time: "10:00",
  },
  {
    category: {
      title: "Psychodynamic Therapy",
    },
    therapist: {
      fullName: "Loretta RippinLoretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    date: "2025-01-01T00:00:00.000Z",
    status: "completed",
    time: "10:00",
  },
];

export const appointmentTableHeader = [
  {
    title: "Category",
    key: "category",
    style: {
      width: "20%",
    },
    renderValue: (cellValue) => <RenderTextCell cellValue={cellValue?.title} />,
  },
  {
    title: "Therapist",
    key: "therapist",
    style: {
      width: "20%",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue?.fullName} />
    ),
  },
  {
    title: "Date",
    key: "date",
    style: {
      width: "20%",
    },
    renderValue: (cellValue) => <RenderDateCell cellValue={cellValue} />,
  },

  {
    title: "Time",
    key: "time",
    style: {
      width: "20%",
    },
    renderValue: (cellValue) => <RenderTextCell cellValue={cellValue} />,
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
    title: "Action",
    key: "action",
    style: {
      width: "20%",
    },
  },
];

export const appointmentDetailData = {
  therapist: {
    fullName: "Loretta Rippin",
    email: "loretta@gmail.com",
  },
  category: {
    title: "Psychodynamic Therapy",
  },
  status: "upcoming",
  date: "2025-01-01T00:00:00.000Z",
  slot: {
    startTime: "10:00",
    endTime: "11:00",
  },
  location: "United States",
  language: "English",
  price: 90,
  review: false,
};
