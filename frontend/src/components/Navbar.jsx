import React, { useState } from 'react'
import { Avatar } from 'radix-ui'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'
import { SunIcon } from '@radix-ui/react-icons'

function Navbar({ setThemeAppearance, themeAppearance }) {
  const [isLoggedIn, setLogin] = useState(false)
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen)

  const ChangeTheme = () => {
    const newTheme = themeAppearance === 'light' ? 'dark' : 'light';
    setThemeAppearance(newTheme);
    localStorage.setItem("Theme", newTheme);
    if (isDrawerOpen) {
      setDrawerOpen(false);
    }
  };

  const HandleLogin = ()=>{
    setLogin(!isLoggedIn)
  }


  return (
    <div className="w-full h-[10vh] bg-green-600 flex justify-between items-center px-4 fixed top-0 z-10">
      {/* Logo */}
      <div className="w-[30%] md:w-[20%]">
        <h1 className="text-white font-semibold text-2xl">Skill Up</h1>
      </div>

      {/* Nav links - shown on md and up */}
      <div className="hidden md:flex md:w-[60%] justify-center">
        <ul className="flex gap-7 text-white items-center text-lg">
          <li><a href="#" className="hover:scale-110 transition duration-300 hover:cursor-pointer hover:font-semibold">Home</a></li>
          <li><a href="#learn" className="hover:scale-110 transition duration-300 hover:cursor-pointer hover:font-semibold">Learn</a></li>
          <li><a href="#about" className="hover:scale-110 transition duration-300 hover:cursor-pointer hover:font-semibold">About</a></li>
          <li><a href="#contact" className="hover:scale-110 transition duration-300 hover:cursor-pointer hover:font-semibold">Contact</a></li>
          <li onClick={ChangeTheme} className='hover:cursor-pointer'><SunIcon/></li>
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

        {/* Avatar/Login - only on medium and up */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle hover:cursor-pointer" onClick={HandleLogin}>
              <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11">
                PD
              </Avatar.Fallback>
            </Avatar.Root>
          ) : (
            <h1 className="font-medium text-white hover:scale-110 transition transform duration-300 hover:cursor-pointer" onClick={HandleLogin}>Login</h1>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="absolute top-[10vh] left-0 w-full bg-green-400 text-white z-20 flex flex-col items-start gap-4 px-6 py-6 md:hidden">
          <a href="#" onClick={toggleDrawer} className="text-lg hover:scale-110 transition duration-300 hover:cursor-pointer hover:font-semibold">Home</a>
          <a href="#learn" onClick={toggleDrawer} className="text-lg hover:scale-110 transition duration-300 hover:cursor-pointer hover:font-semibold">Learn</a>
          <a href="#about" onClick={toggleDrawer} className="text-lg hover:scale-110 transition duration-300 hover:cursor-pointer hover:font-semibold">About</a>
          <a href="#contact" onClick={toggleDrawer} className="text-lg hover:scale-110 transition duration-300 hover:cursor-pointer hover:font-semibold">Contact</a>
          <li onClick={ChangeTheme} className='no-decoration'><SunIcon/></li>
          {isLoggedIn ? (
            <Avatar.Root className="inline-flex size-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle mt-2" onClick={HandleLogin}>
              <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet-400">
                PD
              </Avatar.Fallback>
            </Avatar.Root>
          ) : (
            <h1 className="font-medium" onClick={HandleLogin}>Login</h1>
          )}
        </div>
      )}
    </div>
  )
}

export default Navbar
