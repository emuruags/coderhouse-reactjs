import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import ItemDetailContainer from '../../containers/ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';


function Item( {prod} ) {
  return (
    // <div>Item</div>
   
    <>


        <Card key={prod.id} style={{ width: '18rem' }} >
        <Card.Img variant="top" src={`${prod.productImg}`} width="100" height="180"/>
        <Card.Body>
            <Card.Title>{` ${prod.categoryDescription} - ${prod.productName}`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{`U$S ${prod.productPrice}`}</Card.Subtitle>
            
            <div className='row'>
                <Card.Text>

                    <Link to={`/detalle/${prod.id}`}>
                        <Button variant="outline-secondary">Ver Detalle</Button>
                    </Link>

                </Card.Text>    
            </div>


        </Card.Body>
        </Card>




        
    </>

  )
}

export default Item