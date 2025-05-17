import React from 'react'

function Footer() {
    const theme = localStorage.getItem("Theme")
  return (
    <div className='w-full'>
        {theme === 'dark'?<p className='bg-slate-300 text-center text-black'> &copy; Made with ❤️ by Sarthak Yash Srivastava </p>: <p className='bg-slate-300 text-center'> &copy; Made with ❤️ by Sarthak Yash Srivastava </p>}
    </div>
  )
}

export default Footer