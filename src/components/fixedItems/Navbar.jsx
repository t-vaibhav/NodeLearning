import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
export default function Navbar() {
    return (
        <nav className='h-16 z-20'>
            <div className=' p-2 px-8 bg-gray-100 flex justify-between fixed top-0 left-0 right-0 border-b-[1px] border-b-gray-200 shadow-md'>
                <div>
                    <a href="/" className='flex items-center space-x-2'><img src="/images/logo2.png" alt="" className='h-10' /> <span className='text-xl font-bold'>WePeek</span></a>

                </div>
                <div className=' relative'>

                    <input type="text" name="" id="" className='w-[30vw] border-[2px] rounded-lg py-1 px-3 ' placeholder='Search ' />
                    <BsSearch className='absolute top-2 right-3 text-xl cursor-pointer' />

                </div>
                <div className="login-area content-end justify-end flex  ">
                    <a href="/login" className=" px-4 mx-2 border-2 flex items-center bg-blue-500 text-white rounded-full ">Login</a>
                    <a href="/register" className=" px-4 mx-2 border-2 flex items-center bg-green-500 text-white rounded-full ">Sign Up</a>
                    <button className=" mx-2 "><FaUserAlt /></button>
                </div>
            </div >
        </nav >
    )
}
