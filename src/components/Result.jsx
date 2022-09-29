import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';
import check from '../assets/Green-Check-Mark-Transparent-Background.png';
import rex from '../assets/redx.png';

const Check = styled.img`
  height: 40px;
  width: 40px;
`
const Ex = styled.img`
  height: 40px;
  width: 40px;
`

const Text = styled.div`
  font-family: 'marker felt';
  font-size: 18px;
`
const GreenText = styled.div`
  font-family: 'marker felt';
  font-size: 18px;
  color: green;
`

const Result = ({isCorrect, correctAnswer}) => {


  if (isCorrect) {
    return (
      <Text>
        <Check src={check}/>
        <br></br>
        <br></br>
        Correct!
    </Text>
  );
  } else {
    return (
      <GreenText>
        <Ex src={rex}/>
        <br></br>
        <br></br>
        Answer: {correctAnswer}
      </GreenText>
    )
  }
}

export default Result;