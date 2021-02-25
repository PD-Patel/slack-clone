import React from "react";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import InfoIcon from "@material-ui/icons/Info";

import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
function Chat() {
  const [theme] = useStateValue();
  return (
    <Container
      style={{
        backgroundColor:
          theme.theme === "dark"
            ? "rgb(26, 29, 33)"
            : theme.theme === "crystal"
            ? "white"
            : "white",
      }}
    >
      <ChatHeader
        style={{
          borderBottom:
            theme.theme === "dark"
              ? "1px solid rgba(232, 232, 232, 0.13)"
              : "1px solid lightgray",
        }}
      >
        <Right>
          <p
            className="channel__name"
            style={{ color: theme.theme === "dark" ? "white" : "black" }}
          >
            # general
          </p>
          <p className="add_topic_btn">Add a topic</p>
        </Right>
        <Left style={{ color: theme.theme === "dark" ? "white" : "black" }}>
          <GroupAddIcon />
          <Info>
            <InfoIcon />
          </Info>
        </Left>
      </ChatHeader>

      <MessageContainer>
        <ChatMessage
          avatar="https://randomuser.me/api/portraits/women/96.jpg"
          name="Allena joseph"
          message="So Pumped For The Day 5 of React Challenge "
        />

        <ChatMessage
          avatar="https://randomuser.me/api/portraits/men/29.jpg"
          name="Roberto Webb"
          message="Yeah Yeah, So pumped up "
        />
      </MessageContainer>

      <ChatInput />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  color: white;
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const ChatHeader = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(232, 232, 232, 0.13);
  padding-left: 20px;
  padding-right: 20px;
`;

const Right = styled.div`
  .channel__name {
    font-size: 15px;
    line-height: 22px;
    font-variant: common-ligatures;
    font-weight: 900;
    margin-bottom: 5px;
  }

  .add_topic_btn {
    font-family: Slack-Lato, appleLogo, sans-serif;
    font-size: 13px;
    font-variant: common-ligatures;
    line-height: 18px;
    text-decoration: rgb(29, 155, 209);
    word-spacing: 0px;
    color: #606060;
    cursor: pointer;
  }
`;
const Left = styled.div`
  margin-right: 30px;
  display: flex;
  width: 80px;
  font-size: 22px;
  justify-content: space-between;
`;

const Info = styled(InfoIcon)`
  font-size: 24px;
`;

const MessageContainer = styled.div``;
