//import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import {useState} from 'react'

// import imgBarra from '../../img/barras/barra-20.jpg'

function ItemCount( {stock, onAdd} ) {

    const [countItem, setCountItem] = useState(1);

    const constStock = parseInt(stock);
    
    // console.log('el stock es');
    // console.log(constStock);

    const onIncrease= () => {
        if (countItem < constStock ) {
            setCountItem( countItem => countItem + 1 );
            // console.log('el stock actual es:');
            // console.log(constStock);
            // console.log('el contador es:');
            // console.log(countItem);
        }
    }

    const onDecrease = () => {
        if (countItem > 1) {
            setCountItem( countItem => countItem - 1 );
            // console.log('el stock actual es:');
            // console.log(constStock);
            // console.log('el contador es:');
            // console.log(countItem);
        }
    }

    const agregar = () => {
        onAdd( countItem );
    }
    

  return (
    <>

        {/* <Card style={{ width: '18rem' }} >
        <Card.Img variant="top" src={imgBarra} width="100" height="180"/>
        <Card.Body>
            <Card.Title>Barra Rogue</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">$30.000</Card.Subtitle>
            <Card.Text>
                Peso: 20kg

                Longitud: 2,18 mts

                Cromada Revestido manga: Cromado 
                
                Rodamiento: Buje
            </Card.Text>
            
            <div className='row'>
                <Card.Text>
                    <Button variant="outline-primary" size="sm" onClick={onAdd} > + </Button>
                        {countItem}
                    <Button variant="outline-danger" size="sm" onClick={onRemove} > - </Button>
                </Card.Text>    
            </div>
            
        </Card.Body>
        </Card> */}

        <Container>
            <Row>
                <Col>
                    <Button className='' variant="outline-danger" size="sm" onClick={onDecrease} > - </Button>
                </Col>
                <Col>
                    <Form.Control  size="sm text-center" type="text" placeholder=""  value = {countItem} >
                        
                    </Form.Control>
                </Col>
                <Col>
                    <Button className='' variant="outline-primary" size="sm" onClick={onIncrease} > + </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button className='mt-2 ' size="sm" variant="outline-secondary" onClick={ agregar } > Agregar al Carrito </Button>
                </Col>                                            
            </Row>
        </Container>

        
    </>
  )
}

export default ItemCount