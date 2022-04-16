import {useState, useEffect} from 'react';
import ItemList from "../../components/ItemList/ItemList"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/esm/Container';
import { collection,  getDocs, getFirestore, query, where , orderBy} from 'firebase/firestore'

function ItemListContainer( ) {
  
  const [prods, setProds] = useState ([])
  const [loading , setLoading] = useState (true)

  const { Id } = useParams()

  useEffect(()=> {
    const db = getFirestore()
    const queryCollection =  collection(db, 'items' )
    const queryFilterByCategory = query(queryCollection, where('idCategory', '==' , parseInt(Id) ) )
    const queryFilterAll = query(queryCollection , orderBy("idCategory"))

    const queryFilter = Id ? queryFilterByCategory : queryFilterAll

    getDocs(queryFilter)
      .then(resp => setProds( resp.docs.map(prod =>( {id: prod.id, ...prod.data()}) ) ) )
      .catch(err => console.log(err))
      .finally( () => setLoading(false))  

  }, [Id])
  
  return (
    <>
        {
          loading   ? <img className="w-45 mx-auto " src="/img/loading.gif" alt="loading" />
                    : <Container>
                          <div className="row align-items-start m-3"> 
                              <ItemList prods={ prods } /> 
                          </div>
                      </Container>
        }
    </>
  )
}

export default ItemListContainer