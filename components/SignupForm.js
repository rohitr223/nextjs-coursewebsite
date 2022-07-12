import React from 'react'
import Link from 'next/link'

function SignupForm() {
  return (
    <div className="bg-gray-100">
        <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="space-y-3 my-5">
            <h1 className="mb-6 text-3xl font-extrabold text-gray-600">Create A New Account</h1>
            <p className="text-center">
                OR 
                <Link href="/signin">
                    <p className="font-bold text-indigo-600 cursor-pointer">SignIn using your existing account.</p>
                </Link>
                <br/>OR<br/>
                <Link href="/">
                    <p className="font-bold text-indigo-600 cursor-pointer">Back To Home Page</p>
                </Link>
            </p>
        </div>
            <div className="max-w-md w-full bg-white mx-auto rounded-lg p-7 space-y-7">
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-bold" htmlFor="email">Enter Your Name</label>
                    <input className="border rounded-md px-3 py-2" type="text" name="name" placeholder="Enter Your Name"/>
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-bold" htmlFor="email">Enter Your Email</label>
                    <input className="border rounded-md px-3 py-2" type="email" name="email" placeholder="Enter Your Email Address"/>
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 text-sm font-bold" htmlFor="email">Enter Your Password</label>
                    <input className="border rounded-md px-3 py-2" type="email" name="email" placeholder="Password Must Be 8 Characters Long"/>
                </div>
                <div>
                    <button className="w-full rounded bg-indigo-600 text-white py-2 ">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupForm