import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import { Link } from 'react-router-dom';


function ItemDetail( {prod} ) {

    console.log('el objeto prod de ItemDetail tiene:');
    console.log(prod);

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
                                <Card.Img variant="top" src={`${prod.foto}`} width="100" height="180"/>
                                <Card.Body>
                                    <Card.Title>{` ${prod.categoriaDescripcion} - ${prod.nameProducto}`}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{`U$S ${prod.price}`}</Card.Subtitle>
                                    <Card.Text>
                                        {`${prod.descriptionProducto}`}
                                    </Card.Text>
                                </Card.Body>
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