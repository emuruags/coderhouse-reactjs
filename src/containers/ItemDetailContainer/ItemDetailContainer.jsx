import { useState ,useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
import {  doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {
  const [loading , setLoading] = useState (true)
  const [prod, setProd] = useState ([])
  const { detalleId } = useParams()

  useEffect(()=> {
    const db = getFirestore()
    const queryDoc =  doc(db, 'items' , detalleId)   
    getDoc(queryDoc)
      .then(resp => setProd( {id: resp.id, ...resp.data()} ) ) 
      .catch(err => console.log(err))
      .finally( () => setLoading(false))
  }, [])

  return (
    <>
        {
          loading ? <img className="w-45 mx-auto " src="/img/loading.gif" alt="loading" />
                  : <ItemDetail prod={ prod }/>
        }
    </>
  )
}

export default ItemDetailContainer