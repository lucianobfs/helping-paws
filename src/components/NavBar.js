import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';

import img from '../assets/images/pet_logo.png';

import Home from './Home';
import AllPets from './AllPets';
import AddPet from './AddPet';
import EditPet from './EditPet';

function NavBar() {
    return (

        <Navbar bg="warning" expand={false} collapseOnSelect={true}>
            <Container fluid>
                <Navbar.Brand href="/"><img src={img} alt="logo" style={{width:'100px'}}/>Helping Paws</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton >
                        <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3" >
                          <Nav.Item >  <Nav.Link to="/" className="text-decoration-none text-dark" as={Link} eventKey="1">Home</Nav.Link> </Nav.Item>
                          <Nav.Item > <Nav.Link to="/AllPets" className="text-decoration-none text-dark" as={Link} eventKey="2">All Pets</Nav.Link> </Nav.Item>
                          <Nav.Item > <Nav.Link to="/AddPet" className="text-decoration-none text-dark" as={Link} eventKey="3">Register Pet</Nav.Link> </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}



export default NavBar;