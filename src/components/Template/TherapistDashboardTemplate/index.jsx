"use client";
import Button from "@/components/atoms/Button";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import Stats from "@/components/atoms/Stats";
import PopOver from "@/components/molecules/PopOver";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  dashboardData,
  dashboardTableHeader,
  statsData,
} from "@/developmentContext/dashboardData";
import { dashboardPopoverOptions } from "@/developmentContext/popover-otpions";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./TherapistDashboardTemplate.module.css";
import clsx from "clsx";
import NotificationCard from "@/components/molecules/NotificationCard";
import Calendar from "@/components/molecules/Calendar";
import { useRouter } from "next/navigation";
import NotificationSection from "@/components/organisms/NotificationSection";
import moment from "moment";
import Image from "next/image";

export default function TherapistDashboardTemplate() {
  const router = useRouter();
  const [data, setData] = useState(dashboardData);
  const [loading, setLoading] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const onClickPopover = (label, rowItem) => {
    console.log(label, rowItem);
  };

  console.log(selectedDate);

  return (
    <div className={classes.dashboardTemplate}>
      <Container fluid>
        <Row>
          <Col md={7}>
            <Row>
              {loading === "get-data"
                ? Array.from({ length: 4 }).map((item, index) => (
                    <Col md={6} className="mb-4" key={index}>
                      <LoadingSkeleton width={"100%"} height={200} />
                    </Col>
                  ))
                : statsData(data)?.map((item) => (
                    <Col md={6} className="mb-4" key={item?.title}>
                      <Stats data={item} />
                    </Col>
                  ))}
            </Row>
          </Col>

          <Col md={5} className="mb-4">
            <Calendar
              setSelectedDate={setSelectedDate}
              setDate={setSelectedDate}
              date={selectedDate}
            >
              <div className={classes.appointmentsSection}>
                <p className={classes.appointmentsTitle}>Next Appointments</p>
                <div className={classes.appointmentsList}>
                  <p className={classes.appointmentDate}>Wednesday, 9th Oct</p>
                  {data?.newAppointments?.map((item) => (
                    <div className={classes.appointmentCard} key={item?.id}>
                      <div className={classes.appointmentTime}>
                        <Image
                          src="/svgs/clock.svg"
                          alt="clock"
                          width={16}
                          height={16}
                        />
                        <span className={classes.appointmentTime}>Time</span>{" "}
                        {moment(item?.time).format("hh:mm A")}
                      </div>
                      <p className={classes.appointmentType}>{item?.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Calendar>
          </Col>

          <Col md={8}>
            <div className={classes.tableWrapper}>
              <p className={classes.tableTitle}>Upcoming Appointments</p>
              <ResponsiveTable
                data={data?.upcomingAppointments}
                tableHeader={dashboardTableHeader}
                hasPagination={false}
                loading={loading === "get-data"}
                renderItem={({ item, key, rowIndex, renderValue }) => {
                  const rowItem = data?.upcomingAppointments[rowIndex];

                  if (renderValue) {
                    return renderValue(item, rowItem);
                  }

                  if (key == "action") {
                    return (
                      <div className={classes.actionButtons}>
                        <PopOver
                          popover={dashboardPopoverOptions}
                          onClick={(label) => {
                            onClickPopover(label, rowItem);
                          }}
                        />
                      </div>
                    );
                  }
                  return item || "";
                }}
              />
            </div>
          </Col>
          <Col md={4}>
            <NotificationSection>
              <Row className={classes.notificationsRow}>
                {loading === "get-data"
                  ? Array.from({ length: 3 }).map((item, index) => (
                      <Col md={12} key={index}>
                        <LoadingSkeleton width={"100%"} height={100} />
                      </Col>
                    ))
                  : data?.notifications?.map((item) => (
                      <Col md={12} key={item?.title}>
                        <NotificationCard data={item} />
                      </Col>
                    ))}
              </Row>
            </NotificationSection>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
