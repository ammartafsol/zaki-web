"use client";
import TitleHeader from "@/components/molecules/TitleHeader";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./TherapistsTemplate.module.css";
import BoxWrapper from "@/components/molecules/BoxWrapper";
import TherapistsCard from "@/components/molecules/TherapistsCard";
import LoadingSkeleton from "@/components/atoms/LoadingSkeleton";
import { therapistsData } from "@/developmentContext/therapistsData";
import NoDataFound from "@/components/atoms/NoDataFound/NoDataFound";
import {
  categoryOptions,
  locationOptions,
} from "@/developmentContext/popover-otpions";

export default function TherapistsTemplate() {
  const [data, setData] = useState(therapistsData || []);
  const [loading, setLoading] = useState("");
  const [filter, setFilter] = useState({
    search: "",
    language: null,
    slots: "",
    category: null,
    location: null,
    price: "",
  });

  return (
    <Container fluid>
      <Row>
        <Col md={12} className="p-0">
          <TitleHeader title="Find Your Therapists" />

          <BoxWrapper
            showSearch={true}
            setSearch={(e) => setFilter("search", e)}
            search={filter?.search}
            searchInputClass={classes.searchInput}
            //language props
            showLanguage={true}
            setLanguage={(e) => setFilter("language", e)}
            language={filter?.language}
            //slots props
            showSlots={true}
            setSlots={(e) => setFilter("slots", e)}
            slots={filter?.slots}
            slotsOptions={[]}
            // category props
            showCategory={true}
            setCategory={(e) => setFilter("category", e)}
            category={filter?.category}
            categoryOptions={categoryOptions}
            // location props
            showLocation={true}
            setLocation={(e) => setFilter("location", e)}
            location={filter?.location}
            locationOptions={locationOptions}
            // price props
            showPrice={true}
            setPrice={(e) => setFilter("price", e)}
          >
            <Row className="w-100">
              {loading === "get-data" ? (
                Array.from({ length: 6 }).map((item, index) => (
                  <Col md={6} lg={3} className="mb-4" key={index}>
                    <LoadingSkeleton width={"100%"} height={200} />
                  </Col>
                ))
              ) : data?.length > 0 ? (
                data?.map((item, index) => (
                  <Col md={6} lg={4} className="mb-4" key={index}>
                    <TherapistsCard data={item} />
                  </Col>
                ))
              ) : (
                <Col md={12} className="mb-4">
                  <NoDataFound text="No therapists found" />
                </Col>
              )}
            </Row>
          </BoxWrapper>
        </Col>
      </Row>
    </Container>
  );
}
