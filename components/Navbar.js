import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
<nav className='bg-purple-700 text-white flex flex-col md:flex-row md:justify-between md:items-center px-4 py-3'>
        
    <div className='logo font-bold text-2xl mb-2 md:mb-0 flex justify-center md:justify-start'>
        <Link href="/">Bitlinks</Link>
    </div>
        
    <ul className='flex flex-wrap justify-center md:justify-end items-center gap-3 text-sm md:text-base'>
        <Link href="/" ><li className='hover:text-gray-100'>Home</li></Link>
        <Link href="/about" ><li className='hover:text-gray-100'>About</li></Link>
        <Link href="/shorten" ><li className='hover:text-gray-100'>Shorten</li></Link>
        <Link href="/contactus" ><li className='hover:text-gray-100'>Contact Us</li></Link>

        <li className='flex gap-2'>
            <Link href="/shorten" >
                <button className='bg-purple-500 shadow-lg px-3 py-1 rounded-lg font-bold'>
                    Try Now
                </button>
            </Link>

            <Link href="https://github.com/ashwaniiikuma/Bitlinks-website" target="_blank">
                <button className='bg-purple-500 shadow-lg px-3 py-1 rounded-lg font-bold'>
                    Github
                </button>
            </Link>
        </li>
    </ul>

</nav>
  )
}

export default Navbar
