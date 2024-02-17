import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tutor from './components/Tutor';
import AskAyeeyo from './components/AskAyeeyo';
import AboutUs from './components/AboutUs';


function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tutor' element={<Tutor />} />
            <Route path='/ask' element={<AskAyeeyo />} />
            <Route path='/aboutus' element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
