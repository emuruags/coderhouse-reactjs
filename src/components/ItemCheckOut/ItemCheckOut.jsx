import React from 'react'
import Button from 'react-bootstrap//Button'
import { Link } from 'react-router-dom'


function ItemCheckOut() {
  return (
    // <div>ItemCheckOut</div>
    <>
        <Link to='/cart'>
            <Button className='mt-2 ' size="sm" variant="outline-secondary" onClick={console.log('ir a cart') } >Finalizar Compra</Button>
        </Link>

    </>
  )
}

export default ItemCheckOut