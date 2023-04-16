import React from 'react'
import { Link } from 'react-router-dom'
import { earBuds } from '../assets'
import ProductCard from './ProductCard'
import {AllProducts} from '../constants'
import Navbar from './Navbar'

const Products = () => {

  return (
    <>
    <Navbar/>
      <section className='relative w-[90%] mb-12   mx-auto ml-12 '>
        <div className={`w-full mx-auto relative z-0 mb-3 bg-[#F7F5F5] rounded px-3 py-2 mb-12`}>
          <h2 className='text-[30px] font-bold inline-block '>Our Top Selling Products</h2>
        </div>
        <div className='block mt-4 mb-3'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 inline-block mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
          </svg>
          <h2 className='text-[17px] font-bold inline-block '>Show Filters</h2>
        </div>

        <div className='grid grid-cols-3 gap-3'>
        {AllProducts.map((AllProducts , index)=>(
          <ProductCard key={index} index={index} {...AllProducts}/>
        ))}
        </div>

        {/* --------------------------------------------------About Boat-------------------------------------------------------- */}
        <h2 className='text-[30px] font-bold block mb-7'>Airdopes - The Top Rated Bluetooth Earbuds in the Market</h2>
        <p className='text-[16px] text-gray-600 font-family-Metropolis mb-5'>
        Airdopes offer the most incredible listening experience with revolutionary design. Truly in ear wireless with no cables, no connectors, and no hassles. Designed for comfort and unstoppable music, always remain on your toes as Airdopes brings to you the dopest tech there is out there!
        Style it up with our best earbuds, the new way to flaunt your vibe! From the Queen of Prints, Masaba's funky take on our Airdopes 441 wireless earbuds, to our TRebel range of earbuds, only for women - boAt is bringing to you crazy new feats every passing day. Magic and Music are synonymous when you plug in the Airdopes earphones!
        </p>
        <p className='text-[16px] text-gray-600 font-family-Metropolis mb-5'>
        Airdopes offer the most incredible listening experience with revolutionary design. Truly in ear wireless with no cables, no connectors, and no hassles. Designed for comfort and unstoppable music, always remain on your toes as Airdopes brings to you the dopest tech there is out there!
        </p>
        <p className='text-[16px] text-gray-600 font-family-Metropolis mb-5'>
        Airdopes offer the most incredible listening experience with revolutionary design. Truly in ear wireless with no cables, no connectors, and no hassles. Designed for comfort and unstoppable music, always remain on your toes as Airdopes brings to you the dopest tech there is out there!
        Style it up with our best earbuds, the new way to flaunt your vibe! From the Queen of Prints, Masaba's funky take on our Airdopes 441 wireless earbuds, to our TRebel range of earbuds, only for women - boAt is bringing to you crazy new feats every passing day. Magic and Music are synonymous when you plug in the Airdopes earphones!
        </p>



        {/* -------------------FAQ--------------------------------- */}
        <h2 className='text-[25px] font-bold inline-block '>FAQ</h2>
        <div className='faq block '>
        Q. Do wireless earbuds work with all phones?
        <br/>
        Yes, our wireless earbuds work with all phones with Bluetooth. boAt Airdopes connect instantly and give a seamless connection for the ultimate musical experience.
        </div>

        <div className='faq block'>
        Q. What is the difference between wireless and truly wireless earbuds?
          <br></br>
 Wireless earbuds are audio devices that connect to your Phone/Tablet/PC wirelessly, and the left and the right earpiece are connected via a wire. Truly wireless earbuds on the other hand have no wires at all.
  
        </div>

        <div className='faq block'>
        Q. Do wireless earbuds work with all phones?
        <br/>
        Yes, our wireless earbuds work with all phones with Bluetooth. boAt Airdopes connect instantly and give a seamless connection for the ultimate musical experience.
        </div>

        <div className='faq block'>
        Q. Can wireless earbuds be used individually?
        <br/>
        Yes, wireless earphones can be used individually. With wireless earbuds, you can keep one in the case and one plugged in your ear and still use it to groove to your music.
  
        </div>

        <div className='faq block'>
        Q. How to know that wireless earbuds are fully charged?
        <br/>
        boAt Airdopes will have led indicators on the charging case to show if the battery is fully charged. The LED indicators on the wireless earbuds vary from model to model. Please refer to the manual of the earbuds in the respective packaging for precise instructions.
        </div>


        <div className='faq block'>
        Q. How long does earbuds battery last?
        <br/>
        Yes, wireless earphones can be used individually. With wireless earbuds, you can keep one in the case and one plugged in your ear and still use it to groove to your music.
  
        </div>
      </section>
     
    </>
  )
}

export default Products
