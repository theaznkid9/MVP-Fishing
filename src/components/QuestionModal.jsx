import React, {useState, useEffect, Component, useRef} from "react";
import styled from 'styled-components';
import { Modal, Box, Typography, Card, CardMedia } from '@mui/material';


const QuestionModal = ({fishData, setShowModal}) => {

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <Modal open={true} onClose={() => {refreshPage()}}>
      <Box position='absolute' top='10%' left='12.5%' sx={{width: 3/4, height: 4/5, border: 1, borderColor: 'gray', borderRadius: 2, bgcolor: '#E5DFDB'}}>
        <Card sx={{width: 1/2, height: 0.6, mt: 11, ml: 2}}>
          <CardMedia
            component='img'
            height='.99'
            image='https://i0.wp.com/mexican-fish.com/wp-content/uploads/F705-Atlantic-Spadefish-3.jpg?resize=570%2C401&ssl=1'
            alt='fish'
          />
        </Card>
        <Card sx={{width: 1/2, height: 0.6, mt: 11, ml: 2}}>
          <CardMedia
            component='img'
            height='.99'
            image='https://i0.wp.com/mexican-fish.com/wp-content/uploads/F705-Atlantic-Spadefish-3.jpg?resize=570%2C401&ssl=1'
            alt='fish'
          />
        </Card>
      </Box>
    </Modal>
  );
}

export default QuestionModal;