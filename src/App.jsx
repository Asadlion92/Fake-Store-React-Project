import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import Contact from './pages/Contact/Contact'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Checkout from './pages/Checkout/Checkout'
import CartContextProvider from './contexts/CartContext'
import CartItem from './components/CartItem/CartItem'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <Header />

          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart-item' element={<CartItem />} />
            <Route path='/product-details/:productId' element={<ProductDetails />} />
          </Routes>

          <Footer />
        </div>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
