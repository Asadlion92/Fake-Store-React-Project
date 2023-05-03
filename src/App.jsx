import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import Contact from './pages/Contact/Contact'
import ProductDetails from './pages/ProductDetails/ProductDetails'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product-details' element={<ProductDetails />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
