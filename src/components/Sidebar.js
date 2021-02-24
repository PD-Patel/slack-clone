import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import { sidebarItems, channels } from "../data/SidebarData";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [theme] = useStateValue();
  const MainChannelItem = styled.div`
    color: ${theme.theme === "ochin"
      ? "white"
      : theme.theme === "dark"
      ? "white"
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
        : "#350D36"};
    }
  `;

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
        : "#350D36"};
    }
  `;

  const ChannelsList = styled.div`
    color: ${theme.theme === "ochin"
      ? "white"
      : theme.theme === "dark"
      ? "white"
      : "rgb(188, 171, 188)"};
    margin-left: 10px;
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
      : "rgb(188, 171, 188)"};
  `;

  return (
    <Container
      style={{
        backgroundColor:
          theme.theme === "dark"
            ? "#19171D"
            : theme.theme === "ochin"
            ? "#2C3849"
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
              : "#3f0e40",
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
          <AddIcon />
        </NewChannelContainer>

        <ChannelsList>
          {channels.map((channel) => (
            <Channel># &nbsp;&nbsp;&nbsp;{channel.text}</Channel>
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
  margin-top: 10px;
`;
