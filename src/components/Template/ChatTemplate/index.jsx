"use client";
import SearchInput from "@/components/molecules/SearchInput";
import TitleHeader from "@/components/molecules/TitleHeader";
import ChatMessages from "@/components/organisms/ChatMessages";
import ChatRooms from "@/components/organisms/ChatRooms";
import { chatData } from "@/developmentContext/chatData";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ChatTemplate() {
  const [data, setData] = useState(chatData?.rooms);
  const [loading, setLoading] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState({
    roomSlug: "",
    selectedUser: null,
  });
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState(chatData?.messages);

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
          <ChatMessages
            selectedUser={selectedRoom?.selectedUser}
            messages={messages}
          />
        </Col>
      </Row>
    </Container>
  );
}
