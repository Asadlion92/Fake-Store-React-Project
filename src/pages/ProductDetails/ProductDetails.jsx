import React from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails() {

  const {productId} = useParams()
  const [item, setItem] = React.useState('')

  React.useEffect(
    ()=>{
      axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(res => {console.log(res.data)
      //store in state
      setItem(res.data)
    })
      .catch(err => console.log(err))
    }, []
  )

  //'https://fakestoreapi.com/products/1'

  return (
    <div className='product-details-container'>
      <div className='product-details'>
        <img src={item?.image} />
        <div className='product-details-content'>
          <h2>{item?.title}</h2>
          <p>${item?.price}</p>
          <h3>Description</h3>
          <p>{item?.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails