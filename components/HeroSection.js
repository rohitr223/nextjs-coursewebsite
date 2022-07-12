import React from 'react'
import Link from 'next/link'

function HeroSection() {
  return (
    <div className="flex justify-center items-center flex-col pt-30 text-center min-h-screen">
        <h1 className="font-bold lg:text-7xl text-6xl space-y-2 md:text-4xl">
            Welcome to Code<span className="text-blue-500">Tut</span>
        </h1>
        <p className="pt-10 text-2xl pb-10">Click Below To Access Our Courses</p>
        <div className="">
          <Link href="/courses">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full">Our Courses</button>
          </Link>
        </div>
        
    </div>
  )
}

export default HeroSection