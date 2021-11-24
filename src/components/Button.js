import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../src/App.css";

import Home from "./Home";
import NavBar from "./NavBar";
import AllPets from "./AllPets";
import EditPet from "./EditPet";
import FormField from "./FormField";
import SelectInput from "./SelectInput";
import hero from "../assets/images/hero-all-pets.jpg";

function Button(props) {
  return (
    <div>
      <Link to={props.to}>
        <button className={props.className} href={props.href}>{props.child}</button>
      </Link>
    </div>
  );
}

export default Button;


// btn btn-primary ms-2 mb-4
