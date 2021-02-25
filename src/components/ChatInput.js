import React from "react";
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { useStateValue } from "../StateProvider";
function ChatInput() {
  const [theme] = useStateValue();

  const InputContainer = styled.div`
    border-radius: 4px;
    form {
      display: flex;
      height: 42px;
      align-items: center;
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
      <InputContainer>
        <form action="">
          <input type="text" placeholder="Send a message" />
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

          <EmojiButton>
            <Emoji />
          </EmojiButton>
          <AttachButton>
            <Attach />
          </AttachButton>

          <SendButton>
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
  height: 90px;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-top: 5px;
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

  .MuiSvgIcon-root {
    width: 18px;
  }
`;
const FlashIcon = styled(FlashOnIcon)`
  color: gray;
`;
const SendButton = styled.div`
  background: #1264a3;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 18px;
  }
`;

const Send = styled(SendIcon)`
  color: #d9d9d9;
`;

const EmailButton = styled.div`
  margin-right: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiSvgIcon-root {
    width: 18px;
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

  .MuiSvgIcon-root {
    width: 18px;
  }
  margin-right: 10px;
`;
const Emoji = styled(SentimentSatisfiedIcon)`
  color: gray;
`;
const AttachButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  .MuiSvgIcon-root {
    width: 18px;
  }
  margin-right: 10px;
`;
const Attach = styled(AttachFileIcon)`
  color: gray;
`;
