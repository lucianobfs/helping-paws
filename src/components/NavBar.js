import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from './Home';
import AllPets from './AllPets';
import AddPet from './AddPet';
import EditPet from './EditPet';

function NavBar() {
    return (
        <nav>

            <Link to="/">

                <p>ESSA É A NAV BAR</p> 

            </Link>

        </nav>
    )
}



export default NavBar