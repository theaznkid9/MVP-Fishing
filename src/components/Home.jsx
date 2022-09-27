import React, {useState, useEffect, Component, useRef} from "react";
import Select from 'react-select'
import styled from 'styled-components';
import homepageVid from '../assets/homepagefishing.mp4'

const OuterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

// const Overlay = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.3);
// `

const OuterOuterContainer = styled.div`
  width: 100%;
  height: 100vh;
`

const Vid = styled.video`
  width: 100%;
  height 100%;
  object-fit: cover;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 4% 0 4% 0%;
  justify-content: center;
`
const Triple = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 0 2% 0;
`

const Title = styled.h1`
  font-family: 'Cambria';
  font-size: 40px;
  text-align: center;
  margin: 0 0 6% 0;
`

const Label = styled.div`
  font-family: 'Cambria';
  font-size: 32px;
  display: flex;
  justify-content: center;
`

const StateDiv = styled.div`
  width: 15%;
  margin-left: 3%;
  font-family: 'Cambria';
  font-size: 24px;
`
const LocDiv = styled.div`
  width: 20%;
  margin-left: 3%;
  font-family: 'Cambria';
  font-size: 24px;
`
const Button = styled.button`
  height: auto;
  width: 20%;
  color: black;
  border: 1px solid gray;
  font-size: 30px;
  padding: 2% 0 2% 0;
  background-color: #E24E0E;
  margin: 2% 0 0 0;
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
    navigate('/' + thestate + theRegion);
  }

  const handleStateChange = (e) => {
    setTheState(e.value)
  };

  const handleRegionChange = (e) => {
    setTheRegion(e.value)
  };

  return (
    <OuterOuterContainer>
      {/* <Overlay></Overlay> */}
      <Vid type="video/mp4" src={homepageVid} autoPlay muted loop>
      </Vid>
      <OuterContainer>
        <Container>
          <Title>
            Do You Know Your Fish and Regulations?
          </Title>
        </Container>
        <Triple>
              <Label>
              Select Your State and Region:
              </Label>
            <StateDiv>
              <Select placeholder='Select Your State' options={options} onChange={(e) => {handleStateChange(e)}} />
            </StateDiv>
            <LocDiv>
              <Select placeholder='Select Your Region' options={regions} onChange={(e) => {handleRegionChange(e)}} isDisabled={(thestate.length > 1) ? false : true}/>
            </LocDiv>
        </Triple>
        <Container>
          <Button onClick={(e) => {handleClick(e)}}>Let's Go Fishing!</Button>
        </Container>
      </OuterContainer>
    </OuterOuterContainer>
    )
}

export default Home;