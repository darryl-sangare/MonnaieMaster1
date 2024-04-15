import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import About from './Pages/About/About'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/About" element={<About/>}  />
    

      </Routes>
      <Footer />


    </div>

  )
}

export default App
