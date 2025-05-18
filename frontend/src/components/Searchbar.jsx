import React, { useState } from 'react'

function Searchbar() {

    const [text, setText] = useState("")

    const HandleClick = () => {
        setText("")
    }

  return (
    <div className='w-full min-h-[8vh] bg-green-300 flex gap-4 p-3 fixed z-10'>
        <input type='text' className='w-[85%] rounded-3xl p-2' placeholder='Search course' onChange={(e)=> setText(e.target.value)} value={text}/>
        <button className='rounded-3xl shadow-2xl hover:scale-110 transition transform duration-300 bg-green-700 p-2 text white' onClick={HandleClick}>Search</button>
    </div>
  )
}

export default Searchbar