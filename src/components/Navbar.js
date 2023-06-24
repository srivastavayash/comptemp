import React from 'react'
import './dot.css'
const Navbar = () => (
    <div className="flex flex-row justify-center items-center bg-gradient-to-r from-cyan-800 via-blue-950 to-cyan-500">
        <div><img src="./fav.png" alt="fav" /></div>
        <div className=""><span className='box p-2 text-2xl text-white cursor-pointer hover:underline underline-offset-4'>WhatsNext!</span></div>
    </div>
);

export default Navbar