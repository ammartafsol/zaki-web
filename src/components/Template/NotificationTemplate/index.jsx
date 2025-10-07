"use client";
import BoxWrapper from "@/components/molecules/BoxWrapper";
import TitleHeader from "@/components/molecules/TitleHeader";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import NotificationCard from "@/components/molecules/NotificationCard";
import { notifications } from "@/developmentContext/notifications";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./NotificationTemplate.module.css";

export default function NotificationTemplate() {
  const [data, setData] = useState(notifications);

  const [loading, setLoading] = useState("");
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={12} className="p-0">
            <TitleHeader title="Notifications" />
          </Col>
          <Col md={12} className="p-0">
            <BoxWrapper>
              {loading === "get-data"
                ? Array.from({ length: 6 }).map((item, index) => (
                    <Col md={12} key={index}>
                      <LoadingSkeleton width={"100%"} height={200} />
                    </Col>
                  ))
                : data?.map((item) => (
                    <Col md={12} key={item?.title}>
                      <NotificationCard
                        className={classes.notificationCard}
                        data={item}
                      />
                    </Col>
                  ))}
            </BoxWrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
