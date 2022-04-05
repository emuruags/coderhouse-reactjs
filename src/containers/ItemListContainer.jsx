//import React from 'react'
import {useState, useEffect} from 'react';
import { getFetch } from "../helpers/getFetch";
import ItemList from "../components/ItemList/ItemList"
//import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import { collection,  getDocs, getFirestore, query, where , orderBy} from 'firebase/firestore'

function ItemListContainer( {greeting} ) {
  
  const [prods, setProds] = useState ([])
  const { Id } = useParams()

  // useEffect ( () => {
  //   console.log('llamar api de productos');

  //   if (Id) {
  //     getFetch 
  //     .then( resp => setProds(resp.filter(prod=> parseInt(prod.idCategoria)  === parseInt(Id) )))
  //     .catch( err => console.log(err))
  //     .finally( () => console.log('termino de cargar el promise'))
  //   }else{
  //     getFetch
  //     .then( resp => setProds(resp))
  //     .catch( err => console.log(err))
  //     .finally( () => console.log('termino de cargar el promise'))
  //   }



  // }, [Id]);

  useEffect(()=> {
    const db = getFirestore()
    const queryCollection =  collection(db, 'items' )

    if (Id) {
      
       const queryFilter = query(queryCollection, 
            where('idCategory', '==' , parseInt(Id) ) 
       )
  
      getDocs(queryFilter)
      .then(resp => setProds( resp.docs.map(prod =>( {id: prod.id, ...prod.data()}) ) ) )
      .catch(err => console.log(err))
      .finally( () => console.log('termino de cargar el promise'))  
      console.log(prods);
    } else {

      const queryFilterAll = query(queryCollection , orderBy("idCategory"))
      getDocs(queryFilterAll)
      .then(resp => setProds( resp.docs.map(prod =>( {id: prod.id, ...prod.data()}) ) ) )
      .catch(err => console.log(err))
      .finally( () => console.log('termino de cargar el promise'))  
      console.log(prods);
    }


  }, [Id])


 
  console.log('ver el contenido de prods');
  console.log(prods);
 
  
  return (
    <>
      {greeting}
      {/* devuelvo la lista de productos */}
      
      {/* { prods.map( (prod) => <li>{prod.nameProducto}</li>)} */}



      {/* <ItemList prods={prods} />  */}


      <Container>

         <div className="row align-items-start m-3">

         <ItemList prods={prods} /> 

         </div>
     </Container>
      
      
    </>
  )
}

export default ItemListContainer