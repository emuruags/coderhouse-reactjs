// import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Item from '../Item/Item'

function ItemList( { prods } ) {
  return (
    // <div>ItemList</div>
    <>
        {/* { prods.map( (prod) =>  <Item  key={prod.id}  prod={prod} /> )} */}

        
        { prods.map( (prod) =>   
          <>
            <Container fluid="md">
                <Row>
                  <Col>
                    <Item  key={prod.id}  prod={prod} />
                  </Col>
                </Row>
            </Container>
          </>

        
        )}
            
        

    </>
  )
}

export default ItemList