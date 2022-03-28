import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import logo from '../../img/logo/logo.jpg'
import CarWidget from '../CarWidget/CarWidget'

import { NavLink, Link } from 'react-router-dom'

import {useState, useEffect} from 'react';
import { getFetchCategorias } from '../../helpers/getFetch'

// import { useCartContext } from '../../context/CarContext'



function NavBar() {

    const [prods, setProds] = useState ([])

    // const {cartList} = useCartContext()

    useEffect ( () => {


        getFetchCategorias
        .then( resp => setProds(resp))

        .catch( err => console.log(err))
        .finally( () => console.log('termino de cargar el promise filtrado'))

        

        }, []);
    
        console.log('ver el contenido de prods');
        console.log(prods);

  return (

    <>
    
    

       
    <Navbar  collapseOnSelect expand="lg" bg="black" variant="dark">
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
                            <NavDropdown title="Tienda" id="collasible-nav-dropdown" >

                                { prods.map( (prods) =>  

                                    <>
                                        <NavLink  key={prods.idCategoria} to={`/categoria/${prods.idCategoria}`}>
                                            
        
                                            {` ${prods.categoriaDescripcion}`}
                                            
                                        </NavLink>
                                        <br/>
                                    </>

                                )}

                                <Nav.Link/>

                            </NavDropdown>
                            
                            { prods.map( (prods) =>  

                                <>
                                    <NavLink  key={prods.idCategoria} to={`/categoria/${prods.idCategoria}`}>
                                        

                                        {`${prods.categoriaDescripcion}`}
                                        
                                    </NavLink>

                                <Nav.Link/>
                                </>



                                )}

                            
                            <Nav.Link/>




                            </Nav>
                            <Nav>

                            <Nav.Link eventKey={2} href="#memes">

                               <CarWidget/>

                                {/* {cartList.length === 0 ? 
                                        <></>
                                    :
                                    <CarWidget/>
                                }    */}

                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

    </> 

  )
}

export default NavBar