import React, {useState} from 'react'
import {FaTimes , FaBars} from 'react-icons/fa'
import Link from 'next/link'

function Navbar() {

  let Links = [
    {name: "Home", link:"/"},
    {name:"Courses", link:"/courses"},
    {name: "SignUp", link:"/signup"},
    {name: "SignIn", link:"/signin"},
  ]

  let[open, setOpen] = useState(false)

  return (
    <div>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <div className="font-bold cursor-pointer flex items-center">
            <h1 className="text-black text-2xl">Code<span className="text-blue-500">Tut</span></h1>
          </div>
          <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden">
            {open ? <FaTimes/> : <FaBars/>}
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
            {
              Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl">
                  <Link href={link.link}><p className="text-gray-800 hover:text-gray-400 duration-500 cursor-pointer font-bold">{link.name}</p></Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar