import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import img from '../assets/images/hero_home.jpg';

import NavBar from './NavBar';
import AllPets from './AllPets';
import AddPet from './AddPet';
import EditPet from './EditPet';

function Home() {
    return (
        <div>
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={img} class="d-block mx-lg-auto img-fluid" alt="Banner  image" loading="lazy" width="700" height="500"/>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">Já pensou em adoção?</h1>
                        <p class="lead">A adoção de pets ajuda a diminuir o número de animaizinhos que estão esperando por um lar. Os dados sobre o abandono de pets no Brasil são comoventes. De acordo com uma pesquisa realizada pela Organização Mundial da Saúde (OMS), somente aqui no país existem mais de 30 milhões de cães abandonados em abrigos e nas ruas, esperando somente por um lar. Por outro lado, 44,13% dos lares brasileiros possui ao menos um cão, segundo o Instituto Brasileiro de Geografia e Estatística (IBGE).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Home