import React from 'react';
import Homepage from './components/pages/Homepage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ChallengeDetails from './components/pages/ChallengeDetails';
import { Data } from './data';
import Navbar from './components/Navbar';
import Edit from './components/pages/Edit';
import CreateChallange from './components/pages/CreateChallange';
import NewCd from './components/pages/NewCd';
import { ToastContainer } from 'react-toastify';
const App = () => {

 
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <ToastContainer />
    <Routes>
    <Route path="/" element={<Homepage/>} />
    <Route path="/details/:id" element={<ChallengeDetails key={Data.id}/>} />
    <Route path='/edit/:id' element={<Edit/>} key={Data.id} />
    <Route path='/create' element={<CreateChallange/>} />
    <Route path='/newcd' element={<NewCd/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

