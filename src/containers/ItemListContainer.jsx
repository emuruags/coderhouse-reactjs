//import React from 'react'
import {useState, useEffect} from 'react';
import { getFetch } from "../helpers/getFetch";
import ItemList from "../components/ItemList/ItemList"
//import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

function ItemListContainer( {greeting} ) {
  
  const [prods, setProds] = useState ([])
  const { Id } = useParams()

  useEffect ( () => {
    console.log('llamar api de productos');

    if (Id) {
      getFetch 
      .then( resp => setProds(resp.filter(prod=> parseInt(prod.idCategoria)  === parseInt(Id) )))
      .catch( err => console.log(err))
      .finally( () => console.log('termino de cargar el promise'))
    }else{
      getFetch
      .then( resp => setProds(resp))
      .catch( err => console.log(err))
      .finally( () => console.log('termino de cargar el promise'))
    }



  }, [Id]);


 
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