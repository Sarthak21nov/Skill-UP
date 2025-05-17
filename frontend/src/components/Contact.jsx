import React from 'react'
import ContactCard from './ContactCard'

function Contact() {
  return (
    <section id='contact' className='m-7'>
      <p className='text-6xl font-poppins text-center font-semibold'>CONTACT US</p>
      <div className='w-full min-h-300px md:grid md:grid-cols-2 flex flex-wrap'>
        <div className='md:col-span-1 flex-col p-6'>
          <p className='text-center text-4xl'>Any Suggestions?</p>
          <p className='text-center text-2xl p-4'>Contact Us Here or Connect on E-mail</p>
          <p>At Skill Up, we value your feedback, questions, and suggestions. Our mission is to build a seamless and enriching learning experience, and your input plays a vital role in helping us achieve that goal. Whether you have a query about our resources, need help navigating the platform, or want to collaborate with us, we're just a message away.<br/>

          The Contact section offers an easy way for learners, educators, and partners to reach out. Simply fill out the contact form with your name, email, and message, and our support team will get back to you promptly. You can also email us directly for specific inquiries, partnership opportunities, or support-related issues.<br/>

          We strive to respond within 24–48 hours on working days and are always happy to assist you in your learning journey. Your experience matters, and we’re committed to making Skill Up better with every interaction.<br/>

          Stay connected, stay curious—and never hesitate to reach out. Let’s grow together!</p>
        </div>
        <div className='md:col-span-1 flex justify-center items-center w-full'>
          <ContactCard />
        </div>
      </div>
    </section>
  )
}

export default Contact