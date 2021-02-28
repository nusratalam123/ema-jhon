import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shops from './components/Header/Shops/Shops';



function App() {

 return(
    <div>
   <Header></Header>
  <Shops></Shops>
    </div>
  )
}

export default App;
