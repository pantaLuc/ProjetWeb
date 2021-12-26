import './App.css';
import React , { useState, useEffect}from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeAdmin from './Components/HomeAdmin';
import HomeGuest from './Components/HomeGuest';
import SignalerAnomalie from './Components/SignalerAnomalie';
import HomeResponsable from './Components/HomeResponsable';
import Service from './Components/Service';
import Localisation from './Components/Localisation';
import Login from './Components/Login';
import Ressource from './Components/Ressource';

const App = () =>(
  <div className="App">
    <Routes>
      <Route path="/Login"  element={<Login />}/>
      <Route path="/HomeAdmin"  element={<HomeAdmin />}/>
      <Route path="/HomeRespo"  element={<HomeResponsable />}/>
      <Route path="/"  element={<HomeGuest />}/>
      <Route path="/Service" element={<Service />} />
      <Route path="/Localisation" element={<Localisation />} />
      <Route path="/Ressource" element={<Ressource />} />
      <Route path="/SignalerAnomalie" element={<SignalerAnomalie />} />
    </Routes>
    <Footer />
  </div>
)

export default App;
