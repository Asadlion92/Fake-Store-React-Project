// import { useState, createContext, useEffect } from "react";
// import { FavoritesContext } from './FavoritesContext';

//Create the state
// export const FavoritesContext = createContext();

// export default function FavoritesContextProvider(props) {
//     //Create the global state
//     const [favorites, setFavorites] = useState([])

    //check local storage for initial state of darkMode when context loads
    // useEffect(
    //     ()=>{
    //         //console.log("context loaded")
    //         //is there a value in local storage
    //         const storedDarkMode = localStorage.getItem('darkMode')
    //         //console.log("value is", storedDarkMode)
    //         if (storedDarkMode !== null){
    //             setDarkMode(JSON.parse(storedDarkMode))
    //         }
    //         //otherwise it uses the default value
    //     }, []
    // )

    //save darkMode state anytime it changes
    // useEffect(
    //     ()=>{
    //         //console.log('darkmode toggled')
    //         //save current value to local storage
    //         localStorage.setItem('darkMode', JSON.stringify(darkMode))
    //     }, [darkMode] //runs when darkMode changes
    // )

//     const addItem = (itemToAdd) => {
//         console.log("add")
//     }


//     return(
//         <FavoritesContext.Provider value={{favorites, addItem}}>
//             {props.children}
//         </FavoritesContext.Provider>
//     )
// }