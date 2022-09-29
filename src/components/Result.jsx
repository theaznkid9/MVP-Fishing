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

const Result = ({isCorrect, correctAnswer}) => {


  if (isCorrect) {
    return (
      <div>
        <Check src={check}/>
        <br></br>
        Correct!
    </div>
  );
  } else {
    return (
      <div>
        <Ex src={rex}/>
        <br></br>
        {correctAnswer}
      </div>
    )
  }
}

export default Result;