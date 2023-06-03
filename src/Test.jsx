import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Test() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/register')
            .then(response => { setData(response.data) })
            .catch(error => console.error(error));
    }, [])

    console.log(data.length)
    // console.log(data[10].fname)
    return (
        <section className='text-center grid grid-cols-1 max-w-screen-sm mx-auto py-10'>
            <h1 className='text-4xl font-semibold'>Data fetching from backend</h1>
            {
                data.map((item, index) => {
                    return (<ol className='text-2xl font-medium py-10' key={index}>
                        <li>{item.fname}</li>
                        <li>{item.lname}</li>
                        <li>{item.mnum}</li>
                        <li>{item.email}</li>
                        <li>{item.password}</li>
                        <li>{item.cpassword}</li>
                    </ol>)
                })

            }
        </section>)
}