import React, {useState, useEffect, Component, useRef} from "react";
import { Modal, Box, Typography, Card, CardMedia, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button} from '@mui/material';
import Result from './Result.jsx';
import _ from 'underscore';


const QuestionModal = ({fishData, setShowModal}) => {
  const answerNum = useRef(Math.floor(Math.random() * 4));
  let bagNum = useRef(((Math.floor(Math.random() * 6) + 1) * 4));
  let sizeNum = useRef((Math.floor(Math.random() * 9) + 8));
  const photoNum = useRef(Math.floor(Math.random() * 2));
  const correctName = fishData[answerNum.current].name;
  const correctSize = fishData[answerNum.current].baglimit;
  const correctLimit = fishData[answerNum.current].sizelimit;
  const [nameGuess, setNameGuess] = useState('');
  const [sizeGuess, setSizeGuess] = useState('');
  const [bagGuess, setBagGuess] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [nameCorrect, setNameCorrect] = useState(false);
  const [sizeCorrect, setSizeCorrect] = useState(false);
  const [bagCorrect, setBagCorrect] = useState(false);
  const nameChoices = [];
  const baglimitChoices = [];
  const sizelimitChoices = [];
  for (let i = 0; i < 4; i++) {
    nameChoices.push(fishData[i].name);
    baglimitChoices.push(fishData[i].baglimit);
    sizelimitChoices.push(fishData[i].sizelimit);
  };
  const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index);

  const replaceBagDuplicates = (arr) => {
    let duplicates = toFindDuplicates(arr);
    let temp = bagNum.current;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (count = duplicates.length) {
        break;
      }
      if (arr[i] === duplicates[0]) {
        arr[i] = temp + ' / Day';
        temp++;
        count++;
      }
    }
  }


  const replaceSizeDuplicates = (arr) => {
    let duplicates = toFindDuplicates(arr);
    let temp = sizeNum.current;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (count === duplicates.length) {
          break;
        }
        if (arr[i] === duplicates[0]) {
          arr[i] = temp + '" TL';
          temp++;
          count++;
        }
    }
    console.log(arr);
  }

  replaceBagDuplicates(baglimitChoices, bagNum);
  replaceBagDuplicates(baglimitChoices, bagNum);
  replaceBagDuplicates(baglimitChoices, bagNum);
  replaceSizeDuplicates(sizelimitChoices, sizeNum);
  replaceSizeDuplicates(sizelimitChoices, sizeNum);
  replaceSizeDuplicates(sizelimitChoices, sizeNum);

  const refreshPage = () => {
    window.location.reload(false);
  }

  const handleNameChange = (e) => {
    setNameGuess(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSizeGuess(e.target.value);
  };

  const handleBagChange = (e) => {
    setBagGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    setSubmitted(true);
    if (nameGuess === correctName) {
      setNameCorrect(true);
    }
    if (sizeGuess === correctSize) {
      setSizeCorrect(true);
    }
    if (bagGuess === correctLimit) {
      setNBagCorrect(true);
    }
  };

  return (
      <Modal open={true} onClose={() => {refreshPage()}}>
        <Box position='absolute' top='10%' left='12.5%' sx={{display: 'flex', overflow: 'scroll', width: 3/4, height: 4/5, border: 1, borderColor: 'gray', borderRadius: 2, bgcolor: '#E5DFDB'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignContent: 'space-between', width: 7/11, height: 0.9, mt: 3, ml: 4}}>
          <Card sx={{width: 0.9, height: 0.6}}>
            <CardMedia
              component='img'
              image={fishData[answerNum.current].photos[photoNum.current]}
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
                    sx={{height: 0.5, width: 1}}
                    onChange={(e) => handleNameChange(e)}
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
                    onChange={(e) => handleSizeChange(e)}
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
                    sx={{height: 0.5, width: 0.8}}
                    onChange={(e) => handleBagChange(e)}
                    >
                    {baglimitChoices.map((option, key) => {
                      return <FormControlLabel value={option} key={key} control={<Radio />} label={option}/>
                    })}
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box>
                <Button variant='contained' size='medium' sx={{mb: 3}} onClick={(e) => {handleSubmit(e)}}>Submit!</Button>
                <Typography>*FL: Fork Length  &nbsp; &nbsp; &nbsp;  *TL: Tail Length</Typography>
              </Box>
            </Box>
            <Box sx={{border: 1, mt: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 0.65, width: 0.2}}>
              {submitted && <Result isCorrect={nameCorrect} correctAnswer={correctName}/>}
              {submitted && <Result isCorrect={sizeCorrect} correctAnswer={correctSize}/>}
              {submitted && <Result isCorrect={bagCorrect} correctAnswer={correctLimit}/>}
            </Box>
          </Card>
        </Box>
    </Modal>
  );
}

export default QuestionModal;