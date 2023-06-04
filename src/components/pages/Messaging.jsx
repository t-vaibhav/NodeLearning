import React, { useEffect } from 'react'
import react, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleDown } from 'react-icons/fa';
import { BiMessageDetail, BiSend, BiMicrophone } from 'react-icons/bi';
import { AiOutlinePaperClip } from 'react-icons/ai';
import axios from 'axios'
import Fixed from '../Fixed';


export default function Messaging() {
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


        <div className='bg-slate-200 h-[100vh]'>
            <Fixed />
            <div className='bg-slate-200 my-2 ml-[17vw] p-3'>
                <div className='px-3 py-2 flex justify-between items-center bg-black'>
                    <div className=' flex items-center space-x-1'>
                        <p className='text-white '>Messaging</p>
                        <BiMessageDetail className='text-white pt-1 text-2xl' />
                    </div>
                    <FaAngleDown />
                </div>

                <div className=' flex h-[80vh] overflow-y-auto'>

                    <div className='w-[30%] bg-gray-100 overflow-y-auto scrollbar'>
                        <ul>
                            {chatData}
                        </ul>
                    </div>

                    <div className='w-[70%] bg-green-200 relative '>

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

        </div>
        // </div >

    )
}
