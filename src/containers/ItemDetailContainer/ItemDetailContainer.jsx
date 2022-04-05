//import React from 'react'
import { useState ,useEffect } from 'react';
import { getFetch } from '../../helpers/getFetch';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"

import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'

function ItemDetailContainer(  ) {

  const [prod, setProd] = useState ([])

  const { detalleId } = useParams()

  console.log('el valor detalleID recibido como prop de UseParams es:');
  console.log(detalleId);
    


  // useEffect ( () => {


  //   getFetch
  //   .then( resp => setProd(resp.find(prod=> parseInt(prod.id)  === parseInt(detalleId) )))
  //   .catch( err => console.log(err))
  //   .finally( () => console.log('termino de cargar el promise filtrado'))



  // }, []);


  useEffect(()=> {
    const db = getFirestore()

    const queryDoc =  doc(db, 'items' , detalleId)
    
    getDoc(queryDoc)

    .then(resp => setProd( {id: resp.id, ...resp.data()} ) ) 
    .catch(err => console.log(err))
    .finally( () => console.log('termino de cargar el promise en ItemDetailContainer'))  
    console.log(prod);
  }, [])



  return (
    <>

        <ItemDetail prod={prod}/>
        
    </>
  )
}

export default ItemDetailContainer