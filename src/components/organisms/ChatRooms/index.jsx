import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./ChatRooms.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";
import clsx from "clsx";
import BoxWrapper from "@/components/molecules/BoxWrapper";
import SearchInput from "@/components/molecules/SearchInput";
import { FaCamera, FaVideo } from "react-icons/fa6";

export default function ChatRooms({
  rooms,
  search,
  setSearch,
  setSelectedRoom,
}) {
  // const {user} = useSelector((state) => state.authReducer)
  const user = {
    _id: "1",
  };

  let currentUser = null;

  for (const room of rooms) {
    currentUser = room.users.find((item) => item._id === user?._id);

    if (currentUser || otherUser) break;
  }

  return (
    <BoxWrapper>
      <Container fluid>
        <Row className={classes.rowGap}>
          {currentUser && (
            <Col md={12} className="p-0">
              <div className={classes.userInfo}>
                <div
                  className={clsx(classes.profileImage, classes.userImageDiv)}
                >
                  <div className={classes.userImage}>
                    <Image
                      src={currentUser?.photo ?? "/app-images/default-user.png"}
                      fill
                      alt="user-image"
                    />
                  </div>
                  <div
                    className={clsx(
                      classes.statusDiv,
                      classes.userStatusDiv,
                      currentUser?.isOnline ? classes.active : classes.offline
                    )}
                  />
                </div>
                <div className={classes.userNameDiv}>
                  <p className={classes.userName}>{currentUser?.fullName}</p>
                  <p className={classes.status}>
                    {currentUser?.isOnline ? "Online" : "Offline"}
                  </p>
                </div>
              </div>
            </Col>
          )}
          <Col md={12} className="p-0">
            <SearchInput value={search} setValue={setSearch} />
          </Col>

          {rooms?.length > 0 ? (
            <Col md={12} className="p-0">
              <div className={classes.roomsContainer}>
                {rooms?.map((room, index) => {
                  const otherUser = room.users.find(
                    (u) => u?._id !== user?._id
                  );
                  return (
                    <div
                      key={index}
                      className={classes.room}
                      onClick={() =>
                        setSelectedRoom({
                          roomSlug: room.roomSlug,
                          selectedUser: otherUser,
                        })
                      }
                    >
                      <div className={classes.profileImage}>
                        <div className={classes.roomImage}>
                          <Image
                            src={
                              otherUser?.photo ?? "/app-images/default-user.png"
                            }
                            fill
                            alt="room-image"
                          />
                        </div>
                        <div
                          className={clsx(
                            classes.statusDiv,
                            classes.roomStatusDiv,
                            otherUser?.isOnline
                              ? classes.active
                              : classes.offline
                          )}
                        />
                      </div>
                      <div className={classes.roomInfo}>
                        {otherUser?.fullName && (
                          <p className={classes.roomName}>
                            {otherUser?.fullName}
                          </p>
                        )}
                        {room?.lastMessage?.message?.type !== "audio" && (
                          <div className={classes.mediaWithText}>
                            {room?.lastMessage?.message?.type === "video" && (
                              <FaVideo
                                size={14}
                                className={classes.mediaIcon}
                              />
                            )}
                            {room?.lastMessage?.message?.type === "image" && (
                              <FaCamera
                                size={14}
                                className={classes.mediaIcon}
                              />
                            )}
                            {room?.lastMessage?.message?.text && (
                              <p className={classes.roomLastMessage}>
                                {room?.lastMessage?.message?.text}
                              </p>
                            )}
                          </div>
                        )}

                        {room?.lastMessage?.message?.media &&
                          room?.lastMessage?.message?.type === "audio" && (
                            <div className={classes.roomLastMessageMedia}>
                              <Image
                                src={room?.lastMessage?.message?.media}
                                fill
                                alt="room-image"
                              />
                            </div>
                          )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Col>
          ) : (
            <Col md={12} className="p-0">
              <div className={classes.noRooms}>No rooms found</div>
            </Col>
          )}
        </Row>
      </Container>
    </BoxWrapper>
  );
}
