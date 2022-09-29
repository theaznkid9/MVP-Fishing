import React, {useState, useEffect, Component, useRef} from "react";
import Select from 'react-select'
import styled from 'styled-components';
import catchVid from '../assets/fishingpier.mp4';
import fishingpole from '../assets/fishingpole.png';
import fish from '../assets/fish.png';
import line from '../assets/line.png';
import axios from 'axios';
import {gsap} from 'gsap';
import QuestionModal from './QuestionModal.jsx';

const OuterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Box = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  top: 0;
  margin-top: 2%;
`

const Box2 = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  top: 0;
  margin: 19% 0 0 21%;
`
const Box3 = styled.div`
  position: absolute;
  width: 70%;
  height: 70%;
  top: 0;
  margin: 20% 0 0 19%;
`

const Pole = styled.img`
  width: 60%;
  height: 60%;
`
const Fish = styled.img`
  width: 40%;
  height: auto;
  opacity: 0;
  z-indez: 5;
`
const Line = styled.img`
  width: 40%;
  height: 40%;
`

const OuterOuterContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`

const Vid = styled.video`
  width: 100%;
  height auto%;
  object-fit: cover;
  border: solid 2px black;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 1% 0 4% 7%;
  justify-content: left;
  flex-direction: column;
  overflow: hidden;
`

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 6% 0 0 35%;
  overflow: hidden;
`
const ImageContainer2 = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0% 63% 0% 0%;
`
const ImageContainer3 = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  margin: 0% 3% 0% 0%;
`

const Button = styled.button`
  height: auto;
  width: 15%;
  color: black;
  border: 1px solid gray;
  font-size: 20px;
  font-family: 'Optima';
  padding: 1% 1% 1% 1%;
  opacity: 0.4;
  background-color: aqua;
  margin: 2% 0 0 0;
  &:hover {
    background-color: aqua;
    opacity: 0.6;
    cursor: pointer;
  };
  &:active {
    transform: translateY(4px);
  };
  `

const NCPier = ({navigate}) => {
  const [fishData, setFishData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const poleRef = useRef();
  const fishRef = useRef();
  const lineRef = useRef();
  const tl = useRef();
  const t2 = useRef();
  const t3 = useRef();
  const [poleClicked, setPoleClicked] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/NCInshore')
      .then((data) => {
        console.log('DATA:', data.data);
        setFishData(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const handleClick = (e) => {
    navigate('/');
  }

  useEffect(() => {
    t2.current = gsap.timeline({
      paused: false,
      repeat: 1,
      repeatDelay: 2,
    })
    t2.current.to([poleRef.current], {x: "+=5px" , duration: 0.1, repeat: 8, delay: 2});
    t2.current.to([poleRef.current], {x: "-=5px", duration: 0.1, repeat: 8, delay: 2});
  }, []);

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true
    })
    tl.current.to([fishRef.current], {x: "46%", y: "-74%", duration: 2, opacity: 1})
  }, []);

  useEffect(() => {
    t3.current = gsap.timeline({
      paused: true
    })
    t3.current.to([lineRef.current], {duration: 2, opacity: 0})
  }, []);

  useEffect(() => {
    poleClicked ? tl.current.play() : tl.current.reverse();
    poleClicked ? t3.current.play() : tl.current.reverse();
  }, [poleClicked]);

  const handlePoleClick = (e) => {
    setPoleClicked(true);
    setTimeout(() => {
      setShowModal(true);
    }, 2100)
  };


  return (
    <OuterOuterContainer>
      <Box>
        <Vid type="video/mp4" src={catchVid} autoPlay muted loop>
        </Vid>
        <OuterContainer>
          <Container>
            <Button onClick={(e) => {handleClick(e)}}>Home</Button>
            <Button onClick={(e) => {handlePoleClick(e)}}>Fish On!</Button>
          </Container>
          <ImageContainer>
            <Pole src={fishingpole} ref={poleRef} ></Pole>
          </ImageContainer>
        </OuterContainer>
      </Box>
      <Box2>
        <OuterContainer>
          <ImageContainer2>
            <Line ref={lineRef} src={line}></Line>
          </ImageContainer2>
        </OuterContainer>
      </Box2>
      <Box3>
        <OuterContainer>
          <ImageContainer3>
            <Fish ref={fishRef} src={fish}></Fish>
          </ImageContainer3>
        </OuterContainer>
      </Box3>
      {showModal && <QuestionModal fishData={fishData} setShowModal={setShowModal}/>}
    </OuterOuterContainer>
    )
}

export default NCPier;