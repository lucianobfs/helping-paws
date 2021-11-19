import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import NavBar from './NavBar';
import AllPets from './AllPets';
import AddPet from './AddPet';
import EditPet from './EditPet';

function Home() {
    return (
        <div>
            <p>ESSA É A HOME</p>
        </div>
    )
}



export default Home