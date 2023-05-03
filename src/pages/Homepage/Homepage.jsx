import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

//API Below

//https://fakestoreapi.com/docs



function Homepage() {

  //Create state to store items
  const[products, setProducts] = useState([])

  //Create state to store filter buttons
  const[filterButtons, setFilterButtons] = useState([])

  //I need to make an API call when the page loads
  useEffect(
    ()=>{
      //use axios to make API call
      axios.get(`https://fakestoreapi.com/products`).then(res=>{
        console.log(res.data)
        //store into state
        setProducts(res.data)
      }).catch(err => console.log(err))
    }, []
  )

  //This code below will be used to store categories into buttons
  useEffect(
    ()=>{
      axios.get('https://fakestoreapi.com/products/categories').then(res=>{
        console.log(res.data)
        //store into state
        setFilterButtons(res.data)
      }).catch(err => console.log(err))
    }, []
  )

  return (
    <div className='home-container'>

      <nav>
        {filterButtons.map((item, index)=> <button key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</button>)
        /*The charAt(0) takes the first letter and make it capital. The slice(1) removes the first letter and keeps the rest of the letters. So captial first letter + the rest will give you a string with capital letter */
        }
      </nav>

      <div className='items-container'>
        {
          products.map((item, index)=><ProductCard key={index} product={item} />)

          /*The comment code below is the syntax of how we want our code to look from API calls*/
          /* products.map((item, index)=><p key={index}>{item.title}</p>) */
        }
      </div>
    </div>
  )
}

export default Homepage