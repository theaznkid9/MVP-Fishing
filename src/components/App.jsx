import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Home from './Home.jsx';
import styled from 'styled-components';

const Body = styled.div`
  background-color: white;
`

const App = () => {

  return (
    <Router>
      <Body className='App'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
        </Routes>
      </Body>
    </Router>
    )
}

export default App;