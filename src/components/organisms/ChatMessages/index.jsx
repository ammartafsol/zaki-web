"use client";
import React, { useState } from "react";
import classes from "./ChatMessages.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Input from "@/components/atoms/Input/Input";
import { RxLink2 } from "react-icons/rx";
import { PiMicrophoneLight } from "react-icons/pi";
import ChatMediaPopover from "@/components/molecules/ChatMediaPopover";

export default function ChatMessages({ selectedUser, messages }) {
  console.log(selectedUser, messages);

  return (
    <div className={classes.chatMessages}>
      <Container fluid>
        <Row className="h-100">
          <Col md={12} className="p-0">
            <div className={classes.chatHeader}>
              <div className={classes.chatHeaderLeft}>
                <div className={classes.chatHeaderImage}>
                  <Image
                    src={selectedUser?.photo ?? "/app-images/default-user.png"}
                    fill
                    alt="user-image"
                  />
                </div>
                <div className={classes.chatHeaderInfo}>
                  <h1>{selectedUser?.fullName}</h1>
                  <p className={classes.chatHeaderInfoText}>
                    Last seen 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} className="p-0">
            <div className={classes.chatMessagesContainer}>
              {messages?.map((message) => (
                <div className={classes.chatMessage}>
                  <p>{message?.message?.text}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col md={12} className="p-0">
            <Input
              placeholder="Write a message..."
              containerClass={classes.chatInput}
              leftIcon={<ChatMediaPopover />}
              rightIcon={
                <PiMicrophoneLight className={classes.microphoneIcon} />
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
