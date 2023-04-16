import React, { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import styles from '../styles';
import { NavLinks } from '../constants'
import DropDown from '../utils/DropDown';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // console.log(styles)
  // console.log(NavLinks)
  return (
    <>
      <nav className={`${styles.paddingx} w-full mb-10 flex items-center py-3 sticky top-0 z-20 bg-black shadow-lg shadow-[#c0bdbd]`}>
        <div className="w-full flex items-center max-w-[90%] mx-auto">
          <Link to="/" className="flex items-center gap-2" onclick={() => {
            setActive("");
            // window.scrollTo(0, 0)
          }}>

            <p className='text-white text-[43px] font-bold cursor-pointer flex '>
              BO<span className='text-[red] '>A</span>T
            </p>
          </Link>


          {
            NavLinks.map((e) => (
            <DropDown title={e.title} children={e.children} links={e.links} />
              
            ))
          }

          <div className="flex flex-row absolute right-20">
            <div className='relative w-full'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 "
              />
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 mx-3 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>

            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 mx-3 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>

          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar
