import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ItemCount from '../ItemCount/ItemCount';
//import { Link } from 'react-router-dom';
import {useState} from 'react'
import ItemCheckOut from '../ItemCheckOut/ItemCheckOut';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CarContext';



function ItemDetail( {prod} ) {

    const [isCheckout, setCheckout] = useState(false);
    
    /// Declaracion para usar el Contexto
    const {addToCart} = useCartContext()

    console.log('el objeto prod de ItemDetail tiene:');
    console.log(prod);


    // const onAdd = (cant) => {
    //     console.log(cant)
    // }

    const onAdd = (countItem) => {


        if (prod.productStock >= countItem) {
            // Hemos recibido un evento del ItemCount
            // console.log('el valor de countItem es:');
            // console.log(countItem);

            /// Agregamos el item al contexto
            addToCart( { ...prod, quantity: countItem } );
            setCheckout(true);
        }

    }
       

  return (
    //<div>ItemDetail</div>
    <>

        <Container>
            <Row>
                <Col className='col-4'>

                </Col>
                <Col>
                    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3 text-center pl-3 ">


                    <div className="bg-light me-md-3 pt-3 px-3 pt-md-2 px-md-3 text-center overflow-hidden">
                        <div className="my-3 p-3">

                            <Card key={prod.id} style={{ width: '18rem' }} >
                                <Card.Img variant="top" src={`${prod.productImg}`} width="100" height="180"/>
                                <Card.Body>
                                    <Card.Title>{` ${prod.categoryDescription} - ${prod.productName}`}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{`U$S ${prod.productPrice}`}</Card.Subtitle>
                                    <Card.Text>
                                        {`${prod.productDescription}`}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    {/* <Button className=''variant="outline-primary" size="sm" onClick={onAdd} > + </Button>
                                        {countItem}
                                    <Button className='ml-2' variant="outline-danger" size="sm" onClick={onRemove} > - </Button> */}

                                    {/* <Container>
                                        <Row>
                                            <Col>
                                                <Button className='' variant="outline-primary" size="sm" > + </Button>
                                            </Col>
                                            <Col>
                                            <Form.Control  size="sm" type="text" placeholder=""  />
                                            </Col>
                                            <Col>
                                            <Button className='' variant="outline-danger" size="sm" > - </Button>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                            <Button className='mt-2 ' size="sm" variant="outline-secondary">Agregar al Carrito</Button>
                                            </Col>                                            
                                        </Row>
                                    </Container> */}

                                    <Container>
                                        {/* Funcionalidad SIN "Ver Carrito" */}
                                        <Row>
                                            <Col>
                                                { isCheckout ? <ItemCheckOut/> : <ItemCount initial={1} stock={prod.productStock} onAdd = { onAdd }/>}
                                            </Col>                                            
                                        </Row>

                                        {/* Funcionalidad con "Ver Carrito" */}
                                        {/* <Row>
                                            <Col>
                                                <ItemCount initial={1} stock={prod.stock} onAdd = { onAdd }/>
                                            </Col>                                            
                                        </Row>
                                        <Row>
                                            <Col>
                                                { isCheckout ? <ItemCheckOut/> :
                                                
                                                <>
                                                    <Link to='/cart'>
                                                        <Button className='mt-2 ' size="sm" variant="outline-secondary" onClick={console.log('ir a cart') } >
                                                        Ver Carrito
                                                        </Button>
                                                    </Link>
                                                    <Link to='/'>
                                                        <Button className='mt-2 ' size="sm" variant="outline-secondary" onClick={console.log('Seguir Comprando') } >
                                                        Seguir Comprando
                                                        </Button>
                                                    </Link>
                                                </>


                                                }
                                            </Col>                                            
                                        </Row> */}
                                        

                                    </Container>


                                </Card.Footer>
                            </Card>

                        </div>
                        <div className="bg-dark shadow-sm mx-auto" ></div>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>



    </>
  )
}

export default ItemDetail