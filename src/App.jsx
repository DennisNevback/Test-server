import { useState } from 'react'
import './App.css'
import Home from './assets/Pages/home'
import Footer from './assets/Pages/footer'
import Navbar from './assets/Pages/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
      <h1>testing123</h1>
    </div>
  )
}

export default App
