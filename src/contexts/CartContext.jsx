import { useState, createContext, useEffect } from "react";
// import { CartContext } from './CartContext';

//Create the state
export const CartContext = createContext();

export default function CartContextProvider(props) {
    //Create the global state
    const [cart, setCart] = useState([])


    // check local storage for initial state of favoriteItems when context loads
    useEffect(
        ()=>{
            //console.log("context loaded")
            //is there a value in local storage
            const storedItems = localStorage.getItem('favoriteItems')
            if (storedItems){
                setCart(JSON.parse(storedItems))
                //To undo the Stringify, we have to Parse
            }
            //otherwise it uses the default value
        }, []
    )

    //This function will be use to add items to my cart
    const addItem = (itemToAdd) => {
        console.log('add', itemToAdd)
        //Create a local array
        let newItems = [...cart, itemToAdd]
        // console.log(newItems)
        //update the state
        setCart(newItems)
        //update local storage
        localStorage.setItem('favoriteItems', JSON.stringify(newItems))
    }

    const removeItem = (itemId) => {
        console.log('remove', itemId)
        //use filter to keep all values that don't match this id
        let newItems = cart.filter(item=> item.id !== itemId)
        //update the state
        setCart(newItems)
        //update local storage
        localStorage.setItem('favoriteItems', JSON.stringify(newItems))
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem}}> {/*putting cart here is to let us know what it is that we need to make available in the other places*/}
            {props.children}
        </CartContext.Provider>
    )
}