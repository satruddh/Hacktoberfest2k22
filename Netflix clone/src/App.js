import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Movie from './components/Movie';
import Tv from './components/Tv';
import Popular from './components/Popular';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/tv' element={<Tv />} />
        <Route path='/popular' element={<Popular />} />               
      </Routes>

    </div>
  );
}

export default App;
