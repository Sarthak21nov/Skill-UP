import { Theme } from '@radix-ui/themes'
import React, { useState } from 'react'
import { Avatar } from 'radix-ui'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

function Navbar() {

  const [isLoggedIn, setLogin] = useState(true)
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen)

  return (
    <div className="w-full h-[10vh] bg-green-600 flex justify-between items-center px-4 fixed top-0 z-1000">
      {/* Logo */}
      <div className="w-[30%] md:w-[20%]">
        <h1 className="text-white font-semibold text-2xl">Skill Up</h1>
      </div>

      {/* Nav links - shown on md and up */}
      <div className="hidden md:flex md:w-[60%] justify-center">
        <ul className="flex gap-7 text-white items-center text-lg">
          <a href='#'><li className='hover:scale-110 transition transform duration-300 hover:cursor-pointer hover:font-semibold'>Home</li></a>
          <a href='#learn'><li className='hover:scale-110 transition transform duration-300 hover:cursor-pointer hover:font-semibold'>Learn</li></a>
          <a href='#about'><li className='hover:scale-110 transition transform duration-300 hover:cursor-pointer hover:font-semibold'>About</li></a>
          <a href='#contact'><li className='hover:scale-110 transition transform duration-300 hover:cursor-pointer hover:font-semibold'>Contact</li></a>
        </ul>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Hamburger - only on small screens */}
        <div className="md:hidden">
          <button onClick={toggleDrawer}>
            {isDrawerOpen ? (
              <IoClose className="text-white text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Avatar/Login */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
              <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11">
                PD
              </Avatar.Fallback>
            </Avatar.Root>
          ) : (
            <h1 className="font-medium text-white">Login</h1>
          )}
        </div>
      </div>

      {/* Drawer - shown only on mobile */}
      {isDrawerOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-green-600 text-white z-50 flex flex-col items-center gap-4 py-4 md:hidden">
          <li className='hover:scale-110 transition transform duration-300 hover:cursor-pointer hover:font-semibold'>Home</li>
          <li className='hover:scale-110 transition transform duration-300 hover:cursor-pointer hover:font-semibold'>Learn</li>
          <li className='hover:scale-110 transition transform duration-300 hover:cursor-pointer hover:font-semibold'>About</li>
          <li className='hover:scale-110 transition transform duration-300 hover:cursor-pointer hover:font-semibold'>Contact</li>
          {isLoggedIn ? (
            <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
              <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet-400">
                PD
              </Avatar.Fallback>
            </Avatar.Root>
          ) : (
            <h1 className="font-medium">Login</h1>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar