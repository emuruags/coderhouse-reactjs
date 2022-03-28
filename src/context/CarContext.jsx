import {createContext, useContext, useState, } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addToCart = (item) => {

        // const prod = cartList.find(x => parseInt (x.id) === parseInt(item.id) )
        const index = cartList.findIndex(x => parseInt (x.id) === parseInt(item.id) )

        if (index > -1) {
            const oldQy = cartList[index].quantity
            cartList.splice(index, 1)
            setCartList([...cartList, { ...item, quantity: item.quantity + oldQy}])
            
        }
        else {
            setCartList( [ ...cartList, item ] )
        }
        
    }

    
    /// vaia el carrito Clear
    const emptyCart = () =>{
        setCartList( [] )
    }

    /// eliminar 1 item
    const removeFromCart = (item) => {
        //Verificamos si esta en el carrito   
        console.log('el item id a borrar tiene:');
        console.log(item);
        const deleteItem = cartList.filter((prod) => parseInt( prod.id) !== parseInt(item));
        console.log('el filtrado a borrar qiente');
        console.log(deleteItem);
        
        setCartList([...deleteItem]);
      };   
  

    const isInCart = (item) => {
        /// Busca un item en el carro y devuelve true or false
        return cartList.find(x => x.id === parseInt(item.id) ) 
    }

    const quantityIconCart = () => {
        return cartList.reduce( (acumulado, item) => acumulado + item.quantity, 0)         
    }

    const totalPrice =()=>{
        return cartList.reduce((acum, valor) => (acum + (valor.quantity *  valor.price)) , 0) 
    }

    return (
        <CartContext.Provider 
            value={{ 
                cartList,
                addToCart,
                emptyCart,
                removeFromCart,
                isInCart,
                quantityIconCart,
                totalPrice
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider