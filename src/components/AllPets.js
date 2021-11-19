import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Home from './Home';
import NavBar from './NavBar';
import AddPet from './AddPet';
import EditPet from './EditPet';



function AllPets() {

    const [pet, setPet] = useState([])


    useEffect(() => {
        axios.get('https://ironrest.herokuapp.com/matheus-luciano').then((response) => {

            setPet([...response.data])

        }).catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(pet)


    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {pet.map((item) => {
                return (
                    <div className="col">   
                        <div key={item.name} className="card h-100">
                            <Link to={`/${item.name}`} className="text-decoration-none text-dark">
                                <img src={item.url} alt={item.name} className="card-img-top"/>

                                <div className="card-body d-flex flex-column justify-content-center align-items-center mt-5">

                                    <h2 className="card-title">{item.name}</h2>

                                    <p className="card-text">{`${item.specie}, ${item.age}`}</p>

                                </div>

                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}



export default AllPets