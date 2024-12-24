
import React, { Component } from 'react';

import {Routes, Route } from "react-router-dom";

import { Contact } from './components/Contact.js';
import { Passwordmaker } from './components/Passwordmaker';
import { Home} from './components/Home';

import './App.css'

function App() {
  

  
    return (
       
      
            <Routes>
              
            
                <Route exact path="/" element={<Home/>}/> 
               
                <Route path="/Contact" element={<Contact/>} />

                <Route path="/Passwordmaker" element={<Passwordmaker/>} />
            </Routes>
       
    );
  }



export default App;