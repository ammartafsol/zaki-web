"use client";
import BoxWrapper from "@/components/molecules/BoxWrapper";
import TitleHeader from "@/components/molecules/TitleHeader";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import { walletData, walletTableHeader } from "@/developmentContext/walletData";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function WalletTemplate() {
  const [data, setData] = useState(walletData);
  const [loading, setLoading] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <TitleHeader title="Wallet" />
        </Col>
        <Col md={12}>
          <BoxWrapper>
            <ResponsiveTable
              data={data}
              tableHeader={walletTableHeader}
              loading={loading === "get-data"}
              totalRecords={totalRecords}
            />
          </BoxWrapper>
        </Col>
      </Row>
    </Container>
  );
}
