import React from 'react'
import Navbar from '../components/Navbar'
import CoursesCards from '../components/CoursesCards'
import Footer from '../components/Footer'

function courses() {
  return (
    <div>
      <Navbar/>
      <CoursesCards/>
      <Footer/>
    </div>
  )
}

export default courses