import React from 'react';
import background from '../assets/Your paragraph text.png';
import { Button } from '@radix-ui/themes';
import { Link } from 'react-router-dom';

function Learn() {
  return (
    <section id='learn' className='overflow-x-hidden overflow-y-hidden'>
      <h1 className='text-center text-5xl font-semibold'>Learn with us</h1>
      
      <div className='relative bg-black'>
        <img src={background} className='w-full p-5' loading='lazy' />

        <div className='absolute z-10 top-20 w-full flex h-full justify-center items-center md:translate-y-[-10%] md:translate-x-[30%] translate-y-[-20%] translate-x-[22%]'>
            <h1 className='md:text-2xl text-md font-bold'>Click on the button below <br/>to access the Learning Page</h1>
        </div>
        {/* ✅ Add w-full here */}
        <div className='absolute top-20 w-full z-10 flex justify-center items-center h-full md:translate-x-[30%] translate-x-[25%]'>
          <a href='/learn'><Button radius="full" variant="soft" className='hover:scale-110 hover:cursor-pointer transition transform duration-500 z-1'>
            Click to Learn
          </Button></a>
        </div>
      </div>
    </section>
  );
}

export default Learn;
