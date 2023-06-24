import React from 'react'
import './dot.css'
import { home, info, contact, guide } from '../assets/image'
import Button from './Button'
const Leftpanel = () => {
  return (
    <div className='flex flex-col bg-black p-2 absolute top-12 bottom-0'>
      <span className='text-2xl text-blue-400  hover:cursor-pointer hover:underline flex flex-row justify-center items-center'>Navigation <Button /></span>
      <ul className='text-white p-4 text-lg'>
        <div className='flex flex-row '>
          <img src={home} alt="home" className='w-11 p-2'/>
          <li className='hover:border hover:rounded-md p-2 text  hover:ring-2 cursor-pointer mt-2'>Home</li>
        </div>
        <div className='flex flex-row '>
          <img src={contact} alt="home" className='w-11 p-2' />
          <li className='hover:border hover:rounded-md p-2 text  hover:ring-2 cursor-pointer mt-2'>contact</li>
        </div>
        <div className='flex flex-row '>
          <img src={info} alt="home" className='w-11 p-2'  />
          <li className='hover:border hover:rounded-md p-2 text  hover:ring-2 cursor-pointer mt-2'>Info</li>
        </div>
        <div className='flex flex-row '>
          <img src={guide} alt="home" className='w-11 p-2' />
          <li className='hover:border hover:rounded-md p-2 text  hover:ring-2 cursor-pointer mt-2'>Guide</li>
        </div>        </ul>
    </div>
  )
}

export default Leftpanel