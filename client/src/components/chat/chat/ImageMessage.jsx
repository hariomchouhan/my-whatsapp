import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { formatDate, downloadMedia } from '../../../utils/CommonUtils';
import { Download } from '@mui/icons-material';
import { iconPDF } from '../../../constants/data';

const Image = styled('img')({
    width: 300,
    height: '100%',
    objectFit: 'cover',
});

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break: keep-all;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const StyledDownloadIcon = styled(Download)`
    margin-right: 10px;
    border: 1px solid grey;
    border-radius: 50%;
    cursor: pointer;
`;

const StyledPdfIcon = styled('img')({
    width: 80
})
const ImageMessage = ({ message }) => {
  return (
   <>
   <Box style={{position: 'relative'}}>
    {
        message?.text?.includes('.pdf') ?
        <Box style={{ display: 'flex' }}>
            <StyledPdfIcon src={iconPDF} alt="pdf" />
            <Typography style={{ fontSize: '14px', paddingRight: '10px' }}>{message.text.split('-').pop()}</Typography>
        </Box>
        : 
        <Image src={message.text} alt={message.text} />
    }
    <Time>
        <StyledDownloadIcon fontSize='small' onClick={(e) => downloadMedia(e, message.text)}/>
        {formatDate(message.createdAt)}</Time>
   </Box>
   </>
  )
}

export default ImageMessage
