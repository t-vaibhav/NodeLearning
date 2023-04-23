import React from 'react'

export default function Sidebar() {
    return (
        <nav className='fixed top-0 bottom-0 left-0'>
            <nav className='w-[17vw] h-[100vh] bg-gray-100 p-5 relative overflow-y-auto'>
                <ul className='py-5  text-lg pt-16 overflow-y-auto'>
                    <a href="" className='hover:underline'><li className='flex items-center pb-5'><img src="/images/home.png" alt="" className='pr-2 h-6' />Home </li></a>
                    <a href="" className='hover:underline'><li className='flex items-center pb-5'><img src="/images/trend.png" alt="" className='pr-2 h-6' />Trending</li></a>
                    <a href="" className='hover:underline'><li className='flex items-center pb-5'><img src="/images/learn.png" alt="" className='pr-2 h-6' />Learn</li></a>
                    <a href="" className='hover:underline'><li className='flex items-center pb-5'><img src="/images/messaging.png" alt="" className='pr-2 h-6' />Messaging</li></a>
                    <a href="" className='hover:underline'><li className='flex items-center pb-5'><img src="/images/premium.png" alt="" className='pr-2 h-6' />Premium</li></a>
                    <a href="" className='hover:underline'><li className='flex items-center pb-5'><img src="/images/setting.png" alt="" className='pr-2 h-6' />Settings</li></a>

                </ul>
                <div className={` absolute flex-row  space-y-2 bottom-10 left-5 right-5`}>
                    <div >
                        <a href="" className={`flex items-center justify-center bg-green-500 text-white py-2 hover:font-semibold hover:bg-green-600 `}>{open ? 'Login' : '#'}</a>
                    </div>
                    <div>
                        <a href="/register" className={`flex items-center justify-center bg-blue-500 py-2 text-white hover:font-semibold hover:bg-blue-700 `}>{open ? 'Join WePeek' : '#'}</a>
                    </div>
                </div>
            </nav>
        </nav >
    )
}
