import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from "./components/Navbar.js";
import App from './App';
import { Contact } from './components/Contact.js';
import { Passwordmaker } from './components/Passwordmaker';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render((
   <Router basename={process.env.PUBLIC_URL}>
    <NavBar/>
      <Routes>
      
      <Route  path='/' element={<App/>}/>
      
      
      <Route path="/Contact" element={<Contact/>}/>

       <Route path="/Passwordmaker" element={<Passwordmaker/>} />
     </Routes>
   </Router>

));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

