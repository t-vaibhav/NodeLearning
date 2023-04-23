import React from 'react'
import data from '../data'
import Post from './Post'

export default function Body() {
    const records = data.map((item, index) => {
        return (
            <Post
                key={index}
                item={item}
            />
        )
    })

    return (
        <section className='pl-[18vw]'>
            {records}
        </section>)
}
