import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItems } from "../data/SidebarData";
import { useStateValue } from "../StateProvider";
import db from "../firebase";

function Sidebar({ rooms }) {
  const [theme] = useStateValue();
  const MainChannelItem = styled.div`
    color: ${theme.theme === "ochin"
      ? "white"
      : theme.theme === "dark"
      ? "white"
      : theme.theme === "crystal"
      ? "black"
      : theme.theme === "sweettreat"
      ? "#4A154B"
      : "rgb(188, 171, 188)"};
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    cursor: pointer;
    :hover {
      background: ${theme.theme === "ochin"
        ? "#6698C8"
        : theme.theme === "dark"
        ? "#1264A3"
        : theme.theme === "crystal"
        ? "white"
        : theme.theme === "sweettreat"
        ? "#FFFFFF"
        : "#350D36"};
    }
  `;
  // rgba(21,24,52,0.1)

  const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
      background: ${theme.theme === "ochin"
        ? "#6698C8"
        : theme.theme === "dark"
        ? "#1264A3"
        : theme.theme === "crystal"
        ? "white"
        : theme.theme === "sweettreat"
        ? "#FFFFFF"
        : "#350D36"};
    }
  `;

  const ChannelsList = styled.div`
    color: ${theme.theme === "ochin"
      ? "white"
      : theme.theme === "dark"
      ? "white"
      : theme.theme === "crystal"
      ? "black"
      : theme.theme === "sweettreat"
      ? "#4A154B"
      : "rgb(188, 171, 188)"};
  `;

  const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;

    color: ${theme.theme === "ochin"
      ? "white"
      : theme.theme === "dark"
      ? "white"
      : theme.theme === "crystal"
      ? "black"
      : theme.theme === "sweettreat"
      ? "#4A154B"
      : "rgb(188, 171, 188)"};
  `;

  const addChannel = () => {
    const promptName = prompt("Enter Channel Name");

    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };

  return (
    <Container
      style={{
        background:
          theme.theme === "dark"
            ? "#19171D"
            : theme.theme === "ochin"
            ? "#2C3849"
            : theme.theme === "crystal"
            ? "rgba(21,24,52,0.1)"
            : theme.theme === "sweettreat"
            ? "#FFEEED"
            : "#3f0e40",
      }}
    >
      <WorkspacContainer
        style={{
          borderBottom:
            theme.theme === "dark"
              ? "0.1px solid #2C3849"
              : theme.theme === "ochin"
              ? "0.1px solid gray"
              : theme.theme === "crystal"
              ? "0.1px solid gray"
              : theme.theme === "sweettreat"
              ? "0.1px solid lightgray"
              : "#3f0e40",

          color:
            theme.theme === "crystal"
              ? "black"
              : theme.theme === "sweettreat"
              ? "#4A154B"
              : "white",
        }}
      >
        <Name>Patel Pradhuman</Name>
        <NewMessage>
          <AddCircleOutlineIcon
            style={{
              color:
                theme.theme === "dark"
                  ? "#19171D"
                  : theme.theme === "ochin"
                  ? "#2C3849"
                  : theme.theme === "sweettreat"
                  ? "#4A154B"
                  : "#3f0e40",
            }}
          />
        </NewMessage>
      </WorkspacContainer>

      <MainChannels>
        {sidebarItems?.map((item) => (
          <MainChannelItem>
            {item.icon}
            {item.text}
          </MainChannelItem>
        ))}
        <MainChannelItem>
          <AddCircleOutlineIcon />
          Add
        </MainChannelItem>
      </MainChannels>

      <ChannelsContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={addChannel} />
        </NewChannelContainer>

        <ChannelsList>
          {rooms?.map((channel) => (
            <Channel># &nbsp;{channel.name}</Channel>
          ))}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background-color: #3f0e40;
  border-right: 1px solid rgba(232, 232, 232, 0.13);
`;

const WorkspacContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;
const Name = styled.div``;
const NewMessage = styled.div`
  color: #3f0e40;
  fill: #3f0e40;
  background-color: white !important;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  padding-top: 10px;
`;
