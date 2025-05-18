import React from 'react'
import image from '../assets/OIP.jpeg'

function CourseCard() {

    const theme = localStorage.getItem("Theme")

  return theme === 'light' ? (
    <div className='w-[400px] min-h-[300px] bg-slate-300 shadow-2xl rounded-2xl mt-2 hover:scale-105 transform transition duration-500 hover:cursor-pointer'>
        <img src={image} className='w-full h-[50%] rounded-3xl'/>
        <p className='text-center font-poppins font-bold'>Title</p>
        <p className='text-center font-poppins p-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis similique pariatur harum? Fugit iusto ipsa minus error tempore maiores nostrum possimus repellendus, quasi sunt distinctio quod soluta rerum neque sit hic ut! Amet incidunt maiores mollitia vero tempora deserunt facilis nesciunt, at accusantium. Eaque omnis consectetur repudiandae ad</p>
    </div> ) : (<div className='w-[400px] min-h-[300px] bg-slate-300 shadow-2xl rounded-2xl mt-2 hover:scale-105 transform transition duration-500 hover:cursor-pointer'>
        <img src={image} className='w-full h-[50%] rounded-3xl'/>
        <p className='text-center font-poppins font-bold text-black'>Title</p>
        <p className='text-center font-poppins p-2 text-sm text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo veritatis similique pariatur harum? Fugit iusto ipsa minus error tempore maiores nostrum possimus repellendus, quasi sunt distinctio quod soluta rerum neque sit hic ut! Amet incidunt maiores mollitia vero tempora deserunt facilis nesciunt, at accusantium. Eaque omnis consectetur repudiandae ad</p>
    </div> )
}

export default CourseCard