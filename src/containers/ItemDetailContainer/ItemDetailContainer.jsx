//import React from 'react'
import { useState ,useEffect } from 'react';
import { getFetch } from '../../helpers/getFetch';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

function ItemDetailContainer( { prodID } ) {

  const [prod, setProd] = useState ([])
    
  console.log('el valor del prodID es:');
  console.log(prodID);

  //prodID = 5;

  useEffect ( () => {
    console.log('llamar api de productos con el getfech filtrado');

    getFetch
    .then( resp => setProd(resp.find(prod=> parseInt(prod.id)  === parseInt(prodID) )))
    .catch( err => console.log(err))
    .finally( () => console.log('termino de cargar el promise filtrado'))



  }, []);



  return (
    // <div>ItemDetailContainer</div>
    <>

        <ItemDetail prod={prod}/>
        
    </>
  )
}

export default ItemDetailContainer