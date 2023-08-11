import React from 'react'
import { AppBar, Box, Toolbar } from "@mui/material";

// Components
import LoginDialog from './account/LoginDialog'
import styled from '@emotion/styled';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`

const Header = styled(AppBar)`
    height: 222px;
    background-color: #00bfa5;
    box-shadow: none;
`

const Messenger = () => {
  return (
    <Component>
        <Header>
            <Toolbar>

            </Toolbar>
        </Header>
     <LoginDialog />
    </Component>
  )
}

export default Messenger
