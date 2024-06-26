import Navbar from './components/Navbar';
import React from 'react';
import Pokemon from './components/Pokemon';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import kanto from './images/kanto.png'
import './App.css'

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
          <div class ='container-md'>
            <img src = {kanto} alt = "Kanto Map" class='img-fluid' ></img>
          </div>
        <Routes>
          <Route path = "/pokemon"></Route>
        </Routes>
      </Router>

      {/* <h1>
        <Pokemon id = {35}></Pokemon>
      </h1> */}
    </div>
  );
}

export default App;
