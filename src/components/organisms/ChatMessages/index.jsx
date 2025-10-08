"use client";
import Input from "@/components/atoms/Input/Input";
import ChatMediaPopover from "@/components/molecules/ChatMediaPopover";
import clsx from "clsx";
import moment from "moment-timezone";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Col, Container, Row } from "react-bootstrap";
import { FaFileAlt } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import PhotoViewSingle from "../PhotoViewSingle/PhotoViewSingle";
import classes from "./ChatMessages.module.css";

export default function ChatMessages({
  selectedUser,
  messagesData = [],
  setMessages,
  messages,
}) {
  const router = useRouter();
  const user = { _id: "1" }; // Replace with Redux selector

  const onPickMedia = () => {
    // Create a file input element
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*,video/*,audio/*,.pdf,.doc,.docx,.txt"; // Accept various media types
    input.multiple = true; // Allow multiple file selection

    // Handle file selection
    input.onchange = (event) => {
      const files = Array.from(event.target.files);
      if (files.length > 0) {
        console.log("Selected files:", files);
        // Here you can process the selected files
        // For example, upload them or add them to the message
        files.forEach((file) => {
          console.log("File:", {
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified,
          });
        });
      }
    };

    // Trigger the file picker
    input.click();
  };

  // ===== Helper: Render media files =====
  const renderMediaItems = (mediaItems = []) => {
    return mediaItems.map((item, index) => {
      if (!item?.key) return null;

      switch (item.type) {
        case "image":
          return (
            <div key={index} className={classes.photoViewSingle}>
              <PhotoViewSingle src={item.key} />
            </div>
          );

        case "video":
          return (
            <div key={index} className={classes.videoViewSingle}>
              <video
                src={item.key}
                className={classes.chatMessageVideo}
                controls
              />
            </div>
          );

        case "document":
          return (
            <div
              key={index}
              className={classes.docRow}
              onClick={() => {
                router.push(item.key);
              }}
            >
              <FaFileAlt className={classes.docIcon} />
              <span className={classes.docName}>
                {item.documentName || item.key.split("/").pop()}
              </span>
            </div>
          );

        case "link":
          return (
            <a
              key={index}
              href={item.key}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.linkPreview}
            >
              {item.key}
            </a>
          );

        default:
          return null;
      }
    });
  };

  // ===== Helper: Render a single message =====
  const renderMessage = (message) => {
    const isSender = message?.from?._id === user?._id;
    const msg = message?.message || {};

    return (
      <div
        key={message._id}
        className={clsx(
          classes.chatMessage,
          isSender ? classes.chatMessageSender : classes.chatMessageReceiver
        )}
      >
        <div className={classes.chatMessageContent}>
          {/* Media Section */}
          {msg.media?.length > 0 && (
            <div className={classes.chatMessageMedia}>
              {renderMediaItems(msg.media)}
            </div>
          )}

          {/* Text Section */}
          {msg.text && <p className={classes.chatMessageText}>{msg.text}</p>}

          {/* Timestamp */}
          <p className={classes.chatMessageTime}>
            {moment(message.createdAt).format("HH:mm")}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.chatMessages}>
      <Container fluid>
        <Row className="h-100">
          {/* ===== Chat Header ===== */}
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
                    {selectedUser?.isOnline
                      ? "Online"
                      : `Last seen ${moment(selectedUser?.lastSeen).fromNow()}`}
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* ===== Chat Messages ===== */}
          <Col md={12} className="p-0">
            <div className={classes.chatMessagesContainer}>
              {messagesData?.length > 0 ? (
                messagesData?.map(renderMessage)
              ) : (
                <div className={classes.noMessages}>No messages yet</div>
              )}
            </div>
          </Col>

          {/* ===== Chat Input ===== */}
          <Col md={12} className="p-0">
            <Input
              placeholder="Write a message..."
              containerClass={classes.chatInput}
              leftIcon={<ChatMediaPopover onPickMedia={onPickMedia} />}
              rightIcon={<GrSend className={classes.sendIcon} />}
              value={messages}
              setValue={(e) => setMessages(e)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
