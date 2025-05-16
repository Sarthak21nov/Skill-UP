import React from 'react'
import photo from '../assets/depositphotos_68789187-stock-photo-students.jpg'
import mission from '../assets/OIP.jpeg'
import offer from '../assets/studentTeacher.jpeg'
import community from '../assets/studentCommunity.jpeg'

function About() {
  return (
    <section id='about' className='mt-7'>

        {/* Main Section */}
        <div className='w-full min-h-[250px] bg-slate-100'>
            <div className='md:grid md:grid-cols-2 flex flex-wrap'>
                {/* Left Div */}
                <div className='flex-col md:col-span-1'>
                    <p className='text-4xl font-poppins font-semibold text-center pt-8 animation-left'>About US</p>
                    <p className='p-4 text-center animation-left'>Skill Up is a free online learning platform that empowers students with a wide range of skill development resources. It offers curated content across multiple domains such as technology, business, design, and more. The platform is designed to help learners upgrade their skills at absolutely no cost—₹0. Skill Up promotes self-paced learning, making it accessible and flexible for students from all backgrounds. Its mission is to bridge the skill gap and prepare individuals for real-world opportunities.</p>
                </div>
                {/* Right Div */}
                <div className='flex justify-center items-center md:col-span-1'>
                    <img src={photo} className='w-[50%] m-5 rounded-3xl animation-right'/>
                </div>
            </div>
        </div>

        {/* Second Section */}
        <div className='md:grid md:grid-cols-2 flex flex-wrap flex-row-reverse'>
            {/* Left Div */}
            <div className='flex justify-center items-center md:col-span-1'>
                <img src={mission} className='w-[50%] m-5 rounded-3xl animation-left'/>
            </div>
            {/* Right Div */}
            <div className='flex-col md:col-span-1'>
                <p className='text-4xl font-poppins font-semibold text-center pt-8 animation-right'>Our Mission</p>
                <p className='p-4 text-center animation-right'>At Skill Up, our mission is to democratize education by breaking down the barriers of cost and accessibility. In an era where upskilling is essential for career growth and adaptability, we strive to provide every student—regardless of background or financial status—with free access to high-quality learning materials. We believe that learning is a basic right, not a privilege, and we are committed to helping individuals unlock their potential through free, relevant, and practical resources.</p>
            </div>
        </div>

        {/* Third Div */}
        <div className='md:grid md:grid-cols-2 flex flex-wrap'>
            {/* Left Div */}
            <div className='flex-col md:col-span-1'>
                <p className='text-4xl font-poppins font-semibold text-center pt-8 animation-left'>What We Offer?</p>
                <p className='p-4 text-center animation-left'>Skill Up offers a comprehensive library of resources across various in-demand domains including technology, entrepreneurship, digital marketing, data analytics, soft skills, and more. From beginner-friendly tutorials to advanced guides and real-world projects, we cater to learners at every stage. Our platform includes articles, video lessons, curated course links, downloadable materials, and community support—all without charging a single rupee. Whether you're looking to land your first internship or pivot to a new career path, Skill Up has you covered.</p>
            </div>
            {/* Right Div */}
            <div className='flex justify-center items-center md:col-span-1'>
                <img src={offer} className='w-[50%] m-5 rounded-3xl animation-right'/>
            </div>
        </div>

        {/* Final Div */}
        <div className='md:grid md:grid-cols-2 flex flex-wrap'>
            {/* Left Div */}
            <div className='flex justify-center items-center md:col-span-1'>
                <img src={community} className='w-[50%] m-5 rounded-3xl animation-left'/>
            </div>
            {/* Right Div */}
            <div className='flex-col md:col-span-1'>
                <p className='text-4xl font-poppins font-semibold text-center pt-8 animation-right'>Our Community Vision</p>
                <p className='p-4 text-center animation-right'>Beyond just a platform, Skill Up is building a community of learners, educators, and industry mentors who believe in collective growth. We aim to create a supportive ecosystem where students can collaborate, share insights, and inspire each other. Through peer-to-peer learning, open forums, mentorship opportunities, and real-world challenges, we ensure that our users not only learn but also apply and evolve. Skill Up is more than content—it's a movement towards inclusive, free, and impactful education for all.</p>
            </div>
        </div>
    </section>
  )
}

export default About