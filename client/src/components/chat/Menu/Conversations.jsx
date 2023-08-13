import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../../service/api'
import {Box, Divider, styled} from '@mui/material';
import Conversation from './Conversation';
import { AccountContext } from '../../../context/AccountContext';


const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background: #e9edef;
    opacity: 0.6;
`;
const Conversations = () => {

    const [users, setUsers] = useState([]);

    const {account} = useContext(AccountContext)
    const fetchData = async() => {
        const response = await getUsers();
        setUsers(response);
    }
    useEffect(() => {   
        fetchData();
    }, [])
    // console.log(users);
  return (
    <Component>
        {
            users.map((user, index) => (
                user.sub !== account.sub &&
                <>
                <Conversation key={index} user={user} />
                <StyledDivider />
                </>
            ))
        }
    </Component>
  )
}

export default Conversations
