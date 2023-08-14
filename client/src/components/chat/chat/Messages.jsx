import { Box, styled } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ChatFooter from "./ChatFooter";
import { AccountContext } from "../../../context/AccountContext";
import { getMessages, newMessage } from "../../../service/api";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const Component = styled(Box)`
  height: 78vh;
  overflow-y: scroll;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;
const Messages = ({ person, conversation }) => {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);

  const { account } = useContext(AccountContext);

  const getMessageDetails = async () => {
    let data = await getMessages(conversation._id);
    setMessages(data);
  };

  useEffect(() => {
    conversation._id && getMessageDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [person._id, conversation._id, newMessageFlag]);

  const sendText = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };

      await newMessage(message);

      setValue("");
      setNewMessageFlag(prev => !prev)
    }
  };
  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message) => (
            <Container>
              <Message message={message} />
            </Container>
          ))}
      </Component>
      <ChatFooter sendText={sendText} setValue={setValue} value={value} />
    </Wrapper>
  );
};

export default Messages;
