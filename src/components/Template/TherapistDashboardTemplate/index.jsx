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
import { GoArrowUpRight } from "react-icons/go";
import classes from "./TherapistDashboardTemplate.module.css";
import clsx from "clsx";
import NotificationCard from "@/components/molecules/NotificationCard";
import { useRouter } from "next/navigation";

export default function TherapistDashboardTemplate() {
  const router = useRouter();
  const [data, setData] = useState(dashboardData);
  const [loading, setLoading] = useState("");

  const onClickPopover = (label, rowItem) => {
    console.log(label, rowItem);
  };

  return (
    <div className={classes.dashboardTemplate}>
      <Container fluid>
        <Row>
          <Col md={6}>
            <Row>
              {loading === "get-data"
                ? Array.from({ length: 4 }).map((item, index) => (
                    <Col md={6} lg={6} className="mb-4" key={index}>
                      <LoadingSkeleton width={"100%"} height={200} />
                    </Col>
                  ))
                : statsData(data)?.map((item) => (
                    <Col md={6} lg={6} className="mb-4" key={item?.title}>
                      <Stats data={item} />
                    </Col>
                  ))}
            </Row>
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
            <div className={classes.notificationCard}>
              <div className={classes.header}>
                <p className={classes.title}>Notifications</p>
                <Button
                  variant="secondary"
                  onClick={() => router.push("/notifications")}
                  leftIcon={<GoArrowUpRight />}
                  className={classes.notificationButton}
                />
              </div>
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

              <div
                className={classes.footer}
                onClick={() => router.push("/notifications")}
              >
                <p className={clsx("fs14", classes.footerTitle)}>
                  See all Notifications
                </p>
                <div className={classes.routeDiv}>
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
