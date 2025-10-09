"use client";
import BoxWrapper from "@/components/molecules/BoxWrapper";
import TitleHeader from "@/components/molecules/TitleHeader";
import ResponsiveTable from "@/components/organisms/ResponsiveTable/ResponsiveTable";
import {
  walletData,
  walletData2,
  walletTableHeader,
  walletTableHeader2,
} from "@/developmentContext/walletData";
import { getUserRoleCookie } from "@/resources/utils/cookie";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./WalletTemplate.module.css";
import Image from "next/image";
import { WALLET_TABS_OPTIONS } from "@/developmentContext/tabs";
import Button from "@/components/atoms/Button";
import AreYouSureModal from "@/components/organisms/Modals/AreYouSureModal";

export default function WalletTemplate() {
  const userRole = getUserRoleCookie();

  const userRoleTableHeader =
    userRole === "therapist" ? walletTableHeader2 : walletTableHeader;
  const userRoleData = userRole === "therapist" ? walletData2 : walletData;

  const [data, setData] = useState(userRoleData);
  const [showModal, setShowModal] = useState(false);

  const [loading, setLoading] = useState("");
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedTab, setSelectedTab] = useState(WALLET_TABS_OPTIONS[0].value);
  const [filter, setFilter] = useState({
    search: "",
    date: "",
  });

  return (
    <Container>
      <Row>
        <Col md={12}>
          <TitleHeader
            title="Wallet"
            showButton={userRole === "therapist"}
            buttonLabel="Download Invoice"
            buttonOnClick={() => {}}
            leftIcon={
              <div className={classes.leftIcon}>
                <Image src="/svgs/invoice.svg" alt="download" fill />
              </div>
            }
          />
        </Col>
        <Col md={12}>
          <BoxWrapper
            showTabs={userRole === "therapist" && true}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            tabsOptions={WALLET_TABS_OPTIONS}
            // search props
            showSearch={userRole === "therapist" && true}
            setSearch={(e) => setFilter((prev) => ({ ...prev, search: e }))}
            search={filter?.search}
            searchInputClass={classes.searchInput}
            // date props
            showDatePicker={userRole === "therapist" && true}
            setDate={(e) => setFilter((prev) => ({ ...prev, date: e }))}
            date={filter?.date}
          >
            <ResponsiveTable
              data={data}
              tableHeader={userRoleTableHeader}
              loading={loading === "get-data"}
              totalRecords={totalRecords}
              renderItem={({ item, key, rowIndex, renderValue }) => {
                const rowItem = data[rowIndex];
                if (renderValue) {
                  return renderValue(item, rowItem);
                }
                if (key == "action") {
                  return (
                    <div className={classes.actionButtons}>
                      {rowItem?.status === "pending" ? (
                        <Button
                          label="Mark as Received"
                          variant="transparent"
                          onClick={() => {
                            setShowModal(true);
                          }}
                          leftIcon={
                            <div className={classes.leftIcon}>
                              <Image
                                src="/svgs/tick-mark.svg"
                                alt="download"
                                fill
                              />
                            </div>
                          }
                        />
                      ) : (
                        <Button
                          label="Download Invoice"
                          variant="transparent"
                          onClick={() => {}}
                          leftIcon={
                            <div className={classes.leftIcon}>
                              <Image
                                src="/svgs/invoice.svg"
                                alt="download"
                                fill
                              />
                            </div>
                          }
                        />
                      )}
                    </div>
                  );
                }
                return item || "";
              }}
            />
          </BoxWrapper>
        </Col>
      </Row>
      <AreYouSureModal
        show={showModal}
        setShow={setShowModal}
        type="warning"
        title="Are you sure you want to mark as received?"
        subTitle="This action cannot be undone. Please confirm to proceed."
        onClick={() => {}}
      />
    </Container>
  );
}
