import React from 'react'
import styles from '../styles';

import { MainImg, mainImg } from '../assets';

const Banner = () => {
     return (
          <>
               
               <section className='relative w-full h-screen mx-auto'>

                    <h1 className={`${styles.HeadText} text-black ml-12 mt-12 inline-block overflow-hidden`}>India's No.1 <br/><span className='text-[#e11f1f]'> Breathtaking <br/>Collections. </span><br/><p className={`text-[40px] text-[#725e5e] mt-12 font-weight-100 tracking-wider inline-block `}>India's First Wireless Neckband <br/> Powered By Dirac Virtuo Spatial <br/>Bionic Sound <br/>- boAt Rockerz Apex</p></h1>
                    
                    
                    <img src={mainImg} alt="logo" className="w-[60rem] h-[60rem] object-contain inline absolute left-[35%] z-10 mt-10  "></img>
                    <div className='circle inline-block '></div>

               </section>


          </>
     )
}

export default Banner
