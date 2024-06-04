'use client'
import React, { useEffect } from 'react'

import {MdDarkMode,MdLightMode} from "react-icons/md";
import { useTheme  } from 'next-themes'
import { useState } from 'react'

export default function DarkThemesMood() {
    const { theme, setTheme ,systemTheme } = useTheme() ;
    const currentTheme = theme === "system" ? systemTheme : theme ;
    const [mount , setMount] = useState(false)

    useEffect(()=>{
      setMount(true)
    },[])
    return (
      <div>

        {mount && currentTheme == 'dark' ? <MdDarkMode className='text-2xl cursor-pointer hover:text-amber-500' onClick={()=>{
            setTheme('light')
        }}/> : <MdLightMode className='text-2xl cursor-pointer hover:text-amber-500' onClick={()=>{
            setTheme('dark')
        }}/>}

        {/* {theme === "system"}
        <button onClick={() => setTheme('light')}><MdLightMode/></button>
        <button onClick={() => setTheme('dark')}><MdDarkMode/></button> */}
      </div>
    )
}
