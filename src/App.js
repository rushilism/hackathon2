import './App.css';
import React from 'react';

import ChallengeList from './components/ChallengeList';
import Features from './components/Features';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Search from './components/Search';



function App() {
  return (
  <>
    <Navbar/>
    <Home/>
    <Features/>
    <Search/>
    <ChallengeList/>
  </>
  );
}



export default App;
