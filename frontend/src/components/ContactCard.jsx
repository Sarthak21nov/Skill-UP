import { Text } from '@radix-ui/themes/components/callout'
import React, { useState } from 'react'
import { AlertDialog } from "radix-ui";
import { Button } from '@radix-ui/themes';


function ContactCard() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [text, setText] = useState('')

    const theme = localStorage.getItem("Theme")

    const HandleClick = ()=>{
        if(name === ''||email === ''||phone === ''||text === ''){
            alert("For sending the review all the fields are mandatory.")
        } else{
            alert("Thank You for the review. We will get back to you in 24-48 hours")
            setName("")
            setEmail("")
            setPhone("")
            setText("")
        }
    }

  return (
    <div className='md:w-[60%] min-h-[250px] mt-7 w-[100%]'>
        <div className='bg-slate-200 shadow-2xl rounded-3xl'>
            <p className='text-center text-black text-2xl p-3'>Contact us here</p>
            <div className='flex-col p-5'>
                {theme === 'dark'?<p className='text-black'><i>Name: </i></p>: <p><i>Name: </i></p>}
                <input type='text' onChange={(e)=>setName(e.target.value)} value={name} className='w-full p-2 rounded-2xl' placeholder='Name' required/>
            </div>
            <div className='flex-col p-5'>
                {theme === 'dark'?<p className='text-black'><i>E-Mail: </i></p>: <p><i>E-Mail: </i></p>}
                <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full p-2 rounded-2xl' placeholder='E-Mail' required/>
            </div>
            <div className='flex-col p-5'>
                {theme === 'dark'?<p className='text-black'><i>Phone: </i></p>: <p><i>Phone: </i></p>}
                <input type='number' onChange={(e)=>setPhone(e.target.value)} value={phone} className='w-full p-2 rounded-2xl' placeholder='Phone Number' required/>
            </div>
            <div className='flex-col p-5'>
                {theme === 'dark'?<p className='text-black'><i>Message: </i></p>: <p><i>Message: </i></p>}
                <input type='text' onChange={(e)=>setText(e.target.value)} value={text} className='w-full min-h-[80px] p-2 rounded-2xl' placeholder='Enter your Message' required/>
            </div>
            <div className='flex p-5 m-auto'>
                <button className='p-2 rounded-2xl shadow-2xl bg-green-500' onClick={HandleClick}>
                    Send Message
                </button>
            </div>
        </div>
    </div>
  )
}

export default ContactCard