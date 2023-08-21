import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { formatDate, downloadMedia } from '../../../utils/CommonUtils';
import { Download } from '@mui/icons-material';
import { iconPDF, iconWord } from '../../../constants/data';

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
    {checkFile(message)}
    <Time>
        <StyledDownloadIcon fontSize='small' onClick={(e) => downloadMedia(e, message.text)}/>
        {formatDate(message.createdAt)}</Time>
   </Box>
   </>
  )
}


const checkFile = (message) => {
    if(message?.text?.includes('.pdf')){
        return (
        <Box style={{ display: 'flex' }}>
            <StyledPdfIcon src={iconPDF} alt="pdf" />
            <Typography style={{ fontSize: '14px', paddingRight: '10px' }}>{message.text.split('-').pop()}</Typography>
        </Box>)
    }
    else if (message?.text?.includes('.docx')) {
        return (
        <Box style={{ display: 'flex' }}>
            <StyledPdfIcon src={iconWord} alt="pdf" />
            <Typography style={{ fontSize: '14px', paddingRight: '10px' }}>{message.text.split('-').pop()}</Typography>
        </Box>)
    }
    else if (message?.text?.includes('.gif')) {
        return (
        <Box style={{ display: 'flex' }}>
            <Image src={message?.text} alt={message.text} />
        </Box>)
    }
    else if (message?.text?.includes('.mp3')) {
        return (
        <Box>
            <audio controls>
            <source src={message?.text} type="audio/ogg"/>
            </audio>
        </Box>)
    }
    else if (message?.text?.includes('.mp4')) {
        return (
        <Box style={{ display: 'flex' }}>
            <video width="320" height="fit" autoplay="false" style={{borderRadius: '10px'}} controls>
                <source src={message?.text} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </Box>)
    }
    else {
        return (<Image src={message.text} alt={message.text} />)
    }
}
export default ImageMessage
