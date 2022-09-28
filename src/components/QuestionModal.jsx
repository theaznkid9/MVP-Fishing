import React, {useState, useEffect, Component, useRef} from "react";
import styled from 'styled-components';
import { Modal, Box, Typography, Card, CardMedia, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';


const QuestionModal = ({fishData, setShowModal}) => {
  const answerNum = Math.floor(Math.random() * 4);
  const correctName = fishData[answerNum].name;
  const correctSize = fishData[answerNum].baglimit;
  const correctLimit = fishData[answerNum].sizelimit;
  const nameChoices = [];
  const baglimitChoices = [];
  const sizelimitChoices = [];
  for (let i = 0; i < 4; i++) {
    nameChoices.push(fishData[i].name);
    baglimitChoices.push(fishData[i].baglimit);
    sizelimitChoices.push(fishData[i].sizelimit);
  };

  console.log('CHOICES:', nameChoices, baglimitChoices, sizelimitChoices);

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <Modal open={true} onClose={() => {refreshPage()}}>
      <Box position='absolute' top='10%' left='12.5%' sx={{display: 'flex', width: 3/4, height: 4/5, border: 1, borderColor: 'gray', borderRadius: 2, bgcolor: '#E5DFDB'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'space-between', width: 5/11, height: 0.9, mt: 3, ml: 4}}>
        <Card sx={{width: 0.9, height: 0.6}}>
          <CardMedia
            component='img'
            image={fishData[answerNum].photos[Math.floor(Math.random() * 2)]}
            alt='fish'
            sx={{height: 1}}
            />
          </Card>
          <Card sx={{width: 0.9, height: 0.38, mt: 3}}>

          </Card>
      </Box>
        <Card sx={{display: 'flex', flexDirection: 'space-evenly', width: 7/15, height: 0.9, mt: 3}}>
          <Box sx={{display: 'flex', flexDirection: 'column', border: 1, m: 1}}>
            <Box sx={{m: 2}}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Identify the fish!</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  >
                  {nameChoices.map((option, index) => {
                    return <FormControlLabel value={option} control={<Radio />} label={option}/>
                  })}
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{m: 2}}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Identify the fish!</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  >
                  {nameChoices.map((option, index) => {
                    return <FormControlLabel value={option} control={<Radio />} label={option}/>
                  })}
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{m: 2}}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Identify the fish!</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  >
                  {nameChoices.map((option, index) => {
                    return <FormControlLabel value={option} control={<Radio />} label={option}/>
                  })}
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{border: 1, m: 1}}></Box>
        </Card>
      </Box>
    </Modal>
  );
}

export default QuestionModal;