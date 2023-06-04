import React, { useState } from 'react'
import { BiShow, BiHide } from "react-icons/bi"
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin, BsFacebook } from "react-icons/bs";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import axios from 'axios';
import Fixed from '../Fixed';



export const Login = () => {

    const [isShown, setIsShown] = useState(false)
    const [error, setError] = useState("")
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setCredentials(
            {
                ...credentials,
                [name]: value
            }
        )
    }


    function handleSubmit(event) {
        event.preventDefault()
        try {
            axios.post('http://localhost:3000/api/login', credentials)
                .then((response) => {
                    if ((response.data.msg === 'incorrect')) {
                        setError("incorrect")
                    } else if ((response.data.msg === 'invalid')) {
                        setError("invalid")
                    } else {
                        window.location.replace('/');
                    }
                }
                )
        }
        catch (error) { console.log(error) }
        // console.log("clicked")
    }


    return (
        <div className='overflow-hidden h-[100vh] bg-blue-100'>

            <Fixed />
            < section className='font-kanit flex justify-center items-center bg-blue-100 ml-[17vw]'>
                <div className='h-full w-full justify-around bg-no-repeat bg-center bg-cover flex items-center'  >
                    <div className='flex justify-center'>
                        <img src="/images/monkey.png" alt="" className='h-[90vh] py-[10vh]' />
                    </div>
                    <div className='text-center  bg-gray-50 w-[40%] py-5 font-sans p-5 pr-5 mr-10 shadow-xl rounded-sm'>
                        <h1 className='text-3xl font-bold text-gray-800'>LOGIN</h1>
                        <h6 className='text-md font-semibold text-gray-800'>Don't have an Account? <a href='/register' className='text-blue-600 hover:underline hover:text-blue-700'>Register Now</a></h6>
                        <div className=' py-2 text-left'>

                            <form >
                                <div className='grid grid-cols-1 gap-2'>
                                    <div className="flex flex-col my-4">
                                        <label htmlFor="phone" className="text-gray-700">Email or Phone number</label>
                                        <input onChange={handleChange} type="text" name="email" id="cnum" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your Email or phone" />
                                    </div>
                                    <div className="flex flex-col my-2 relative">
                                        <label htmlFor="cpassword" className="text-gray-700">Enter your password</label>
                                        <input onChange={handleChange} type={isShown ? 'text' : 'password'} name="password" id="cpassword" className=" mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder={`Enter Password again${document.createElement('sup').innerHTML = '*'}`} />
                                        <div className='absolute right-2 bottom-2 hover:cursor-pointer' onClick={() => { setIsShown(!isShown) }}>
                                            {isShown ? <BiHide /> : <BiShow />}
                                        </div>
                                    </div>

                                </div>
                                {(error === 'incorrect') ? <p className='text-red-500 text-sm'>Incorrect Password</p> : <p className='text-red-500 text-sm'></p>}
                                {(error === 'invalid') ? <p className='text-red-500 text-sm'>User Doesn't exists</p> : <p className='text-red-500 text-sm'></p>}
                                <div className='flex justify-end py-2'>
                                    <button className='bg-blue-500 text-white font-semibold px-3 py-1 rounded w-full hover:bg-blue-400' onClick={handleSubmit}>Login</button>
                                </div>
                            </form>


                            <div className="flex items-center justify-between">
                                <div className="w-full h-[1px] bg-gray-300"></div>
                                <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
                                <div className="w-full h-[1px] bg-gray-300"></div>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                    <FcGoogle className='text-xl' />
                                    <span>Sign in with Google</span>
                                </a>
                                <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                    <BsFacebook className='text-xl' />
                                    <span>Sign in with Facebook</span>
                                </a>
                                <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                    <BsLinkedin className='text-xl' />
                                    <span>Sign in with LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>

    )
}


export default Login