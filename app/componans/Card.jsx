import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Rating from './Rating'

export default function Card({title , discrption , img ,address ,rating}) {
  return (
    <div className='w-3/5  md:w-1/4 lg:w-1/5 p-3 text-center'>
        <Link href={address}>
          <div >
        <img className='rounded-md' src={img} />
        <div className='relative bottom-5 right-0'>
         <Rating rating={rating}/>
         </div>
        </div>

        <h1 className=' w-60  text-center line-clamp-1 text-lg  md:w-20 lg:text-2xl lg:w-60 '>{title}</h1>
        <p className='line-clamp-1  font-serif text-center text-sm '> {discrption} </p>
        </Link>
    </div>
  )
}
