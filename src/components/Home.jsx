import React, {useState, useEffect, Component, useRef} from "react";
import Select from 'react-select'
import styled from 'styled-components';
import homepageVid from '../assets/homepagefishing.mp4';
import {gsap} from 'gsap';

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

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 4% 0 4% 0%;
  justify-content: center;
  transform: translateY(100px);
  opacity: 0;
  transform-origin: 0% 100%;
`

const Triple = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 0 2% 0;
`

const Title = styled.h1`
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  transform: translateY(100px);
  opacity: 0;
  font-family: 'Copperplate';
  font-size: 40px;
  text-align: center;
  margin: 0 0 6% 0;
`

const Label = styled.div`
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  font-family: 'Copperplate';
  font-size: 32px;
  display: flex;
  justify-content: center;
`

const StateDiv = styled.div`
  width: 15%;
  margin-left: 3%;
  font-size: 24px;
  font-family: 'Copperplate';
  z-index: 3;
  transform: translateY(100px);
  opacity: 0;
  transform-origin: 0% 100%;
`
const LocDiv = styled.div`
  width: 20%;
  margin-left: 3%;
  font-family: 'Copperplate';
  font-size: 24px;
  transform: translateY(100px);
  opacity: 0;
  z-index: 3;
  transform-origin: 0% 100%;
`
const Button = styled.button`
  height: auto;
  width: 20%;
  color: white;
  border: 1px solid gray;
  font-size: 30px;
  font-family: 'Copperplate';
  padding: 2% 0 2% 0;
  background-color: black;
  margin: 2% 0 0 0;
  opacity: 0.65;
  border-radius: 10%;
  &:hover {
    background-color: black;
    opacity: .8;
    cursor: pointer;
  };
  &:active {
    transform: translateY(4px);
  };
  `

const Home = ({navigate}) => {
  const titleRef = useRef();
  const labelRef = useRef();
  const stateRef = useRef();
  const regionRef = useRef();
  const buttonRef = useRef();
  const tl = useRef();
  const selectedState = useRef();
  const [thestate, setTheState] = useState('');
  const [theRegion, setTheRegion] = useState('');
  const states = ['AK', 'AL', 'AR', 'AS', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UM', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];
  let options = [];
  states.forEach((state) => {
    options.push({value: state, label: state});
  });
  let regions = [{value: 'Deep Sea', label: 'Deep Sea'}, {value: 'Inshore', label: 'Inshore'}, {value: 'Piedmont', label: 'Piedmont'}, {value: 'Mountains', label: 'Mountains'}];

  useEffect(() => {
    console.log(thestate, theRegion);
  }, [theRegion])

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: false,
      defaults: {
        ease: "power4.inOut",
        duration: 2
      }
    })
    tl.current.to([titleRef.current], {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 2.2})
    tl.current.to([labelRef.current], {'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0}, "-=1.8")
    tl.current.to([stateRef.current], {stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=1.7")
    tl.current.to([regionRef.current], {stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=1.6")
    tl.current.to([buttonRef.current], {stagger: .1, duration: 1.2, opacity: 1, y: 0}, "-=1.5")
  }, []);

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
      <Vid type="video/mp4" src={homepageVid} autoPlay muted loop>
      </Vid>
      <OuterContainer>
        <Container>
          <Title ref={titleRef}>
            Do You Know Your Fish and Regulations?
          </Title>
        </Container>
        <Triple>
              <Label ref={labelRef}>
              Select Your State and Region:
              </Label>
            <StateDiv ref={stateRef}>
              <Select placeholder='State' options={options} onChange={(e) => {handleStateChange(e)}} />
            </StateDiv>
            <LocDiv ref={regionRef}>
              <Select placeholder='Region' options={regions} onChange={(e) => {handleRegionChange(e)}} isDisabled={(thestate.length > 1) ? false : true}/>
            </LocDiv>
        </Triple>
        <ButtonContainer ref={buttonRef} >
          <Button onClick={(e) => {handleClick(e)}}>Let's Go Fishing!</Button>
        </ButtonContainer>
      </OuterContainer>
    </OuterOuterContainer>
    )
}

export default Home;