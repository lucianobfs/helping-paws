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
            <div className="img-fluid" style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "900px" }}>
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

            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid" src={img2} style={{maxWidth: "100%", height: 'auto' }} />
                    </div>
                    <div className="col pt-5">
                        <h2 className="display-5 fw-bold lh-1 mb-3" style={{ fontSize: "4em", color: "gray" }}>Fazemos o impossível ser realidade.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula odio, sagittis quis egestas a, commodo non elit. Cras sollicitudin lobortis nibh. Proin at consequat ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris scelerisque tempus leo, ac consectetur nibh eleifend quis. Nunc sagittis ante lorem, quis feugiat massa elementum vel. Sed placerat varius quam, non efficitur magna lobortis nec. Nam porttitor pellentesque justo non dictum. Cras in tellus nec tellus efficitur varius. Cras placerat, nisl vitae lobortis feugiat, magna ante blandit ante, ut congue libero lacus nec augue. Morbi in malesuada lorem. Donec ut cursus magna, at aliquam leo. Fusce lacinia risus eu cursus dictum. Sed dui sapien, viverra vel malesuada vitae, vehicula id nulla.<br />Sed dapibus lacus enim, eget porta orci aliquam sed. Sed aliquet id justo eu gravida. Nulla facilisi. Morbi sapien sem, dignissim nec nulla sit amet, consequat facilisis eros. Curabitur auctor venenatis bibendum. Nullam quis blandit felis. Integer sed porta mi. Fusce lobortis sapien varius aliquam iaculis. Cras viverra at ex non vehicula. Suspendisse blandit hendrerit sem quis auctor. Nunc convallis est id eros elementum efficitur. Donec eget tellus quam. Suspendisse tellus turpis, eleifend quis lacus hendrerit, congue scelerisque massa. Quisque vulputate lorem at ex accumsan rhoncus.  </p>
                    </div>
                </div>
            </div>

            <div className="card-deck mx-5">
                <div className="card text-center">
                    <i className="card-img-top" src="..." alt="Card image cap"><FaHandHoldingHeart size="50px"/></i>
                    <div className="card-body">
                        <CountUp start={0} end={123423423400} delay={0} duration={4}>
                            {({ countUpRef }) => (
                                <div>
                                    <h1 ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card text-center">
                    <i className="card-img-top" src="..." alt="Card image cap"><FaCat size="50px"/></i>
                    <div className="card-body">
                        <CountUp start={0} end={550000} delay={0} duration={4}>
                            {({ countUpRef }) => (
                                <div>
                                    <h1 ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="card text-center">
                    <i className="card-img-top" src="..." alt="Card image cap"><FaPaw size="50px"/></i>
                    <div className="card-body">
                        <CountUp start={0} end={1023453124230} delay={0} duration={4}>
                            {({ countUpRef }) => (
                                <div>
                                    <h1 ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Home