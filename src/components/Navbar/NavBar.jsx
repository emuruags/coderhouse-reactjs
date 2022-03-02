import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import logo from '../../img/logo/logo.jpg'
import CarWidget from '../CarWidget/CarWidget'

function NavBar() {
  return (

    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                //src="../../img/logo/logo.png"
                src= {logo}
                width="40"
                height="40"
                className="d-inline-block align-top"
                />{' '}
            Vikings Fitness Gear
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Tienda" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Estructuras</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Bancos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Barras Y Discos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Cardio</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">HIT</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">Accesorios</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#nuevos">Nuevos Arribos</Nav.Link>
                <Nav.Link href="#barras">Barras</Nav.Link>
                <Nav.Link href="#barras">Discos</Nav.Link>
                <Nav.Link href="#barras">Raks</Nav.Link>

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