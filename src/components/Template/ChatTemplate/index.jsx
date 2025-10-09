"use client";
import BoxWrapper from "@/components/molecules/BoxWrapper";
import NoDataFound from "@/components/atoms/NoDataFound/NoDataFound";
import TitleHeader from "@/components/molecules/TitleHeader";
import ChatMessages from "@/components/organisms/ChatMessages";
import ChatRooms from "@/components/organisms/ChatRooms";
import { chatData } from "@/developmentContext/chatData";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./ChatTemplate.module.css";

export default function ChatTemplate() {
  const [data, setData] = useState(chatData?.rooms);
  const [loading, setLoading] = useState("");
  const [selectedRoom, setSelectedRoom] = useState({
    roomSlug: "",
    selectedUser: null,
  });
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState("");

  return (
    <Container fluid>
      <Row>
        <Col lg={12} className="p-0">
          <TitleHeader title="Chat" />
        </Col>
        <Col md={4}>
          <ChatRooms
            rooms={data}
            setSelectedRoom={setSelectedRoom}
            setSearch={setSearch}
            search={search}
          />
        </Col>
        <Col md={8}>
          {selectedRoom?.selectedUser && selectedRoom?.roomSlug ? (
            <ChatMessages
              selectedUser={selectedRoom?.selectedUser}
              messagesData={chatData?.messages}
              setMessages={setMessages}
              messages={messages}
            />
          ) : (
            <BoxWrapper boxWrapperClass={classes.boxWrapper}>
              <NoDataFound
                title="No Chat Selected"
                subtitle="Select a room to start chatting"
                image="/app-images/chat.png"
                size="small"
              />
            </BoxWrapper>
          )}
        </Col>
      </Row>
    </Container>
  );
}
