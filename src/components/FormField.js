import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Home from "./Home";
import NavBar from "./NavBar";
import AllPets from "./AllPets";
import AddPet from "./AddPet";
import EditPet from "./EditPet";

function FormField(props) {
  return (
    <div>
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control mb-3"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        pattern={props.pattern}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default FormField;
