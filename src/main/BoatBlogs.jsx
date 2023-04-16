import React from 'react'
import { ad1} from '../assets'

const BoatBlogs = () => {
  return (
    <>
      <section className='relative w-[85%] mb-10   mx-auto ml-12 '>
          <div className={`w-full mx-auto relative z-0 mb-3`}>
               <h2 className='text-[30px] font-bold inline-block'>B0<span className='text-[RED]'>A</span>T Blogs</h2>
          </div>

          <div className='grid grid-cols-3 gap-5 mb-10 '>
               <div className='block'>
                    <img src={ad1} alt="Blog" className='w-full h-[200px]'/>
                    <p className='text-[18px] font'>Here, we’ll tell you a story that will actually tell you how to meet CA Aman Gupta boAt. Rewind to 2015. Back then CA Aman Gupta boAt was just Aman Gupta. He had a well paying job, a family, and everything was hunky-dory.</p>
               </div>
               <div className='block'>
                    <img src={ad1} alt="Blog" className='w-full h-[200px]'/>
                    <p className='text-[18px]'>Here, we’ll tell you a story that will actually tell you how to meet CA Aman Gupta boAt. Rewind to 2015. Back then CA Aman Gupta boAt was just Aman Gupta.</p>
               </div>
               <div className='block'>
                    <img src={ad1} alt="Blog" className='w-full h-[200px]'/>
                    <p className='text-[18px]'>Here, we’ll tell you a story that will actually tell you how to meet CA Aman Gupta boAt. Rewind to 2015. </p>
               </div>
          </div>
          
      </section>

      <div className='w-full text-white h-[75px] bg-black justifu-center text-center mb-10'>
      India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!
      </div>
    </>
  )
}

export default BoatBlogs
