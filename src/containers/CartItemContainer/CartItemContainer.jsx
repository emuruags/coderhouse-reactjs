import { addDoc, collection,  documentId,  FieldPath, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React from 'react'
import Order from '../../components/Order/Order';
import { useCartContext } from '../../context/CarContext';
import {useState, useEffect} from 'react';
import CartList from '../../components/CartList/CartList';

function CartItemContainer() {
    
    const [order, setOrder] = useState(undefined);
    const [orderId, setOrderId] = useState(undefined);
    const [message, setMessage] = useState('');
    const {cartList, emptyCart, totalPrice} = useCartContext();

    // Funcion para validar stock en firebase y armar la orden
    const generateOrder = (name, email, phone) =>{

        setOrder(undefined);
        setMessage("");

        const db = getFirestore()
        
        const queryItemsCollection =  collection(db, 'items' )
        const queryItemsFilter = query(queryItemsCollection , 
                                    where( documentId() , 'in', cartList.map( x=> x.id))
                                    )

        getDocs(queryItemsFilter)
            .then(
                (itemsSnapshot) => {
                    const storedItems = itemsSnapshot.docs.map( doc => ({documentId: doc.id, ...doc.data()}))
                    let tempOrder = undefined;

                    tempOrder = {
                        buyer: {
                            name: name,
                            email: email,
                            phone: phone
                        },
                        items: [],
                        date: new Date(),
                        total: totalPrice()
                    }

                    for( const itemStored  of storedItems ) {
                        const item = cartList.find( x => x.id === itemStored.documentId)

                        if ( item ) {
                            if ( itemStored.productStock >= item.quantity ) {

                                tempOrder.items.push ( {
                                                            id: item.id,
                                                            productName: item.productName,
                                                            productPrice: item.productPrice,
                                                            productQuantity: item.quantity
                                                        } )

                            } else {
                                setMessage('Lo sentimos! No hay stock disponible.')
                                break;
                            }

                        }
                    }

                    setOrder(tempOrder)

                }
            )
            .catch(err => console.log(err))

            .finally( () => console.log('termino de cargar el promise generateOrder'))  
        
    }
    
    // Funcion para guardar la orden en firebase
    const saveOrder = () => {
        const db = getFirestore()
        const queryOrderCollection = collection (db,'orders')

        addDoc( queryOrderCollection, order )
            .then( queryOrderSnapshot => {
                    console.log('SU ORDEN DE COMPRA ES');
                    console.log(queryOrderSnapshot.id);
                    setOrderId(queryOrderSnapshot.id);
                    setMessage('');
                    emptyCart();
                } )
            .catch( err => console.log(err) )
            .finally( () => console.log('termino de cargar las orders') )
    }

    return (
    <>
        {

            orderId ? <Order orderId={ orderId }/> 
                    : <CartList generateOrder = { generateOrder } order= { order } saveOrder={ saveOrder } message={ message }/>
        }

        
    </>
  )
}

export default CartItemContainer