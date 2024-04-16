import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Change from './Pages/Change/Change'
import Footer from './Components/Footer/Footer'
import Simulateur from './Pages/Simulateur/Simulateur'

function App() {


  return (
    <div>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/Change" element={<Change/>}  />
      <Route path="/Simulateur" element={<Simulateur/>}  />
    

      </Routes>
      <Footer />


    </div>

  )
}

export default App
