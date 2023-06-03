import React, { useState } from 'react'
import { BiShow, BiHide } from "react-icons/bi"
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import axios from 'axios';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Post from './next/Post';
import { useEffect } from 'react';
import { redirect } from 'react-router-dom';



export const Signup = () => {

    const [isShown, setIsShown] = useState(false)

    const [errors, setErrors] = useState([])
    const [nameFlag, setNameFlag] = useState(false)
    const [pFlag, setPFlag] = useState(false)
    const [emailFlag, setEmailFlag] = useState(false)
    const [accepted, setAccepted] = useState(false)

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const [userData, setuserData] = useState(
        {
            dp: '',
            fname: '',
            lname: '',
            gender: '',
            mnum: '',
            email: '',
            password: '',
            cpassword: '',
        }
    )

    async function handleChange(event) {
        const { name, value } = event.target
        if (name != 'dp') {
            setuserData(
                {
                    ...userData,
                    [name]: value
                }
            )
        } else {
            const file = event.target.files[0];
            const base64 = await convertToBase64(file);
            setuserData({ ...userData, dp: base64 })
        }




        if (name === 'fname') {
            if (value.length < 2) {
                setNameFlag(true)
            } else { setNameFlag(false) }
        }

        if (name === 'cpassword') {
            if (userData.password != value) {
                setPFlag(true)
            } else { setPFlag(false) }
        }

        if (name === 'email') {
            if (!regex.test(value)) {
                setEmailFlag(true)
            } else { setEmailFlag(false) }
        }
    }

    const [registered, setRegistered] = useState(false)

    const mainFlag = (errors.length === 0 && userData.fname.length > 0 && userData.email.length > 0 && userData.password.length > 0 && userData.cpassword.length > 0 && accepted)

    const formsubmit = (event) => {

        event.preventDefault();


        if (userData.fname.length < 2) {
            setErrors(
                ...errors,
                errors.push("fname")
            )
            // if (errors.includes('pop')) {
            //     errors.splice(errors.indexOf('pop'), 1)
            // }
        }

        if (!regex.test(userData.email)) {
            setErrors(
                ...errors,
                errors.push("email")
            )
            // if (errors.includes('pop')) {
            //     errors.splice(errors.indexOf('pop'), 1)
            // }
        }


        if (userData.password != userData.cpassword) {
            setErrors(
                ...errors,
                errors.push("cpassword"),
            )
            // if (errors.includes('pop')) {
            //     errors.splice(errors.indexOf('pop'), 1)
            // }
        }


        if (mainFlag) {
            try {
                console.log("kr rhe h")
                axios.post(
                    'http://localhost:3000/api/register', userData
                ).then((response) => {
                    if (response.data === userData.email) {
                        setRegistered(true)
                    } else {
                        window.location.replace('login');
                        setRegistered(false)
                    }
                })
                console.log(registered)
                setErrors([])
            } catch (error) {
                console.log(error)
            }
        }
        else {
            setErrors([])
            console.log("not submitting")
        }

    }

    return (
        < section className='font-kanit flex justify-center items-center bg-blue-100'>
            <div className='h-full w-full justify-around bg-no-repeat bg-center bg-cover  flex items-center'  >
                <div className='flex justify-center'>
                    <img src="/images/gentleman.png" alt="" className='h-[100vh]' />
                </div>
                <div className='text-center  bg-gray-50 w-[40%] py-5 font-sans p-5 pr-5 mr-10 shadow-xl rounded-sm'>
                    <h1 className='text-3xl font-bold text-gray-800'>SIGN UP</h1>
                    <h6 className='text-md font-semibold text-gray-800'>Already have an account? <a href='/login' className='text-blue-600 hover:underline hover:text-blue-700'>Sign in here</a></h6>
                    <div className=' py-2 text-left'>

                        <form  >
                            <div className='grid lg:grid-cols-2 grid-cols-1 gap-2'>
                                <div className="flex flex-col my-2 col-span-2">
                                    <label htmlFor="uploadPicture" className="text-gray-700 flex justify-center "><img src={userData.dp || `/images/male.jpg`} alt="" className='rounded-full h-24 cursor-pointer' /></label>
                                    <input onChange={handleChange} type="file" accept='.jpeg, .png, .jpg' name="dp" id="uploadPicture" className="hidden mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder={`First name${document.createElement('sup').innerHTML = '*'}`} />
                                </div>
                                <div className="flex flex-col my-2">
                                    <label htmlFor="name" className="text-gray-700">First Name</label>
                                    <input onChange={handleChange} value={userData.fname} type="text" name="fname" id="fname" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder={`First name${document.createElement('sup').innerHTML = '*'}`} />
                                    {nameFlag ? <p className='text-red-500 text-sm'>Name must be atleast 2 characters</p> : <p></p>}
                                </div>
                                <div className="flex flex-col my-2">
                                    <label htmlFor="name" className="text-gray-700">Last Name</label>
                                    <input onChange={handleChange} value={userData.lname} type="text" name="lname" id="lname" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Last name" />
                                    {/* <p className='text-red-500 text-sm'>This is a required field</p> */}
                                </div>
                                <div className="flex flex-col col-span-2">
                                    <p>Select Your Gender</p>
                                    <div className='flex items-center space-x-4'>

                                        <div className='flex items-center space-x-1'>
                                            <input onChange={handleChange} value='male' type="radio" name="gender" id="male" className="border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Last name" />
                                            <label htmlFor="male" className="text-gray-700">Male</label>
                                        </div>

                                        <div className='flex items-center space-x-1'>
                                            <input onChange={handleChange} value='female' type="radio" name="gender" id="female" className="border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Last name" />
                                            <label htmlFor="female" className="text-gray-700">Female</label>
                                        </div>

                                        <div className='flex items-center space-x-1'>
                                            <input onChange={handleChange} value='other' type="radio" name="gender" id="other" className="border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Last name" />
                                            <label htmlFor="other" className="text-gray-700">Other</label>
                                        </div>
                                    </div>
                                    {/* <p className='text-red-500 text-sm'>This is a required field</p> */}
                                </div>
                                <div className="flex flex-col my-2">
                                    <label htmlFor="phone" className="text-gray-700">Contact Number</label>
                                    <input onChange={handleChange} value={userData.mnum} type="number" name="mnum" id="mnum" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder="Enter your contact number" />
                                    {/* <p className='text-red-500 text-sm'>This is a required field</p> */}
                                </div>
                                <div className="flex flex-col my-2">
                                    <label htmlFor="name" className="text-gray-700">Email</label>
                                    <input onChange={handleChange} value={userData.email} type="email" name="email" id="email" className="mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder={`Enter your Email${document.createElement('sup').innerHTML = '*'}`} />
                                    {emailFlag ? <p className='text-red-500 text-sm'>Enter a valid Email</p> : <p></p>}
                                </div>
                                <div className="flex flex-col my-2 relative">
                                    <label htmlFor="password" className="text-gray-700">Password</label>
                                    <input onChange={handleChange} value={userData.password} type={isShown ? 'text' : 'password'} name="password" id="password" className=" mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder={`Enter Password${document.createElement('sup').innerHTML = '*'}`} />
                                    {/* <p className='text-red-500 text-sm'>This is a required field</p> */}
                                    <div className='absolute right-2 bottom-2 hover:cursor-pointer' onClick={() => { setIsShown(!isShown) }}>
                                        {isShown ? <BiHide /> : <BiShow />}
                                    </div>
                                </div>
                                <div className="flex flex-col my-2 relative">
                                    <label htmlFor="cpassword" className="text-gray-700">Confirm your password</label>
                                    <input onChange={handleChange} value={userData.cpassword} type={isShown ? 'text' : 'password'} name="cpassword" id="cpassword" className=" mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900" placeholder={`Enter Password again${document.createElement('sup').innerHTML = '*'}`} />
                                    {pFlag ? <p className='text-red-500 text-sm'>Passwords must match</p> : <p></p>}
                                    <div className='absolute right-2 bottom-2 hover:cursor-pointer' onClick={() => { setIsShown(!isShown) }}>
                                        {isShown ? <BiHide /> : <BiShow />}
                                    </div>
                                </div>
                            </div>
                            {registered ? <p className='text-red-500 text-sm'>Email Already Registred</p> : <p></p>}
                            <div className="flex items-center">
                                <input type="checkbox" name="remember_me" id="remember_me" className="mr-2 focus:ring-0 rounded" value={accepted} onChange={function (event) { setAccepted(event.target.checked) }} />
                                <label htmlFor="remember_me" className="text-gray-700">I accept the <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">terms</a> and <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">privacy policy</a></label>
                            </div>
                            <div className='flex justify-end py-2'>
                                <button disabled={!mainFlag} className={`bg-blue-300 text-white font-semibold px-3 py-1 rounded w-full  ${(mainFlag) ? 'hover:bg-blue-500 bg-blue-600' : ''}`} onClick={formsubmit}> SUBMIT</button>
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
                                <span>Sign up with Google</span>
                            </a>
                            <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
                                <BsFacebook className='text-xl' />
                                <span>Sign up with Facebook</span>
                            </a>
                            <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 bg-gray-100 hover:bg-gray-200 rounded">
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

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}