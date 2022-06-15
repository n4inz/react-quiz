import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Song from "./assets/audio/a.mp3";
import SongClick from "./assets/audio/click.wav";

import React, { useState } from 'react';
import Hasil from './components/hasil';
import Home from './components/home';
import Login from './components/login/Login';
import Quiz from './components/quiz';
import Register from './components/register/register';
import Image from './logo.svg'
export const Context = React.createContext();

function App() {

  const [soal, setSoal] = useState({})
  const [kriteria, setKriteria] = useState({
      'level' : 'SD',
      'type' : ''
  })
  const [poin, setPoin] = useState(0);
  const [audio,setAudio] = useState({
    'audio' : new Audio(Song),
    'audioClick' : new Audio(SongClick),
    'play' : false
})
  return (
    <Context.Provider value={{ soal, setSoal , kriteria, setKriteria, poin, setPoin, audio,setAudio }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/hasil" element={<Hasil />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
