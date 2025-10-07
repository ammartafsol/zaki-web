"use client";
import BoxWrapper from "@/components/molecules/BoxWrapper";
import PopOver from "@/components/molecules/PopOver";
import TitleHeader from "@/components/molecules/TitleHeader";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  appointmentData,
  appointmentTableHeader,
} from "@/developmentContext/appointmentData";
import { dashboardPopoverOptions } from "@/developmentContext/popover-otpions";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./AppointmentTemplate.module.css";
import { TABS_OPTIONS } from "@/developmentContext/tabs";
import { useRouter } from "next/navigation";

export default function AppointmentTemplate() {
  const router = useRouter();

  const [data, setData] = useState(appointmentData);
  const [loading, setLoading] = useState("");
  const [selectedTab, setSelectedTab] = useState(TABS_OPTIONS[0].value);

  const onClickPopover = (label, rowItem) => {
    if (label == "view") {
      router.push(`/user/appointments/detail`);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={12} className="p-0">
          <TitleHeader title="Appointments" />
          <BoxWrapper
            showTabs={true}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tabsOptions={TABS_OPTIONS}
          >
            <ResponsiveTable
              data={data}
              totalRecords={data?.length}
              tableHeader={appointmentTableHeader}
              loading={loading === "get-data"}
              renderItem={({ item, key, rowIndex, renderValue }) => {
                const rowItem = data[rowIndex];
                if (renderValue) {
                  return renderValue(item, rowItem);
                }
                if (key == "action") {
                  return (
                    <PopOver
                      popover={dashboardPopoverOptions}
                      onClick={(label) => {
                        onClickPopover(label, rowItem);
                      }}
                    />
                  );
                }
                return item || "";
              }}
            />
          </BoxWrapper>
        </Col>
      </Row>
    </Container>
  );
}
