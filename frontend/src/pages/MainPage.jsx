import React from 'react'
import Searchbar from '../components/Searchbar'
import CourseCard from '../components/CourseCard'

function MainPage() {
  return (
    <div>
      <Searchbar/>
      <p className='text-center pt-[100px] font-poppins text-3xl'> Search the course that You require </p>
      <div className='p-[50px] flex justify-evenly flex-wrap gap-4'>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
      </div>
    </div>
  )
}

export default MainPage