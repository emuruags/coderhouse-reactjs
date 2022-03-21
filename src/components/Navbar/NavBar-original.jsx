import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import logo from '../../img/logo/logo.jpg'
import CarWidget from '../CarWidget/CarWidget'

import { NavLink, Link } from 'react-router-dom'

function NavBar() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
            <NavLink to='/'>
                <img
                alt=""
                //src="../../img/logo/logo.png"
                src= {logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                />{' '}
            Vikings Fitness Gear
            </NavLink>
            {/* <Navbar.Brand href="#home">

            </Navbar.Brand> */}

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Tienda" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Estructuras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Bancos</NavDropdown.Item>
                    <NavLink to='/categoria/1'>
                        Barras
                    </NavLink>
                    <NavDropdown.Item href=""></NavDropdown.Item>
                    <NavLink to='/categoria/2'>
                        Discos
                    </NavLink>
                    <NavDropdown.Item href=""></NavDropdown.Item>
                    <NavLink to='/categoria/3'>
                        Racks
                    </NavLink>

                    <NavDropdown.Item href="#action/3.4">Cardio</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">HIT</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">Accesorios</NavDropdown.Item>
                </NavDropdown>
                
                <NavLink to='/categoria/1'>
                        Barras
                    </NavLink>
                <Nav.Link href="#barras"></Nav.Link>
                <NavLink to='/categoria/2'>
                        Discos
                    </NavLink>
                <Nav.Link href="#barras"></Nav.Link>
                <NavLink to='/categoria/3'>
                        Racks
                    </NavLink>

                </Nav>
                <Nav>
                <Nav.Link href="#deets">Log in</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    <CarWidget/>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

  )
}

export default NavBar