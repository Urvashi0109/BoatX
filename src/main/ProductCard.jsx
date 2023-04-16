import React from 'react'
import { earBuds, pro1 } from '../assets'
import { Link } from 'react-router-dom'


const ProductCard = ({ index, title, icon, cost, discount, mrp, rating, offer }) => {
     return (
          <>

               <Link to="#" class="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800  mb-7">
                         <div class="grid grid-cols-3 gap-0">
                              <div className='col-span-1 bg-[#F7F5F5] m-2 border-black rounded'>
                                   <img class="object-cover " src={icon} alt="" />
                              </div>

                              <div className='col-span-2 mr-4'>

                                   <div class="flex flex-col justify-between pl-2 leading-normal top-0">
                                        <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                        <div class="inline">
                                             <span className="text-black font-semibold text-base mr-2 px-1">₹ {cost}</span>
                                             <span className="text-[#00cc00] text-base mr-2 px-1">{discount} % off</span>
                                             <span className="text-black text-xs mr-2 px-1 line-through">$ {mrp}</span>
                                        </div>

                                        <hr class="h-px mb-1 bg-gray-200 border-0 dark:bg-black" />
                                        <div class="inline">
                                             <span className="text-black text-xs mr-2 px-1 mb-2"><i class="fas fa-star text-[#00cc00]"></i>{rating} <span class="text-[#a0aec0]"> | </span> 12 reviews</span>
                                        </div>
                                        <div className="text-black text-xs mt-2 px-1 mb-2">
                                             {offer}
                                        </div>
                                        <div class="pt-2 pb-2">
                                             <button class="w-full bg-[#FFBF00] hover:dark-bg-[#FDDA0D] text-black font-bold py-2 px-1 rounded">
                                                  Add to Cart
                                             </button>
                                        </div>
                                   </div>
                              </div>

                         </div>

                    </Link>

          </>
     )
}

export default ProductCard
