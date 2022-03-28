import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { BsTrash } from "react-icons/bs";


import { useCartContext } from '../../context/CarContext'
import Item from '../Item/Item'
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';

function Cart() {

  const {cartList, emptyCart, removeFromCart, quantityIconCart, totalPrice} = useCartContext()



  return (
    // <div>Cart</div>
    <>
      {/* <label >CARRITO DE COMPRAS</label>

      { cartList.map(prod => <li key={prod.id}>
                                nombre: {prod.nameProducto} 
                                precio: {prod.price} 
                                cantidad: {prod.quantity}
                              </li>) 


        
      } */}


      <Container className='mt-3'>
        <Row>
          <Col className='col-12'>
              <Card>
                <Card.Header as="h5">Tu Carrito</Card.Header>
                <Card.Body>
                          <Row className="pt-2">
                            <Col className='col-9'>


                            {cartList.length === 0  
                              ?   
                                  <div>
                                      <h1>No hay productos en el carrito.</h1>
                                      <Link to='/' >Ir a Comprar</Link>
                                  </div>
                              : 
                                  <Row xs={1} md={1} className="g-4">

                                      { cartList.map( (prod) =>   
                                        <>
                                          <Container>
                                            <Row>
                                              <Col>
                                                  <ListGroup as="ol" >
                                                    <ListGroup.Item key={prod.id} as="li" className="d-flex justify-content-between align-items-start"    >
                                                      <div className="ms-2 ">
                                                        <Card.Img variant="top" src={`${prod.foto}`} width="30" height="60"/>
                                                      </div>
                                                      <div className="ms-2 me-auto">
                                                        <div className="fw-bold">{` ${prod.categoriaDescripcion} - ${prod.nameProducto}`}</div>
                                                        Precio
                                                        {` U$S ${prod.price}`}
                                                      </div>

                                                      Cantidad <Badge bg="primary" pill  className="ms-2 ">
                                                        {prod.quantity}
                                                      </Badge>


                                                      
                                                      <Button bg="danger" pill  className="ms-3 " variant="outline-danger" onClick={ () => removeFromCart(prod.id) }>
                                                        <BsTrash  className="pl-2 " />
                                                      </Button>
                                                    </ListGroup.Item>


                                                  </ListGroup>
                                              </Col>


                                            </Row>
                                          </Container>
                                        </>

                                      )}


                                  </Row>
                              }

        


                            </Col>
                            <Col className='col-3'>
                                <Card>
                                  <Card.Header>Resumen de Compra</Card.Header>
                                  <Card.Body>
                                    <Card.Text>
                                      <Card.Subtitle>
                                        Cantidad de items: { quantityIconCart() }
                                      </Card.Subtitle>
                                      <Card.Title className='mt-3 '>Importe Total</Card.Title>
                                      <Card.Title className='mt-3 '>
                                        u$s: { totalPrice() }
                                      </Card.Title>
                                      
                                    </Card.Text>
                                    <div>
                                      <Button variant="primary">Pagar</Button>
                                    </div>
                                    <div>
                                      <Button className='mt-2 ' size="sm" variant="outline-danger" onClick={ emptyCart } >
                                        Vaciar Carrito
                                      </Button>
                                    </div>

                                  </Card.Body>
                                </Card>
                            </Col>
                          </Row>
                </Card.Body>
              </Card>
          </Col>

        </Row>



      </Container>


    </>
  )
}

export default Cart