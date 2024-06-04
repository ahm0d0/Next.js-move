'use client'
import NavbarItems from './NavbarItems'
import React from 'react'

export default function Navbar() {
    
  return (
    <div className='flex justify-center bg-amber-300 dark:bg-gray-600 gap-8 p-4 text-xl'>
        <NavbarItems title={"TopRated"} prams={"FetchTopRated"}/>
        <NavbarItems title={"Trending"} prams={"FetchTrending"}/>
    </div>
  )
}
