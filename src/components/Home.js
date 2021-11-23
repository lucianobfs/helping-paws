import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CountUp, { useCountUp } from 'react-countup';
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { FaPaw } from 'react-icons/fa';

import img from '../assets/images/home.jpg';
import img2 from "../assets/images/home2.jpg"

import NavBar from './NavBar';
import AllPets from './AllPets';
import AddPet from './AddPet';
import EditPet from './EditPet';

function Home() {
    return (
        <>
            <div className="img-fluid" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
                <div className="col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                        </div>
                        <div className="col-lg-6 pt-5 pl-5">
                            <h1 className="display-5 fw-bold lh-1 mb-3" style={{ fontSize: "4em", color: "lightGray" }}>Have you thought about adoption?</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src={img2} style={{ maxWidth: "100%", height: 'auto' }} />
                    </div>
                    <div className="col pt-5">
                        <h2 className="display-5 fw-bold lh-1 mb-3" style={{ fontSize: "3em", color: "#231F20" }}>We make the (Im)Possible</h2>
                        <p className="display-5 fw-bold lh-3 mt-5" style={{ fontSize: "2.0em", color: "gray" }}> When adopting, the chosen animal is given a chance to restart. Meet our animals and help publicize them, here you will find puppies and adults, of different sizes, colors and coats, in addition to special animals.</p>
                    </div>
                </div>
            </div>

            <div className="card-deck mx-5 px-5">
                <div className="card border-0 text-center">
                    <i className="card-img-top" src="..." alt="Card image cap"><FaHandHoldingHeart className="pt-2" size="50px" /></i>
                    <div className="card-body">
                        <CountUp start={0} end={25526} delay={0} duration={4}>
                            {({ countUpRef }) => (
                                <div>
                                    <h1 className="fw-bold" ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                        <p className="card-text fw-bold">Animals that we helped find a home.</p>
                    </div>
                </div>
                <div className="card border-0 text-center">
                    <i className="card-img-top" src="..." alt="Card image cap"><FaCat className="pt-2" size="50px" /></i>
                    <div className="card-body">
                        <CountUp start={0} end={347} delay={0} duration={4}>
                            {({ countUpRef }) => (
                                <div>
                                    <h1 className="fw-bold" ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                        <p className="card-text fw-bold">Daily average of registrations we receive of animals rescued or needing a home.</p>
                    </div>
                </div>
                <div className="card border-0 text-center">
                    <i className="card-img-top" src="..." alt="Card image cap"><FaPaw className="pt-2" size="50px" /></i>
                    <div className="card-body">
                        <CountUp start={0} end={15226754} delay={0} duration={4}>
                            {({ countUpRef }) => (
                                <div>
                                    <h1 className="fw-bold" ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                        <p className="card-text fw-bold">Number of animals abandoned around the world.</p>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Home