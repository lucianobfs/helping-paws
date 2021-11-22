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

import hero from "../assets/images/hero-all-pets.jpg"

function AllPets() {
  const [pet, setPet] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ironrest.herokuapp.com/matheus-luciano")
      .then((response) => {
        setPet([...response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(pet);

  async function handleDelete(id) {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/matheus-luciano/${id}`
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>

      <div className="hero-image d-flex align-items-center justify-content-center" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${hero})`,backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative" , height: "70vh"}}>
        <div className="hero-text text-white text-center">
          <h2  style={{fontSize: "4rem", marginBottom: "75px"}}>All the Pets</h2>
          <p style={{fontSize: "1.8rem"}}>We have a lot of cute pets waiting to give and receive love</p>
        </div>
      </div>

      <div className="container mt-5 mb-5">
          <div>
            <Link to="/AddPet"><button className="btn btn-primary ms-2 mb-4">Add a Pet!</button></Link>
          </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pet.map((item) => {
            return (
              <div className="col">

                <div key={item._id} className="card h-100 m-2">
                  <Link
                    to={`/${item._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      className="card-img-top"
                    />

                    <div className="card-body d-flex flex-column justify-content-center align-items-center mt-5">
                      <h2 className="card-title">{item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()}</h2>

                      <p className="card-text">{`${item.specie[0].toUpperCase() + item.specie.slice(1).toLowerCase()}, ${Math.floor(item.age)} ${
                        item.age === "1" ? "year" : "years"
                      }`}</p>
                    </div>
                  </Link>

                  <div className="d-flex justify-content-around mt-auto mb-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        handleDelete(item._id);
                        // navigate("/AllPets");
                        window.location.reload(false);
                      }}
                    >
                      <FaTrashAlt />
                    </button>

                    <Link to={`/EditPet/${item._id}`}>
                      <button type="button" className="btn btn-primary">
                        Edit this Pet !
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllPets;
