import {
  RenderAmountCell,
  RenderDateCell,
  RenderStatusCell,
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

export const walletData2 = [
  {
    user: {
      fullName: "Loretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    category: {
      title: "Psychodynamic Therapy",
    },
    date: "2025-01-01T00:00:00.000Z",
    amount: 24,
    status: "completed",
  },
  {
    user: {
      fullName: "Loretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    category: {
      title: "Psychodynamic Therapy",
    },
    date: "2025-01-01T00:00:00.000Z",
    amount: 24,
    status: "pending",
  },
  {
    user: {
      fullName: "Loretta Rippin",
      email: "loretta@gmail.com",
      location: "United States",
    },
    category: {
      title: "Psychodynamic Therapy",
    },
    date: "2025-01-01T00:00:00.000Z",
    amount: 24,
    status: "completed",
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

export const walletTableHeader2 = [
  {
    title: "Client Name",
    key: "user",
    style: {
      width: "15%",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue?.fullName} />
    ),
  },
  {
    title: "Category",
    key: "category",
    style: {
      width: "10%",
    },
    renderValue: (cellValue) => <RenderTextCell cellValue={cellValue?.title} />,
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
      width: "10%",
    },
    renderValue: (cellValue) => (
      <RenderTextCell cellValue={cellValue?.location} />
    ),
  },
  {
    title: "Date",
    key: "date",
    style: {
      width: "10%",
    },
    renderValue: (cellValue) => <RenderDateCell cellValue={cellValue} />,
  },
  {
    title: "Status",
    key: "status",
    style: {
      width: "15%",
    },
    renderValue: (cellValue) => <RenderStatusCell cellValue={cellValue} />,
  },
  {
    title: "Amount",
    key: "amount",
    style: {
      width: "10%",
    },
    renderValue: (cellValue) => <RenderAmountCell cellValue={cellValue} bold />,
  },
  {
    title: "",
    key: "action",
    style: {
      width: "15%",
    },
  },
];
