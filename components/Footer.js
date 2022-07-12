import React from 'react'
import {FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaHeart} from 'react-icons/fa'



function Footer() {
  return (
    <div>
        <div className="pt-30 bg-slate-300 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 m-h-[50%] md:grid-cols-1 lg:grid-cols-2">
            <div className="p-5 text-center">
                <ul>
                    <p className="font-bold text-3xl pb-6 text-white">
                        Code<span className="text-blue-500">Tut</span>
                    </p>
                    <div className="flex gap-6 pb-5">
                        <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                        <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                        <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-500" />
                        <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                    </div>
                </ul>
            </div>
            <div className="p-5 text-center">
                <ul>
                    <p className="text-gray-800 font-bold text-2xl pb-4">
                        CodeTut Business
                    </p>
                        <li className= "text-center text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Teach</li>
                        <li className="text-center text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Learn</li>
                        <li className="text-center text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Get App</li>
                        <li className="text-center text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">About Us</li>
                </ul>
            </div>
            <div className="p-5 text-center">
                <ul>
                    <p className="text-gray-800 font-bold text-2xl pb-4">
                        About CodeTut
                    </p>
                        <li className= "text-center text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Terms</li>
                        <li className="text-center text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Privacy Policy</li>
                        <li className="text-center text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Cookie Settings</li>
                        <li className="text-center text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Sitemap</li>
                </ul>
            </div>
        </div>
        <div className=" bg-slate-300 flex flex-col justify-center items-center text-center p-5">
            <h1 className="text-gray-800 font-semibold">
                &copy; 2021-2022 All rights reserved | Build with &#128151; by CodeTut
            </h1>
        </div>
    </div>    
  )
}

export default Footer