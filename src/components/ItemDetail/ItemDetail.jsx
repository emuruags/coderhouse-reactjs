import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ItemDetail( {prod} ) {

    console.log('el objeto prod de ItemDetail tiene:');
    console.log(prod);

  return (
    //<div>ItemDetail</div>
    <>
        <Container>
            <Row>
                <Col>
                    <Card key={prod.id} style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={`${prod.foto}`} width="100" height="180"/>
                        <Card.Body>
                            <Card.Title>{` ${prod.categoriaDescripcion} - ${prod.nameProducto}`}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{`${prod.price}`}</Card.Subtitle>
                            <Card.Text>
                                {`${prod.descriptionProducto}`}
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default ItemDetail