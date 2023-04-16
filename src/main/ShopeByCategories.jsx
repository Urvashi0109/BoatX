import React from 'react'
import { Link } from "react-router-dom";

import { Categories } from "../constants"

const CategoryCard = ({ index, title, icon }) => {
     return (
          <>
          <div class="relative max-w-sm rounded-[8px] overflow-hidden shadow-lg bg-[#E8E8E8] w-[210px] h-[100px] inline">
               <span className="absolute text-center top-[8px] text-black font-semibold text-base m-3 px-2 w-1/2">{title}</span>
               <img class="w-[100px] h-[100px] absolute inset-y-0 right-0" src={icon} alt="Product" />
          </div>
          </>
     )
}

const ShopeByCategories = () => {
  return (
    <>
      <section className='relative w-[85%] mb-12  mx-auto ml-12 '>
          <div className={`w-full mx-auto relative z-0 mb-3`}>
               <h2 className='text-[30px] font-bold inline-block'>Shop By Categories</h2>   
          </div>
          <Link to="/products" className='h-200 w-200  flex flex-wrap gap-4'>
               {Categories.map((Categories, index) => (
               <CategoryCard key={Categories.title} index={index} {...Categories} />
               ))}
          </Link>
          
      </section>
    </>
  )
}

export default ShopeByCategories
