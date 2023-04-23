import React, { useState } from 'react'
import { BiShow, BiHide } from "react-icons/bi"
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'



export const Signup = () => {
    const [isShown, setIsShown] = useState(false)

    const formsubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value)
    }

    const images = ['registerbg.jpg']
    const index = Math.floor(Math.random() * images.length)
    console.log(index)

    const path = `url("/images/${images[index]}")`
    console.log(path)

    const bgstyle = {
        backgroundImage: path,
        height: "100vh",
    }
    return (
        < section className='font-kanit flex justify-center items-center'>
            <div className='h-full w-full justify-end bg-no-repeat bg-center bg-cover  flex items-center' style={bgstyle} >
                <div className='text-center  bg-gray-50 w-[40%] py-5 font-sans p-5 pr-5 mr-10 shadow-xl rounded-sm'>
                    <h1 className='text-3xl font-bold text-gray-800'>SIGN UP</h1>
                    <h6 className='text-md font-semibold text-gray-800'>Already have an account? <a href='#' className='text-blue-600 hover:underline hover:text-blue-700'>Sign in here</a></h6>
                    <div className=' py-2 text-left'>

                        <form action="" onSubmit={formsubmit} >
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2'>

                                <div class="flex flex-col my-4">
                                    <label htmlFor="name" class="text-gray-700">First Name</label>
                                    <input type="text" name="name" id="name" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="First name" />
                                </div>
                                <div class="flex flex-col my-4">
                                    <label htmlFor="name" class="text-gray-700">Last Name</label>
                                    <input type="text" name="name" id="name" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Last name" />
                                </div>
                                <div class="flex flex-col my-4">
                                    <label htmlFor="phone" class="text-gray-700">Contact Number</label>
                                    <input type="number" name="cnum" id="cnum" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your contact number" />
                                </div>
                                <div class="flex flex-col my-4">
                                    <label htmlFor="name" class="text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" class="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your email" />
                                </div>
                                <div class="flex flex-col my-4 relative">
                                    <label htmlFor="password" class="text-gray-700">Password</label>
                                    <input type={isShown ? 'text' : 'password'} name="password" id="password" class=" mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter password" />
                                    <div className='absolute right-2 bottom-2 hover:cursor-pointer' onClick={() => { setIsShown(!isShown) }}>
                                        {isShown ? <BiHide /> : <BiShow />}
                                    </div>
                                </div>
                                <div class="flex flex-col my-4 relative">
                                    <label htmlFor="cpassword" class="text-gray-700">Confirm your password</label>
                                    <input type={isShown ? 'text' : 'password'} name="cpassword" id="cpassword" class=" mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter password again" />
                                    <div className='absolute right-2 bottom-2 hover:cursor-pointer' onClick={() => { setIsShown(!isShown) }}>
                                        {isShown ? <BiHide /> : <BiShow />}
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <input type="checkbox" name="remember_me" id="remember_me" class="mr-2 focus:ring-0 rounded" />
                                <label htmlfor="remember_me" class="text-gray-700">I accept the <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="#" class="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a></label>
                            </div>
                            <div className='flex justify-end py-2'>
                                <button className='bg-blue-500 text-white font-semibold px-3 py-1 rounded w-full hover:bg-blue-400' type='submit'> SUBMIT</button>
                            </div>
                        </form>


                        <div class="flex items-center justify-between">
                            <div class="w-full h-[1px] bg-gray-300"></div>
                            <span class="text-sm uppercase mx-6 text-gray-400">Or</span>
                            <div class="w-full h-[1px] bg-gray-300"></div>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                <FcGoogle className='text-xl' />
                                <span>Sign up with Google</span>
                            </a>
                            <a href="#" class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                <BsFacebook className='text-xl' />
                                <span>Sign up with Facebook</span>
                            </a>
                            <a href="#" class="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                <BsLinkedin className='text-xl' />
                                <span>Sign up with LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}


export default Signup