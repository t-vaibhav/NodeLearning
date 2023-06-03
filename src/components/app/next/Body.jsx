import React, { useEffect } from 'react'
import data from '../../../data'
import Post from './Post'
import react, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleDown } from 'react-icons/fa';
import { BiMessageDetail, BiSend, BiMicrophone } from 'react-icons/bi';
import { AiOutlinePaperClip } from 'react-icons/ai';
import axios from 'axios'


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";








export default function Body() {
    const records = data.map((item, index) => {
        return (
            <Post
                key={index}
                item={item}
            />
        )
    })

    // const [active, setActive] = useState("")
    const [userdata, setUserdata] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/register')
            .then((response) => { setUserdata(response.data) })
            .catch(console.error())
    }, [])

    const [active, setActive] = useState({})
    const chatData = userdata.map((item, index) => {

        return (
            <>
                <li className='px-2 py-1 border-b-[2px] bg-gray-100 hover:bg-gray-200 border-gray-300 flex items-center cursor-pointer' onClick={() => { setActive(item) }}>
                    <img src={(item.dp === 0) ? `/images/male.jpg` : item.dp || `/images/male.jpg`} alt="" className='h-10 rounded-full pr-1' />
                    <div>
                        <p className='font-semibold text-base'>{item.fname}</p>
                        <p className='text-xs text-gray-700 font-semibold'>Hello</p>
                    </div>
                </li>

            </>
        )
    })


    return (
        <section className='ml-[17vw] flex justify-between z-0'>
            <div className='px-20 w-3/5'>
                {records}
            </div>

            <div className='flex mx-5 w-2/5 max-h- rounded-md p-5 mt-5  border-2 border-gray-200  bg-slate-50 '>
                <div className=" rounded-md ">
                    <div className='flex items-center space-x-2'>
                        <img src="/images/dp.jpg" alt="" className='rounded-full h-20 shadow-md border-gray-950 border-2' />
                        <div className='text-3xl font-semibold'>
                            Vaibhav Tiwari
                        </div>
                        <div className='text-xl font-semibold text-gray-900'>
                            3 hrs This Week
                        </div>
                    </div>
                    <div className=''>
                        <p className='text-gray-600 py-2'>Active friends</p>
                        <div className='flex space-x-3 overflow-x-auto scrollbar pb-1'>
                            <img src="/images/dp.jpg" alt="" className='h-10 rounded-full border border-gray-950' />
                            <img src="/images/dp.jpg" alt="" className='h-10 rounded-full border border-gray-950' />
                            <img src="/images/shihtzu.jpeg" alt="" className='h-10 rounded-full border border-gray-950' />
                            <img src="/images/dora.png" alt="" className='h-10 rounded-full border border-gray-950' />
                            <img src="/images/aman.jpeg" alt="" className='h-10 rounded-full border border-gray-950' />
                        </div>
                    </div>

                    <div className='bg-slate-200 my-2'>
                        <div className='px-3 py-2 flex justify-between items-center bg-black'>
                            <div className=' flex items-center space-x-1'>
                                <p className='text-white '>Messaging</p>
                                <BiMessageDetail className='text-white pt-1 text-2xl' />
                            </div>
                            <FaAngleDown />
                        </div>

                        <div className=' flex'>
                            <div className='w-[35%] bg-gray-100 max-h-[40vh] overflow-y-auto scrollbar'>
                                <ul>
                                    {chatData}

                                </ul>
                            </div>
                            <div className='w-[65%] bg-green-200 relative h-[40vh] '>
                                <div className='absolute top-0 left-0 right-0 bg-gray-100 py-1 px-2 flex items-center'>
                                    <img src={(active.dp === 0) ? `/images/male.jpg` : active.dp || `/images/male.jpg`} alt="" className='h-10 rounded-full pr-1' />
                                    <p className='text-lg'>{active.fname + ' ' + active.lname}</p>
                                </div>
                                <div className=''></div>
                                <div className='absolute bottom-0 right-0 left-0 space-x-2 bg-gray-400 p-2 flex items-center '>
                                    <AiOutlinePaperClip className='text-2xl' />
                                    <input type="text" className='rounded-full w-full px-2 py-1 text-sm focus:outline-none' placeholder='Write Your Message...' />
                                    <BiSend className='text-2xl' />
                                    <BiMicrophone className='text-2xl' />

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className=''>
                        <p className='text-gray-600 py-2'>Top Stories</p>
                        <div className='flex space-x-3 overflow-x-auto scrollbar pb-1'>
                            <img src="/images/aman.jpeg" alt="" className='h-40 w-40 rounded-sm border border-gray-950' />
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}
