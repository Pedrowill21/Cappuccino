import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home'

import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from "./pages/about/About"
import Products from './pages/products/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="app">
      <BrowserRouter>
      <NavBar/>        
      
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>


          </Routes>
       <Footer/>   
      </BrowserRouter>
   </div>
  )
}

export default App
