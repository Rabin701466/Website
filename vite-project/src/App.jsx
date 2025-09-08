import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
// import Hero from './Components/Hero/Hero'

function App() {


  return (
    <>
      <div className="container">
        <Navbar />
        <Services/>
        <Footer />
      </div>

    </>
  )
}

export default App
