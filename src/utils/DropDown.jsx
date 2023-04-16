import React from 'react';
import { Link } from "react-router-dom";


const DropDown = (props) => {
    const s1 = "rounded-t bg-white hover:bg-[#f6f2f2] py-2 px-4 block whitespace-no-wrap font-semibold hover:bg-blood hover:text-black ";
    const s2 =
    "px-4 py-2 font-semibold text-base rounded-full group-hover:drop-shadow-2xl shadow-sm bg-blood z-30 text-white-900 hover:drop-shadow-md hover:opacity-80";


    return (
    <div className="group inline-block relative">
    <Link to="/products" >
    <button
      className="text-white font-semibold mx-4 rounded inline-flex hover:underline underline-offset-4"
    >
     <span className={s2}>
        
        {props.title} &nbsp;
        { props.children.length!=0 && <svg
            className="fill-current inline h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
        </svg>}

     </span>
      
    </button>
    </Link>
    <ul className="ml-6 px-2 py-2 absolute hidden text-black pt-1 z-10 group-hover:block w-max bg-white-900 hover:drop-shadow-2xl border-blood hover:border-b-2 dark:bg-white-900 rounded-tl-lg rounded-b-lg">
        {
            props.children.map((e,i)=>{
                return (
                    <li><Link to={props.links[i]} className={s1}>{e}</Link></li>
                )
            })
        }
    </ul>

    {/* <li 
        key={link.id}
        className={`${active===link.title ? "text-[#ddd9d9] ":"text-white"} hover:text-white text-[20px] hover:underline underline-offset-2  font-medium cursor-pointer`}
        onClick={()=>setActive(link.title)}
    >
    
        <a href={`${link.id}`}>{link.title } 
        {link.children.length!=0 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>}
        </a>
        
    </li> */}
</div>  )
}

export default DropDown