"use client";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import BoxWrapper from "@/components/molecules/BoxWrapper";
import TitleHeader from "@/components/molecules/TitleHeader";
import UserDetail from "@/components/organisms/UserDetail";
import { appointmentDetailData } from "@/developmentContext/appointmentData";
import { TABS_OPTIONS } from "@/developmentContext/tabs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./AppointmentDetailTemplate.module.css";
import AddReviewModal from "@/components/organisms/Modals/AddReviewModal";
import ReviewSection from "@/components/molecules/ReviewSection";
import { getUserRoleCookie } from "@/resources/utils/cookie";
import clsx from "clsx";

export default function AppointmentDetailTemplate() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const role = getUserRoleCookie();
  console.log(role);

  const [data, setData] = useState(appointmentDetailData);
  const [loading, setLoading] = useState("");
  const [selectedTab, setSelectedTab] = useState(TABS_OPTIONS[0].value);

  const onClickPopover = (label, rowItem) => {
    if (label == "view") {
      if (role === "user") {
        router.push(`/user/appointments/detail`);
      } else {
        router.push(`/therapist/appointments/detail`);
      }
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={12} className="p-0">
          <TitleHeader title="Appointment Detail" />

          <BoxWrapper>
            {loading === "get-data" ? (
              <LoadingSkeleton width={"100%"} height={500} />
            ) : (
              <UserDetail data={data} setShowModal={setShowModal} />
            )}
          </BoxWrapper>
          {role === "therapist" && (
            <div className={classes.reviewSection}>
              <p className={clsx(classes.reviewSectionTitle, "fs18 fw-600")}>
                Reviews
              </p>
              <Row className="gy-4">
                {data?.review?.slice(0, 6).map((item, index) => (
                  <Col lg={6} key={index}>
                    <ReviewSection data={item} />
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Col>
      </Row>
      {showModal && <AddReviewModal show={showModal} setShow={setShowModal} />}
    </Container>
  );
}
