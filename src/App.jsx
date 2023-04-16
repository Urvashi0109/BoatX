import { useState } from 'react'
import { BrowserRouter, Link ,Route , Routes} from 'react-router-dom'
import Navbar from './main/Navbar'
import './App.css'
import Banner from './main/Banner'
import DailyDeals from './main/DailyDeals'
import ShopeByCategories from './main/ShopeByCategories'
import BestOfBoat from './main/BestOfBoat'
import BoatBlogs from './main/BoatBlogs'
import Contact from './main/Contact'
import AllProducts from './main/AllProducts'

function App() {


  return (
    <>
      
        <Navbar />
        <Banner/>
        <DailyDeals/>
        <ShopeByCategories/>
        <BestOfBoat/>
        <BoatBlogs/>
        <Contact/>
      

    </>
  )
}

export default App
