import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';

const Check = styled.img`
  height: 40px;
  width: 40px;
`

const Result = ({isCorrect, correctAnswer}) => {


  if (isCorrect) {
    return (
      <div>
        <Check src='https://www.pngmart.com/files/16/Green-Check-Mark-Transparent-Background.png'/>
        <br></br>
        Correct!
    </div>
  );
  } else {
    return (
      <div>
        {correctAnswer}
      </div>
    )
  }
}

export default Result;