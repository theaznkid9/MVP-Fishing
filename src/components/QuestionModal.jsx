import React, {useState, useEffect, Component, useRef} from "react";
import styled from 'styled-components';
import { Modal, Box, Typography, Card, CardMedia, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, createTheme, ThemeProvider, Button} from '@mui/material';


const theme = createTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiCard: {
      // Name of the rule
      root: {
        // Some CSS
        overflow: 'scroll',
      },
    },
  },
});
theme.typography.h3 = {
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};


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
  const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index);
  const duplicateSize = toFindDuplicates(sizelimitChoices);

  const replaceBagDuplicates = (arr) => {
    let duplicates = toFindDuplicates(arr);
    for (let i = 0; i < duplicates.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === duplicates[i]) {
          arr[j] = ((Math.floor(Math.random() * 6) + 1) * 5) + ' / Day';
          break;
        }
      }
    }
  }

  const replaceSizeDuplicates = (arr) => {
    let duplicates = toFindDuplicates(arr);
    for (let i = 0; i < duplicates.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === duplicates[i]) {
          arr[j] = (Math.floor(Math.random() * 9) + 8) + '" FL';
          break;
        }
      }
    }
  }

  while (toFindDuplicates(baglimitChoices).length > 0) {
    replaceBagDuplicates(baglimitChoices);
  }
  while (toFindDuplicates(sizelimitChoices).length > 0) {
    replaceSizeDuplicates(sizelimitChoices);
  }

  console.log('CHOICES:', nameChoices, baglimitChoices, sizelimitChoices);

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <Modal open={true} onClose={() => {refreshPage()}}>
      <Box position='absolute' top='10%' left='12.5%' sx={{display: 'flex', overflow: 'scroll', width: 3/4, height: 4/5, border: 1, borderColor: 'gray', borderRadius: 2, bgcolor: '#E5DFDB'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'space-between', width: 7/11, height: 0.9, mt: 3, ml: 4}}>
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
        <Card sx={{display: 'flex', flexDirection: 'space-evenly', width: 4/11, height: 0.9, mt: 3, ml: -7}}>
          <Box sx={{width: 0.7, display: 'flex', m: 2, flexDirection: 'column', alignContent: 'center'}}>
            <Box sx={{height: 0.2, width: 0.95, m: 1, display: 'flex', flexWrap: 'wrap', flexGrow: 1, flexShrink: 1,  flex: 'auto'}}>
              <FormControl >
                  <FormLabel id="demo-radio-buttons-group-label">
                    Identify the fish
                  </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  sx={{height: 0.5}}
                  >
                  {nameChoices.map((option, key) => {
                    return <FormControlLabel value={option} key={key}  control={<Radio/>} label={option}/>
                  })}
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{height: 0.2, width: 0.95, m: 1, display: 'flex', flexWrap: 'wrap', flexGrow: 1, flexShrink: 1,  flex: 'auto'}}>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  What is the current size limit?
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  sx={{height: 0.5, width: 0.8}}
                  >
                  {sizelimitChoices.map((option, key) => {
                    return <FormControlLabel value={option} key={key} control={<Radio />} label={option}/>
                  })}
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{height: 0.2, width: 0.95, m: 1, display: 'flex', flexWrap: 'wrap', flexGrow: 1, flexShrink: 1,  flex: 'auto'}}>
              <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    What is the current bag limit per person?
                  </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  sx={{height: 0.5}}
                  >
                  {baglimitChoices.map((option, key) => {
                    return <FormControlLabel value={option} key={key} control={<Radio />} label={option}/>
                  })}
                </RadioGroup>
              </FormControl>
            </Box>
            <Box>
              <Button variant='contained' size='medium' sx={{mb: 3}}>Submit!</Button>
              <Typography>*FL: Fork Length  &nbsp; &nbsp; &nbsp;  *TL: Tail Length</Typography>
            </Box>
          </Box>
          <Box sx={{border: 1, m: 1}}>
            {/* answer stuff here */}
          </Box>
        </Card>
      </Box>
    </Modal>
  );
}

export default QuestionModal;