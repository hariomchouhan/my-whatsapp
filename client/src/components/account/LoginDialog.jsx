import { Box, Dialog, List, ListItem, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { qrCodeImage } from '../../constants/data'
import styled from '@emotion/styled'
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { AccountContext } from '../../context/AccountContext';
import { addUser } from '../../service/api';


const Component = styled(Box)`
    display: flex;
    justify-content: space-between;
`;

const Container = styled(Box)`
    padding: 56px 0px 56px 56px;
`;

const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 50px 0 0px'
});

const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;
`;

const StyledList = styled(List)`
    & > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '76%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
}

const LoginDialog = () => {

    const {setAccount} = useContext(AccountContext);
    const onLoginSuccess = async(res) => {
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }
    const onLoginError = (res) => {
        console.log('Login Failed', res);
    }
  return (
    <Dialog 
    open={true}
    PaperProps={{ sx: dialogStyle}}
    hideBackdrop={true}
    >
        <Component>
            <Container>
                <Title>Use WhatsApp on your computer</Title>
                <StyledList>
                    <ListItem>1. Open WhatsApp on your phone</ListItem>
                    <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                    <ListItem>3. Tap on Link a device</ListItem>
                    <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                </StyledList>
            </Container>
            <Box style={{ position: "relative"}}>
                <QRCode src={qrCodeImage} alt="QR code" />
                <Box style={{ position: "absolute", top: "50%", transform: 'translateX(25%)' }}>
                    <GoogleLogin 
                    onSuccess={onLoginSuccess}
                    onError={onLoginError}
                    />
                </Box>
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog
