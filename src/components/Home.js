import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import img from '../assets/images/home.jpg';
import img2 from "../assets/images/home2.jpg"

import NavBar from './NavBar';
import AllPets from './AllPets';
import AddPet from './AddPet';
import EditPet from './EditPet';

function Home() {
    return (
        <>
            <div style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "900px"}}>
                <div className="col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                        </div>
                        <div className="col-lg-6 pt-5 pl-5">
                            <h1 className="display-5 fw-bold lh-1 mb-3" style={{ fontSize: "5em", color: "lightGray" }}>Já pensou em adoção?</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <section>
                    <div className="row">
                        <div className="mw-100 p-0">
                            <img src={img2} style={{ width: 'auto' }} />
                        </div>
                        <div>
                            <h2>Fazemos o impossível ser realidade.</h2>
                            <p>Lutamos contra o abandono de animais domésticos e a negligência com os animais silvestres da nossa fauna. Não medimos esforços para amparar e dar suporte onde for necessário. Seja com suprimentos, tratamentos, campanhas de conscientização, ou até ir mata adentro para salvar vidas.</p>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}



export default Home