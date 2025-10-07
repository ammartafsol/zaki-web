import {
  RenderAmountCell,
  RenderDateCell,
  RenderTextCell,
} from "@/components/organisms/ResponsiveTable/CommonCells";

export const walletData = [
  {
    category: {
      title: "Psychodynamic Therapy",
    },
    therapist: {
      fullName: "Loretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    date: "2025-01-01T00:00:00.000Z",
    amount: 24,
  },
  {
    category: {
      title: "Psychodynamic Therapy",
    },
    therapist: {
      fullName: "Loretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    date: "2025-01-01T00:00:00.000Z",
    amount: 24,
  },
  {
    category: {
      title: "Psychodynamic Therapy",
    },
    therapist: {
      fullName: "Loretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    date: "2025-01-01T00:00:00.000Z",
    amount: 24,
  },
  {
    category: {
      title: "Psychodynamic Therapy",
    },
    therapist: {
      fullName: "Loretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    date: "2025-01-01T00:00:00.000Z",
    amount: 24,
  },
];

export const walletTableHeader = [
  {
    title: "Therapist",
    key: "therapist",
    style: {
      width: "20%",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue?.fullName} bold />
    ),
  },
  {
    title: "Email",
    key: "therapist",
    style: {
      width: "15%",
    },
    renderValue: (cellValue) => <RenderTextCell cellValue={cellValue?.email} />,
  },
  {
    title: "Location",
    key: "therapist",
    style: {
      width: "15%",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue?.location} />
    ),
  },
  {
    title: "Date",
    key: "date",
    style: {
      width: "15%",
    },
    renderValue: (cellValue) => <RenderDateCell cellValue={cellValue} />,
  },
  {
    title: "Amount",
    key: "amount",
    style: {
      width: "15%",
    },
    renderValue: (cellValue) => <RenderAmountCell cellValue={cellValue} bold />,
  },
];
