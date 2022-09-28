import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Home from './Home.jsx';
import NCPier from './NcPier.jsx';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import styled, {createGlobalStyle} from 'styled-components';

const bigStyle = createGlobalStyle`
  box-sizing: border-box;
`

const AppDiv = styled.div`
  width: 100%;
  height: 100vh;
`

const App = () => {
  const navigate = useNavigate();

  return (
    <ScopedCssBaseline>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<Home navigate={navigate}/>}></Route>
          <Route exact path='/NCInshore' element={<NCPier navigate={navigate}/>}></Route>
        </Routes>
      </div>
    </ScopedCssBaseline>
    )
}

export default App;