import React, { useContext } from 'react'
import { AppBar, Box, Toolbar } from "@mui/material";

// Components
import LoginDialog from './account/LoginDialog'
import styled from '@emotion/styled';
import { AccountContext } from '../context/AccountContext';
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`

const Header = styled(AppBar)`
    height: 125px;
    background-color: #00A884;
    box-shadow: none;
`

const LoginHeader = styled(AppBar)`
    height: 222px;
    background-color: #00bfa5;
    box-shadow: none;
`

const Messenger = () => {
  
  const {account} = useContext(AccountContext);

  return (
    <Component>
      {
        account ? 
        <>
         <Header>
            <Toolbar>

            </Toolbar>
        </Header>
        <ChatDialog/>
        </>
        : 
        <>
        <LoginHeader>
            <Toolbar>

            </Toolbar>
        </LoginHeader>
     <LoginDialog />
     </>
    }
    </Component>
  )
}

export default Messenger
