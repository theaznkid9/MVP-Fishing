import React, {useState, useEffect, useRef} from "react";
import styled from 'styled-components';


const Text = styled.div`
  font-family: 'Georgia';
  font-size: 16px;
  padding: 6px;
`

const FishInfo = ({fishInfo}) => {

  console.log('FISH INFO:', fishInfo);
  let science = '';
  let descrip = '';
  let habitat = '';
  science = fishInfo?.['Scientific Name'] || '';
  descrip = fishInfo?.['Physical Description']?.replace(/<(.|\n)*?>/g, '') || '';
  habitat = fishInfo?.['Habitat']?.replace(/<(.|\n)*?>/g, '') || '';


  return (
    <Text>
      Scientific Name: {science}
      <br></br>
      <br></br>
      Physical Description: {descrip}
      <br></br>
      <br></br>
      Habitat: {habitat}
    </Text>
  )

}

export default FishInfo;