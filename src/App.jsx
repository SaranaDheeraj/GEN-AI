import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Components/Index'
import Product from './Components/Index'
import NavBar from './Components/NavBar'
import SideBar from './Components/SideBar'

function App() {
  const data = [
    {
      name: "Acme Running Shoes",
      clientName: "Fitness Inc.",
      startDate: "2023-10-25",
    },
    {
      name: "Cedarwood Desk",
      clientName: "Tech Solutions",
      startDate: "2024-02-12",
    },
    {
      name: "Panorama Camera",
      clientName: "Travel Adventures",
      startDate: "2024-04-01",
    },
  ];

  return (
    <>
    <NavBar/>
    <div className='side'>
    <SideBar/> 
    <Product data={data} /> 
    </div>
    </>
  )
}

export default App
