import React, { useContext, useEffect, useState } from "react";
import { getUsers } from "../../../service/api";
import { Box, Divider, styled } from "@mui/material";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountContext";

const Component = styled(Box)`
  height: 81vh;
  overflow: overlay;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background: #e9edef;
  opacity: 0.6;
`;

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);

  const { account, socket, setActiveUsers } = useContext(AccountContext);
  const fetchData = async () => {
    const response = await getUsers();
    const filteredData = response.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(filteredData);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account]);
  return (
    <Component>
      {users.map(
        (user) =>
          user.sub !== account.sub && (
            <>
              <Conversation key={user._id} user={user} />
              <StyledDivider />
            </>
          )
      )}
    </Component>
  );
};

export default Conversations;
