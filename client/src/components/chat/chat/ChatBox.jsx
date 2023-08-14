import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountContext'
import { getConversation } from '../../../service/api'

const ChatBox = () => {

    const { person, account } = useContext(AccountContext)

    const [conversation, setConversation] = useState({});

    const getConversationDetails = async() => {
      const data = await getConversation({ senderId: account.sub, receiverId: person.sub })
      setConversation(data);
    }
    
    useEffect(() => {
      getConversationDetails();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [person.sub])
  return (
    <Box style={{height: '75%'}}>
        <ChatHeader person={person}/>
        <Messages person={person} conversation={conversation}/>
    </Box>
  )
}

export default ChatBox
