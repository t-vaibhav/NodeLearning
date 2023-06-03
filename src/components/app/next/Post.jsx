import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder, FcComments } from "react-icons/fc";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsShare, BsShareFill, BsSave, BsSaveFill } from "react-icons/bs";
import { BiComment, } from "react-icons/bi";
import { IoIosPeople, } from "react-icons/io";


export default function Post(props) {
    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)

    return (
        <section className='p-2 mt-5 border-2 w-[100%] mb-8 border-gray-200 rounded-lg bg-slate-50 text-sm'>


            <div className="flex items-center">
                <img src={`./images/${props.item.dp}`} id="user--dp" className='h-10 rounded-3xl mr-2' />
                <a href="#"><h6 className='font-bold text-md hover:underline'>{props.item.topic}</h6></a>
                <p className='text-md'> - Posted by @<a href="#" className='hover:underline'>{props.item.username}</a> - {props.item.time} hours ago</p>
            </div>

            <div className="flex-col mt-2">
                <h3 className='font-bold text-xl'>{props.item.title}</h3>
                <p className=''>{props.item.subtitle}</p>
            </div>

            {/* the div below is for media attachments regarding the post */}
            <div className="mediacontainer py-2 flex justify-center">
                <img src={props.item.img} alt="" className='rounded' />
            </div>

            <div className='border-2 border-gray-400 rounded-md px-2 py-1 text-xs'>
                <div className="flex">
                    <div className="flex items-center justify-start mr-2 w-1/5"><a href="#" className='flex items-center'> <div className='flex items-center' onClick={() => { setLike(!like) }}>  {like ? <FcLike className='mr-1 text-lg' /> : <FcLikePlaceholder className='mr-1 text-lg' />}</div><h6>LIKE</h6></a></div>
                    <div className="flex items-center justify-start mr-2 w-1/5"><a href="#" className='flex items-center'><BsShare className='mr-1 text-md' /><h6>SHARE</h6></a></div>
                    <div className="flex items-center justify-start mr-2 w-1/5"><a href="#" className='flex items-center'><IoIosPeople className='mr-1 text-lg' /><h6>ASK</h6></a></div>
                    <div className="flex items-center justify-start mr-2 w-1/5"><a href="#" className='flex items-center'><div className='flex items-center' onClick={() => { setSave(!save) }}>  {save ? <BsSaveFill className='mr-1 text-md' /> : <BsSave className='mr-1 text-md' />}</div><h6>SAVE</h6></a></div>
                    <div className="flex items-center justify-start mr-2 w-1/5"><a href="#" className='flex items-center'><BiComment className='mr-1 text-lg' /><h6>COMMENTS</h6></a></div>
                </div >
            </div >



        </section >
    )
}
