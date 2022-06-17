import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Main from './Components/Main'
import Home from './Components/Home';
import Contacts from './Components/Contacts'


function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
