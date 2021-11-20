import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Home from './Home';
import NavBar from './NavBar';
import Footer from './Footer';
import AllPets from './AllPets';
import AddPet from './AddPet';
import EditPet from './EditPet';




function App() {
  return (
    <div >

      <NavBar />
  
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/AllPets" element={<AllPets />} />

        <Route path="/AddPet" element={<AddPet />} />


      </Routes>

    

      <Footer />
      
    </div>
  );
}

export default App;
