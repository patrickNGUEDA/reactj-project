import './App.css'
import Services from './components/Services';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import TerrainDetail from './components/TerrainDetail';
import Terrain from './components/Terrain';
import Contact from './components/Contact';
import Login from './components/Login';
import MyFooter from './components/MyFooter';
import Proposer from './components/Proposer';
import Aide from './components/Aide';
import Pagination from './components/Pagination';


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Villa from './components/residentiels/villa';
import Duplex from './components/residentiels/Duplex';
import Immeuble from './components/residentiels/Immeuble';
import EspaceCommerciale from './components/commerciaux/EspaceCommerciale';
import Studio from './components/residentiels/Studio';

import { useState } from 'react';


function App() {
  return (
  <>

<BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/produits" element={<Proposer />} />
        <Route path="/terrain" element={<Terrain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/proposer" element={<Proposer />} />
        <Route path="/aide" element={<Aide />} />  
        <Route path="/terrainDetail" element={<TerrainDetail />} />   
        <Route path="/villa" element={<Villa/>} />  
        <Route path="/duplex" element={<Duplex/>} />  
        <Route path="/immeuble" element={<Immeuble/>} />  
        <Route path="/espaceCommerciale" element={<EspaceCommerciale/>} />  
        <Route path="/studio" element={<Studio/>} />
        <Route path="/pagination" element={<Pagination/>} /> 
       
      </Routes>
    <MyFooter/>
</BrowserRouter>


      {/* <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Products/>
      <Blog/>
      <Newsletter/> */}
     
  </>
     
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
export default App
