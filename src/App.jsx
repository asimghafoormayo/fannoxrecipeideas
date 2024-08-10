import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import FoodDisplay from './components/FoodDisplay'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
   <div className="flex flex-col min-h-screen">
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main content (Outlet) expands to fill available space */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
    </>
  )
}

export default App