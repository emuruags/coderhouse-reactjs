// import React from 'react'
import Item from '../Item/Item'

function ItemList( { prods } ) {
  return (
    // <div>ItemList</div>
    <>
        { prods.map( (prod) =>  <Item  key={prod.id}  prod={prod} /> )}
        {/* {prods.map((prod) => <Item prod={prod} /> )} */}
    </>
  )
}

export default ItemList