import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from "./Home";
import NavBar from "./NavBar";
import AllPets from "./AllPets";
import EditPet from "./EditPet";
import FormField from "./FormField";


function SelectInput(props) {
    return (
      <div className="mb-3">
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
        <select
          className="form-select mb-3"
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          multiple={props.multiple}
          required={props.required}
        >
          {props.items
            ? props.items.map((currentOptionStr) => (
                <option key={currentOptionStr} value={currentOptionStr}>
                  {currentOptionStr}
                </option>
              ))
            : props.children}
        </select>
      </div>
    );
  }
  
  export default SelectInput;
  