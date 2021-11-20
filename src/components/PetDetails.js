import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";

import Home from "./Home";
import NavBar from "./NavBar";
import AddPet from "./AddPet";
import EditPet from "./EditPet";

let foundPet;

function PetDetails() {
  const thePet = useParams();

  const [pet, setPet] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/matheus-luciano/${thePet.id}`)
      .then((response) => {
        setPet(response.data);

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [thePet]);

  useEffect(() => {
    if (pet.length > 0) {
      foundPet = pet.find((item) => {
        return item.id === thePet.id;
      });
    }
  }, [pet]);

  console.log(thePet);
  console.log(pet);

  return (
    <div>
      {loading ? (
        <div
          className="text-center d-flex justify-content-center align-items-end"
          style={{ height: "300px" }}
        >
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div className="card container d-flex justify-content-center mt-5" style={{width: "500px"}}>
          <img className="card-img-top" src={pet.url} alt="pet"/>
          <div className="card-body">
            <h2 className="card-title text-center">{pet.name}</h2>
            
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><h5>Breed: {pet.breed}</h5></li>
            <li className="list-group-item"><h5>Sex: {pet.sex}</h5></li>
            <li className="list-group-item"><h5>Age: {pet.age} {pet.age === "1" ? "year" : "years"}</h5></li>
            <li className="list-group-item"><h5>Vaccinated: {pet.vaccinated === "true" ? "Yes" : "No"}</h5></li>
            <li className="list-group-item"><h5>Available: {pet.adopted === true ? "No" : "Yes"}</h5></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default PetDetails;
