import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import ProductCard from '../../components/ProductCard/ProductCard'

//API Below

//https://fakestoreapi.com/docs


function Homepage() {

  //Create state to store items
  const[products, setProducts] = useState([])

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

  return (
    <div className='home-container'>

      <nav>
        <button>Electronics</button>
        <button>Jewelery</button>
        <button>Men's Clothing</button>
        <button>Women's Clothing</button>
      </nav>
      <div className='items-container'>
        {
          products.map((item, index)=><ProductCard key={index} product={item} />)

          /* products.map((item, index)=><p key={index}>{item.title}</p>) */
        }
      </div>
    </div>
  )
}

export default Homepage