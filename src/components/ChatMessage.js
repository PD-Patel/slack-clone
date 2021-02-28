import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
function ChatMessage({ name, message, avatar, timestamp, file, videos }) {
  const [theme] = useStateValue();

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 20px;
    margin-bottom: 20px;
    padding-right: 20px;

    color: ${theme.theme === "dark" ? "white" : "black"};
    :hover {
      background-color: ${theme.theme === "dark" ? "#222529" : "#F8F8F8"};
    }
  `;

  const MessageData = styled.div`
    display: flex;
    align-items: flex-start;
  `;
  return (
    <Container>
      <MessageData>
        <UserAvatar>
          <img src={avatar} alt="" />
          {/* https://randomuser.me/api/portraits/women/96.jpg */}
        </UserAvatar>
        <MessageContent>
          <Name>
            {name}
            <span>{new Date(timestamp.toDate()).toUTCString()}</span>
          </Name>
          <Text>{message}</Text>
        </MessageContent>
      </MessageData>
      {file.length > 0 && (
        <FileContent>
          {file.length > 0 &&
            file.map((f) => (
              <Content>
                <img src={f} alt="something went wrong" />
              </Content>
            ))}
        </FileContent>
      )}
      {videos.length > 0 && (
        <FileContent>
          {videos.length > 0 &&
            videos.map((f) => (
              <Content>
                <video src={f} width="400px" height="300px" controls></video>
              </Content>
            ))}
        </FileContent>
      )}
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

  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97, 96, 97);
    font-size: 13px;
  }
`;
const Text = styled.span`
  margin-top: 3px;
  font-size: 16px;
  font-variant: common-ligatures;
  line-height: 22px;
  text-decoration: rgb(209, 210, 211);
  text-align: left;
  word-spacing: 0px;
`;

const FileContent = styled.div`
  margin-top: 10px;
  margin-left: 20px;
  display: grid;
  grid-template-columns: repeat(3, 20vw);
  grid-template-rows: 1fr;
  grid-gap: 10px;
`;

const Content = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;
