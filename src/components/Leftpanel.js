import React from 'react'
import './dot.css'
import { home, info, contact, guide, cross,three } from '../assets/image'
const Leftpanel = () => {
  const hider = () => {
    document.getElementById('cont').style.display = "none";
  }
  const viewer=()=>{
    document.getElementById('cont').style.display="block";
  }
  return (
    <>
    <div id='nav' className=' flex flex-row '>
      <span className='bg-black text-white p-2 border-4 font-bold flex flex-row justify-center items-center'>Navigate <img src={three} onClick={viewer} alt="navigate" className='cursor-pointer w-8 pl-1 h-8'/></span>
    </div>
      <div id='cont' className='flex flex-col bg-black p-2 absolute top-12 bottom-0'>
        <span className='text-2xl text-white  hover:cursor-pointer  font-bold flex flex-row justify-center items-center'>Navigation <img src={cross} onClick={hider} alt="cross" className='p-2' /> </span>
        <ul className='text-white p-4 text-lg'>
          <div className='flex flex-row '>
            <img src={home} alt="home" className='w-11 p-2' />
            <li className='hover:underline hover:underline-offset-8 p-2 font-bold cursor-pointer mt-2'>Home</li>
          </div>
          <div className='flex flex-row '>
            <img src={contact} alt="home" className='w-11 p-2' />
            <li className='hover:underline hover:underline-offset-8 p-2 font-bold cursor-pointer mt-2'>contact</li>
          </div>
          <div className='flex flex-row '>
            <img src={info} alt="home" className='w-11 p-2' />
            <li className='hover:underline hover:underline-offset-8 p-2 font-bold cursor-pointer mt-2'>Info</li>
          </div>
          <div className='flex flex-row '>
            <img src={guide} alt="home" className='w-11 p-2' />
            <li className='hover:underline hover:underline-offset-8 p-2 font-bold cursor-pointer mt-2'>Guide</li>
          </div>        </ul>
      </div>
    </>
  )
}

export default Leftpanel