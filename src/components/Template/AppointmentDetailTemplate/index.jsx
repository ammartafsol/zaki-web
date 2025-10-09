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

export default function AppointmentDetailTemplate() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const [data, setData] = useState(appointmentDetailData);
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
          <TitleHeader title="Appointment Detail" />

          <BoxWrapper>
            {loading === "get-data" ? (
              <LoadingSkeleton width={"100%"} height={500} />
            ) : (
              <UserDetail data={data} setShowModal={setShowModal} />
            )}
          </BoxWrapper>
        </Col>
      </Row>
      {showModal && <AddReviewModal show={showModal} setShow={setShowModal} />}
    </Container>
  );
}
