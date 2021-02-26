import React, { useState } from "react";
import styled from "styled-components";
import SlackBot from "../slackbot.png";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import "semantic-ui-css/semantic.min.css";
import { Dropdown, DropdownMenu } from "semantic-ui-react";
import { Dialog, DialogContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStateValue } from "../StateProvider";

function Header({ user, signOut }) {
  const [themeDialog, setThemeDialog] = useState(false);
  const [theme, dispatch] = useStateValue();
  const handleTheme = (color) => {
    dispatch({
      type: "SET_THEME",
      theme: color,
    });
  };

  return (
    <Container
      style={{
        background:
          theme.theme === "dark"
            ? "#121016"
            : theme.theme === "ochin"
            ? "#2C3849"
            : theme.theme === "crystal"
            ? "#E7717d"
            : theme.theme === "sweettreat"
            ? "#FFC2C0"
            : "#3f0e40",

        color: theme.theme === "sweettreat" ? "#7666A5" : "white",
      }}
    >
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search
            style={{
              backgroundColor:
                theme.theme === "ochin"
                  ? "rgb(59,70,86)"
                  : theme.theme === "dark"
                  ? "rgb(31,30,35)"
                  : theme.theme === "sweettreat"
                  ? "#F2B6B8"
                  : "",
              boxShadow:
                theme.theme === "dark"
                  ? "inset 0 0 0 1px rgb(66,65,69)"
                  : theme.theme === "ochin"
                  ? "inset 0 0 0 1px rgb(97,106,119)"
                  : "inset 0 0 0 1px rgb(104 74 104)",
            }}
          >
            <input type="text" placeholder="Search..." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>{user.name}</Name>
        <UserImage>
          {/* <img src="https://i.imgur.com/6VBx3io.png" alt="" /> */}
          <Dropdown
            trigger={
              <img
                src={
                  user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"
                }
                alt=""
              ></img>
            }
            icon={false}
          >
            <DropdownMenu direction="left">
              <Dropdown.Item text="Edit profile" />
              <Dropdown.Item text="View profile" />
              <Dropdown.Item
                text="Theme"
                onClick={() => setThemeDialog(true)}
              />
              <Dropdown.Divider />
              <Dropdown.Item text="Sign out of Hii" onClick={signOut} />
            </DropdownMenu>
          </Dropdown>
        </UserImage>
      </UserContainer>

      <ThemeContainer>
        <Dialog
          fullWidth="true"
          maxWidth="sm"
          open={themeDialog}
          style={{ backgroundColor: "transparent" }}
        >
          <ThemeDialogHeader>
            <h4>
              Change the appearance of Slack across all of your workspaces.
            </h4>
            <CloseIcon onClick={() => setThemeDialog(false)} />
          </ThemeDialogHeader>
          <DialogContent>
            <ThemeContent>
              <ThemeBar>
                <div
                  className="upper-part"
                  style={{
                    backgroundColor: "#3f0e40",
                    color: "white",
                  }}
                >
                  <div className="img-container">
                    <img src={SlackBot} alt="" />
                  </div>

                  <div className="text-container">
                    <h4>Slackbot</h4>
                    <p>You look nice today</p>
                  </div>
                </div>
                <div className="lower-part">
                  <input
                    type="radio"
                    name="color"
                    id="color"
                    onClick={() => handleTheme("light")}
                    checked={theme.theme === "light" ? true : false}
                  />
                  <p>Aubergine</p>
                </div>
              </ThemeBar>
              <ThemeBar>
                <div
                  className="upper-part"
                  style={{
                    backgroundColor: "#FFC2C0",
                    color: "white",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                >
                  <div className="img-container">
                    <img src={SlackBot} alt="" />
                  </div>

                  <div className="text-container">
                    <h4>Slackbot</h4>
                    <p>You look nice today</p>
                  </div>
                </div>
                <div
                  className="lower-part"
                  style={{
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <input
                    type="radio"
                    name="color"
                    id="color"
                    onClick={() => handleTheme("sweettreat")}
                    checked={theme.theme === "sweettreat" ? true : false}
                  />
                  <p>Sweet Treat</p>
                </div>
              </ThemeBar>
              <ThemeBar>
                <div
                  className="upper-part"
                  style={{
                    background: "#E7717d",
                    color: "white",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                >
                  <div className="img-container">
                    <img src={SlackBot} alt="" />
                  </div>

                  <div className="text-container">
                    <h4>Slackbot</h4>
                    <p>You look nice today</p>
                  </div>
                </div>
                <div
                  className="lower-part"
                  style={{
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <input
                    type="radio"
                    name="color"
                    id="color"
                    onClick={() => handleTheme("crystal")}
                    checked={theme.theme === "crystal" ? true : false}
                  />
                  <p>Light Pinkish</p>
                </div>
              </ThemeBar>
              <ThemeBar>
                <div
                  className="upper-part"
                  style={{
                    backgroundColor: "#2C3849",
                    color: "white",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                >
                  <div className="img-container">
                    <img src={SlackBot} alt="" />
                  </div>

                  <div className="text-container">
                    <h4>Slackbot</h4>
                    <p>You look nice today</p>
                  </div>
                </div>
                <div
                  className="lower-part"
                  style={{
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <input
                    type="radio"
                    name="color"
                    id="color"
                    onClick={() => handleTheme("ochin")}
                    checked={theme.theme === "ochin" ? true : false}
                  />
                  <p>Ochin</p>
                </div>
              </ThemeBar>

              <ThemeBar>
                <div
                  className="upper-part"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                  }}
                >
                  <div className="img-container">
                    <img src={SlackBot} alt="" />
                  </div>

                  <div className="text-container">
                    <h4>Slackbot</h4>
                    <p>You look nice today</p>
                  </div>
                </div>
                <div
                  className="lower-part"
                  style={{
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <input
                    type="radio"
                    name="color"
                    id="color"
                    onClick={() => handleTheme("dark")}
                    checked={theme.theme === "dark" ? true : false}
                  />
                  <p>Dark</p>
                </div>
              </ThemeBar>
            </ThemeContent>
          </DialogContent>
        </Dialog>
      </ThemeContainer>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: #350d36;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  box-shadow: 0 1px 0 0 rgb(255 255 255/ 10%);
`;

const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
`;
const SearchContainer = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  min-width: 400px;
`;
const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  input {
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  input:focus {
    outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;
const Name = styled.div`
  padding-right: 16px;
`;
const UserImage = styled.div`
  width: 28px !important;
  height: 28px !important;
  border: 2px solid white;
  border-radius: 3px;
  img {
    width: 100%;
  }

  .ui.dropdown > .left.menu {
    width: 300px;
  }
`;
const ThemeContainer = styled.div``;

const ThemeDialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 10px;
  border-bottom: 1px solid lightgray;

  h4 {
    font-size: 15px;
    font-weight: 400;
  }
`;

const ThemeContent = styled.div``;
const ThemeBar = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightsteelblue;
  width: fit-content;
  border-radius: 6px;
  margin-left: 20px;

  margin-top: 20px;
  margin-bottom: 20px;

  .upper-part {
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgray;
    height: 76px;
    width: 518px;

    .img-container {
      height: 36px;
      width: 36px;
      margin-left: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .text-container {
      display: flex;
      flex-direction: column;
      margin-left: 15px;

      h4 {
        margin-bottom: 5px;
      }
    }
  }

  .lower-part {
    display: flex;
    height: 50px;
    width: 518px;
    align-items: center;

    p {
      margin-left: 20px;
    }

    input {
      margin-left: 20px;
    }
  }
`;
