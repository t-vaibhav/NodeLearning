import React from 'react'
import Fixed from '../Fixed'

export default function Learn() {
    const mystyle = {
        backgroundImage: 'url("/images/python_logo.webp")',
    }
    const mystyle1 = {
        backgroundImage: 'url("/images/python_logo.webp")',
    }
    const mystyle2 = {
        backgroundImage: 'url("/images/figma.png")',
    }
    const mystyle3 = {
        backgroundImage: 'url("/images/programming.png")',
    }
    const mystyle4 = {
        backgroundImage: 'url("/images/video-editing.png")',
    }
    const mystyle5 = {
        backgroundImage: 'url("/images/Web-Design-Image.png")',
    }
    const mystyle6 = {
        backgroundImage: 'url("/images/content.webp")',
    }
    return (
        <div className='ml-[17vw]'>
            <Fixed />
            <section className='p-3'>
                <h1 className='text-3xl pb-5 font-bold'>Continue where you left..</h1>
                <div className='grid grid-cols-5 gap-5 overflow-x-auto'>

                    <div style={mystyle1} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                        <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>Advanced Python</h2>
                    </div>
                    <div style={mystyle2} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                        <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>UI/UX Figma</h2>
                    </div>
                </div>
            </section>


            <section className='p-3'>
                <h1 className='text-3xl pb-5 font-bold'>SELECT YOUR INTERESET!</h1>
                <div className='grid grid-cols-5 gap-5 overflow-x-auto'>

                    <div style={mystyle3} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                        <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>PROMGRAMMING</h2>
                    </div>
                    <div style={mystyle4} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                        <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>VIDEO EDITING</h2>
                    </div>
                    <div style={mystyle5} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                        <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>DESIGNING</h2>
                    </div>
                    <div style={mystyle6} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                        <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>CONTENT WRITING</h2>
                    </div>
                    <div style={mystyle4} className='h-[40vh] justify-center flex bg-no-repeat bg-cover bg-center relative hover:scale-95 ease-in-out duration-300 shadow-2xl pt-5 cursor-pointer'>
                        <h2 className='text-lg w-full absolute bottom-2 bg-black/80 text-white py-1 px-1 text-center  rounded-md'>VIDEO EDITING</h2>
                    </div>


                </div>

            </section>
        </div>

    )
}
