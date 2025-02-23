import React, { useState } from 'react'
import { MagnifyingGlassIcon, UserIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full bg-navcolor">
      <div className="px-4 md:px-8 lg:px-16 flex flex-wrap justify-between items-center w-full py-4">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold font-inter italic">
          <h1 className='cursor-pointer'>Makinnumgun</h1>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Search Bar - Hidden on mobile, shown as full width below header */}
        <div className="hidden md:flex bg-white py-1 px-2 rounded-xl order-3 md:order-2 w-full md:w-auto my-4 md:my-0">
          <div className="flex justify-center items-center gap-x-1 w-full">
            <MagnifyingGlassIcon className="w-6 h-6 text-black" />
            <input
              type="text"
              placeholder="ค้นหาเมนู..."
              className="w-full py-2 font-inter border-none bg-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Navigation Links & Login */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row justify-center items-center gap-y-4 lg:gap-x-8 w-full lg:w-auto order-last lg:order-3`}>
          <ul className='flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 text-xl italic font-semibold'>
            <li className='cursor-pointer hover:text-white'>Home</li>
            <li className='cursor-pointer hover:text-white'>About</li>
            <li className='cursor-pointer hover:text-white'>Menu</li>
            <li className='cursor-pointer hover:text-white'>Contact</li>
          </ul>
          <div className="text-xl font-semibold text-white mt-4 lg:mt-0">
            <button className='bg-green-500 px-5 py-1 rounded-xl flex justify-center items-center gap-x-2 hover:bg-green-600 transition-colors'>
              <UserIcon className="w-6 h-6 text-white" />
              Login
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="flex md:hidden bg-white py-1 px-2 rounded-xl w-full my-4">
          <div className="flex justify-center items-center gap-x-1 w-full">
            <MagnifyingGlassIcon className="w-6 h-6 text-black" />
            <input
              type="text"
              placeholder="ค้นหาเมนู..."
              className="w-full py-2 font-inter border-none bg-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
