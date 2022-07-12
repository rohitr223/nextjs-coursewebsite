import React from 'react'
import Link from 'next/link'


function CoursesCards() {
  return (
    <div className="flex items-center justify-center pt-40 mx-auto pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src="assets/asp.jpg" alt="card-image" />
                    </div>
                    <h5 className="text-center text-xl md:text-3xl font-medium mt-3">ASP.NET</h5>
                    <p>Learn ASP.NET from scratch and learn about MVC.</p>
                    <Link href="#">
                        <button  className="text-center bg-blue-500 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-400 focus:scale-95 transition-all duration-200 ease-out">
                            Start Learning
                        </button>
                    </Link>
                </div>
            </div>
            <div className="card">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src="assets/asp.jpg" alt="card-image"/>
                    </div>
                    <h5 className="text-center text-xl md:text-3xl font-medium mt-3">ASP.NET</h5>
                    <p>Learn ASP.NET from scratch and learn about MVC.</p>
                    <Link href="#">
                        <button  className="text-center bg-blue-500 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-400 focus:scale-95 transition-all duration-200 ease-out">
                            Start Learning
                        </button>
                    </Link>
                </div>
            </div>
            <div className="card">
                <div className="p-5 flex flex-col">
                    <div className="rounded-xl overflow-hidden">
                        <img src="assets/asp.jpg" alt="card-image" />
                    </div>
                    <h5 className="text-center text-xl md:text-3xl font-medium mt-3">ASP.NET</h5>
                    <p>Learn ASP.NET from scratch and learn about MVC.</p>
                    <Link href="#">
                        <button  className="text-center bg-blue-500 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-400 focus:scale-95 transition-all duration-200 ease-out">
                            Start Learning
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursesCards