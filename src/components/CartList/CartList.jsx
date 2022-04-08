import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { BsTrash } from "react-icons/bs";
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { useCartContext } from '../../context/CarContext'
import { Form } from 'react-bootstrap';

function CartList( { generateOrder, saveOrder, order, message} ) {
    const {cartList, emptyCart, removeFromCart, quantityIconCart, totalPrice} = useCartContext()
    const [isFinishOrder, setisFinishOrder] = useState(false);

    const [showOrderPanel, setshowOrderPanel] = useState(false);

    const [name, setName] = useState('')
    const [email, setEmal] = useState('')
    const [phone, setPhone] = useState('')


    const isCheckOurt = () => {
        setshowOrderPanel(true);
    }
    
    const checkOut = () => {
        // generateOrder(totalPrice())
        generateOrder(name,email,phone)
        console.log(order);
        setisFinishOrder(true)
       
        
        
    }
    const finishOrder = () => {
        saveOrder();
       
    }

    const emptyCartFunc = () => {
        setshowOrderPanel(false);
        emptyCart();
    }

  return (
    // <div>CartList</div>
    <>
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
                                                        <Card.Img variant="top" src={`${prod.productImg}`} width="30" height="60"/>
                                                      </div>
                                                      <div className="ms-2 me-auto">
                                                        <div className="fw-bold">{` ${prod.categoryDescription} - ${prod.productName}`}</div>
                                                        Precio
                                                        {` U$S ${prod.productPrice}`}
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
                                  <Card.Header>Resumen</Card.Header>
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
                                    
                                    {/* Styling condicional para generar orden o grabar orden*/}
                                    
                                      <div>
                                                <Button variant="outline-primary" onClick={ isCheckOurt } > Check Out</Button>
                                            </div>
                                    {/* {
                                        isFinishOrder ?   
                                                <div>
                                                    <Button variant="success" onClick={ finishOrder }> Pagar</Button>
                                                </div>
                                                :
                                                        <div>
                                                        <Button variant="outline-primary" onClick={ checkOut }> Check Out</Button>
                                                        </div>
                                    } */}

 


                                        <div>
                                            <Button className='mt-2 ' size="sm" variant="outline-danger" onClick={ emptyCartFunc } >
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

      <Container>
        <Row className='mt-5'>
            <Col className='col-3'/>
            
            <Col className='col-6'>
            {
                showOrderPanel ?                                 
                        <Card>
                        <Card.Header>Datos del comprador</Card.Header>
                        <Card.Body>

                        <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre Completo</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese su nombre..." onChange={event => setName(event.target.value)} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={event => setEmal(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" placeholder="ingrese su celular"  onChange={event => setPhone(event.target.value)}/>
                        </Form.Group>
                        
                        </Form>
                        
                            {/* <div>
                            <Button variant="primary" onClick={ finishOrder }> Pagar</Button>
                            </div> */}
                                                                {
                                        isFinishOrder ?   
                                                <div>
                                                    <Button variant="success" onClick={ finishOrder }> Pagar </Button>
                                                </div>
                                                :
                                                        <div>
                                                        <Button variant="outline-primary" onClick={ checkOut }> Generar Orden </Button>
                                                        </div>
                                    }




                        </Card.Body>

                    </Card>
              : <></>
            }
            </Col>   
        </Row>
      </Container>

    </>
  )
}


export default CartList