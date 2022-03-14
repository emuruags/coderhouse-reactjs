import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';


function Item( {prod} ) {
  return (
    // <div>Item</div>
   
    <>


        <Card key={prod.id} style={{ width: '18rem' }} >
        <Card.Img variant="top" src={`${prod.foto}`} width="100" height="180"/>
        <Card.Body>
            <Card.Title>{` ${prod.categoriaDescripcion} - ${prod.nameProducto}`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{`${prod.price}`}</Card.Subtitle>
            <Card.Text>
                {`${prod.descriptionProducto}`}
            </Card.Text>
            
            <div className='row'>
                <Card.Text>
                    {/* <Button variant="outline-primary" size="sm" onClick={onAdd} > + </Button>
                        {countItem}
                    <Button variant="outline-danger" size="sm" onClick={onRemove} > - </Button> */}
                </Card.Text>    
            </div>
            
        </Card.Body>
        </Card>




        
    </>

  )
}

export default Item