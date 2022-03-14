//import React from 'react'
import {useState, useEffect} from 'react';
import { getFetch } from "../helpers/getFetch";
import ItemList from "../components/ItemList/ItemList"

function ItemListContainer( {greeting} ) {
  
  const [prods, setProds] = useState ([])

  useEffect ( () => {
    console.log('llamar api de productos');

    getFetch
    .then( resp => setProds(resp))
    .catch( err => console.log(err))
    .finally( () => console.log('termino de cargar el promise'))


  }, []);


 
  console.log('ver el contenido de prods');
  console.log(prods);

  
  return (
    <>
      {greeting}
      {/* devuelvo la lista de productos */}
      
      {/* { prods.map( (prod) => <li>{prod.nameProducto}</li>)} */}


      <ItemList prods={prods} /> 

      
    </>
  )
}

export default ItemListContainer