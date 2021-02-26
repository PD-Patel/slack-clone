import React, { useState } from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Picker from "emoji-picker-react";
import { useStateValue } from "../StateProvider";
import db, { storage } from "../firebase";
import logo from "../logo.png";
function ChatInput({ sendMessage }) {
  const [theme] = useStateValue();

  const [emojiBoxOpen, setEmojiBoxOpen] = useState(false);
  const [attachOpen, setAttachOpen] = useState(false);

  const [fileUrl, setFileUrl] = useState([]);
  const [messageData, setMessageData] = useState({
    message: "",
    files: [],
  });
  const onEmojiClick = (event, emojiObject) => {
    setMessageData({
      message: messageData.message + emojiObject.emoji,
      files: fileUrl,
    });
  };

  const send = (e) => {
    e.preventDefault();

    if (fileUrl.length === 1) {
      setMessageData({
        message: messageData.message,
        files: fileUrl,
      });

      sendMessage(messageData);

      setFileUrl([]);
      setMessageData({
        message: "",
        files: [],
      });
    }
    // My slack Clone has features like emojis and you can only attach image with attach icon.
    // There is some bug in my input tag of message it doesn't work properly. Can you help me to solve the problem ?
    if (fileUrl.length > 1) {
      setMessageData({
        message: messageData.message,
        files: fileUrl,
      });

      sendMessage(messageData);

      setFileUrl([]);
      setMessageData({
        message: "",
        files: [],
      });
    }
    if (fileUrl.length === 0) {
      setMessageData({
        message: messageData.message,
        files: fileUrl,
      });
      sendMessage(messageData);
      setMessageData({
        message: "",
        files: [],
      });
    }
  };

  const onfileChange = async (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif"
    ) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      const link = await fileRef.getDownloadURL();
      setFileUrl((files) => [...files, link]);
      await setMessageData({
        message: messageData.message,
        files: [...messageData.files, link],
      });
    } else {
      alert("please select image file only");
    }
  };
  // Attached Images

  const InputContainer = styled.div`
    border-radius: 4px;
    margin-top: 10px;

    form {
      display: flex;
      flex-direction: column;
      height: fit-content;
      padding-bottom: 10px;
      border-bottom: 1px solid lightgray;

      input {
        flex: 1;
        border: none;
        font-size: 15px;
        font-variant: none;
        line-height: 22px;
        text-decoration: rgb(29, 28, 29);
        text-align: left;
        white-space: pre-wrap;
        word-spacing: 0px;
        background-color: transparent;
        color: ${theme.theme === "dark" ? "white" : "black"};

        ::placeholder {
          color: ${theme.theme === "dark" ? "lightblue" : "#051a5f"};
          font-weight: 500;
          font-size: 14px;
        }
      }

      input:focus {
        outline: none;
      }
    }
  `;
  return (
    <Container>
      {emojiBoxOpen && <Picker onEmojiClick={onEmojiClick}></Picker>}
      {attachOpen && (
        // <input onChange={onFileChange} className="attach__file" type="file" />

        <input
          className="attach__file"
          type="file"
          title=""
          accept="image/*"
          onChange={(e) => {
            onfileChange(e);
            setAttachOpen(!attachOpen);
          }}
        />
      )}
      <InputContainer>
        <form>
          <input
            type="text"
            placeholder="Send a message"
            onChange={(e) =>
              setMessageData({
                message: e.target.value,
                files: fileUrl,
              })
            }
            value={messageData.message}
          />

          {fileUrl.length > 0 && (
            <AttachFiles>
              {fileUrl?.map((url) => (
                <Content>
                  <img src={url} alt="" />
                </Content>
              ))}
            </AttachFiles>
          )}
        </form>
      </InputContainer>

      <ButtonContainer>
        <FlashButton>
          <FlashIcon />
        </FlashButton>
        <RightSideButtons>
          <EmailButton>
            <Email />
          </EmailButton>

          <EmojiButton onClick={() => setEmojiBoxOpen(!emojiBoxOpen)}>
            <Emoji />
          </EmojiButton>
          <AttachButton onClick={() => setAttachOpen(!attachOpen)}>
            <Attach />
          </AttachButton>

          <SendButton type="submit" onClick={send}>
            <Send />
          </SendButton>
        </RightSideButtons>
      </ButtonContainer>
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 24px;
  border: 2px solid #1264a3;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  border-radius: 8px;
  height: fit-content;

  position: relative;
  .emoji-picker-react {
    position: absolute;
    right: 10px;
    bottom: 50px;
  }
  .attach__file {
    position: absolute;
    right: 10px;
    bottom: 50px;
    width: 120px;
    color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
`;

const AttachFiles = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-top: 10px;
`;
const Content = styled.div`
  width: 100px;
  border: 1px solid lightgray;
  margin-right: 5px;
  img {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

const RightSideButtons = styled.div`
  display: flex;
  align-items: center;
`;

const FlashButton = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 18px;

    :hover {
      color: #1264a3;
    }
  }
`;
const FlashIcon = styled(FlashOnIcon)`
  color: gray;
`;
const SendButton = styled.button`
  background: #1264a3;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  border: none;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 22px;
  }
`;

const Send = styled(SendIcon)`
  color: #d9d9d9;
`;

const EmailButton = styled.div`
  margin-right: 15px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 22px;
    :hover {
      color: #1264a3;
    }
  }
`;

const Email = styled(AlternateEmailIcon)`
  color: gray;
`;
const EmojiButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .MuiSvgIcon-root {
    width: 22px;
  }
  margin-right: 15px;
`;
const Emoji = styled(InsertEmoticonIcon)`
  color: gray;
  :hover {
    fill: darkorange;
  }
`;
const AttachButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 22px;
    :hover {
      color: #1264a3;
    }
  }
  margin-right: 15px;
`;
const Attach = styled(AttachFileIcon)`
  color: gray;
`;
