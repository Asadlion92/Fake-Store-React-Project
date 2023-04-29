import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './components/Homepage/Homepage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App
