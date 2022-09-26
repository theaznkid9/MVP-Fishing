import React, {useState, useEffect, Component, useRef} from "react";
import Select from 'react-select'
import styled from 'styled-components';

const OuterContainer = styled.div`
  dispaly: flex;
  margin: 10% 0% 0% 0%;
  justify-content: center
`

const Container = styled.div`
  display: flex;
  margin: 5% 10% 5% 10%;
  justify-content: center
`

const Title = styled.h1`
  font-family: 'Cambria';
  font-size: 40px;
`

const Label = styled.div`
  font-family: 'Cambria';
  font-size: 32px;
`

const StateDiv = styled.div`
  width: 15%;
  margin-left: 2%;
  font-family: 'Cambria';
  font-size: 24px;
`
const LocDiv = styled.div`
  width: 20%;
  margin-left: 2%;
  font-family: 'Cambria';
  font-size: 24px;
`
const Button = styled.button`
  height: auto;
  width: 30%;
  color: black;
  border: 1px solid gray;
  font-size: 30px;
  padding: 2% 0 2% 0;
  background-color: #E24E0E;
  margin: 1% 0 0 0;
  border-radius: 50%;
  &:hover {
    background-color: salmon;
    cursor: pointer;
  };
  &:active {
    transform: translateY(4px);
  };
  `

const Home = ({navigate}) => {
  const selectedState = useRef();
  const [thestate, setTheState] = useState('');
  const [theRegion, setTheRegion] = useState('');
  const states = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];
  let options = [];
  states.forEach((state) => {
    options.push({value: state, label: state});
  });
  const regions = [{value: 'Deep Sea', label: 'Deep Sea'}, {value: 'Inshore', label: 'Inshore'}, {value: 'Piedmont', label: 'Piedmont'}, {value: 'Mountains', label: 'Mountains'} ];

  useEffect(() => {
    console.log(thestate, theRegion);
  }, [theRegion])

  const handleClick = (e) => {
    navigate('/about');
  }

  const handleStateChange = (e) => {
    setTheState(e.value)
  };

  const handleRegionChange = (e) => {
    setTheRegion(e.value)
  };

  return (
    <OuterContainer>
      <Container>
        <Title>
          Do You Know Your Fish and Regulations?
        </Title>
      </Container>
      <Container>
          <Label>
          Select Your State and Region:
          </Label>
        <StateDiv>
          <Select placeholder='Select Your State' options={options} onChange={(e) => {handleStateChange(e)}}/>
        </StateDiv>
        <LocDiv>
          <Select placeholder='Select Your Region' options={regions} onChange={(e) => {handleRegionChange(e)}} isDisabled={(thestate.length > 1) ? false : true}/>
        </LocDiv>
      </Container>
      <Container>
        <Button>Let's Go Fishing!</Button>
      </Container>
    </OuterContainer>
    )
}

export default Home;