import { NearMe } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
function ChatMessage({ name, message, avatar }) {
  const [theme] = useStateValue();

  const Container = styled.div`
    display: flex;
    margin-top: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    margin-bottom: 20px;
    padding-right: 20px;
    align-items: flex-start;

    color: ${theme.theme === "dark" ? "white" : "black"};
    :hover {
      background-color: ${theme.theme === "dark" ? "#222529" : "#F8F8F8"};
    }
  `;
  return (
    <Container>
      <UserAvatar>
        <img src={avatar} alt="" />
        {/* https://randomuser.me/api/portraits/women/96.jpg */}
      </UserAvatar>
      <MessageContent>
        <Name>{name}</Name>
        <Text>{message}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage;

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  margin-top: 4px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;
const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-word;
  margin-left: 10px;
`;
const Name = styled.span`
  font-size: 15px;
  font-variant: common-ligatures;
  font-weight: 900;
  line-height: 22px;

  word-spacing: 0px;
`;
const Text = styled.span`
  margin-top: 3px;
  font-size: 13px;
  font-variant: common-ligatures;
  line-height: 22px;
  text-decoration: rgb(209, 210, 211);
  text-align: left;
  word-spacing: 0px;
`;
