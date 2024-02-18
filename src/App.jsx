import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AskAyeeyo from './components/AskAyeeyo/AskAyeeyo';
import AboutUs from './components/AboutUs/AboutUs';
import HomePage from './Pages/HomePage';
import TutorPage from './Pages/TutorPage';
import AskAyeeyoPage from './Pages/AskAyeeyoPage';


function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tutor' element={<TutorPage />} />
            <Route path='/ask' element={<AskAyeeyoPage />} />
            <Route path='/aboutus' element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
