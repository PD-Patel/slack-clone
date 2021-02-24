import React from "react";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import InfoIcon from "@material-ui/icons/Info";
function Chat() {
  const [theme, dispatch] = useStateValue();
  return (
    <Container
      style={{
        backgroundColor: theme.theme === "dark" ? "rgb(26, 29, 33)" : "white",
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
          <InfoIcon />
        </Left>
      </ChatHeader>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  color: white;
`;

const ChatHeader = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(232, 232, 232, 0.13);
`;

const Right = styled.div`
  margin-left: 20px;

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
    color: gray;
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
