import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './pages/splash';
import HomePage from './pages/homepage';
import BookingPage from './pages/BookingPage';
// av någon anledning kunde jag inte ha stor bokstav på splash + homepage


function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Splash />} ></Route>
        <Route path='/home' element={<HomePage />} ></Route>
        <Route path='/booking' element={<BookingPage />} ></Route>
      </Routes>
    </Router>
  )
}

export default App;