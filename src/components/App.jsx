import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Home from './Home.jsx';
import NCPier from './NcPier.jsx';
import styled from 'styled-components';

const AppDiv = styled.div`
  width: 100%;
  height: 100vh;
`

const App = () => {
  const navigate = useNavigate();

  return (
      <div className='App'>
        <Routes>
          {/* <Route exact path='/' element={<Home navigate={navigate}/>}></Route> */}
          <Route exact path='/' element={<NCPier navigate={navigate}/>}></Route>
          <Route exact path='/NCInshore' element={<NCPier navigate={navigate}/>}></Route>
        </Routes>
      </div>
    )
}

export default App;