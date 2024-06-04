'use client'

import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
export default function SearchInput() {
    const [searchHidden,setSearchHidden] = useState(false);

    const [search,Setsearch]=useState("")
    const rotuer = useRouter()

    function handelFormSearch(e){
      // e.preventDefault()
      rotuer.push(`/seach/${search}`)
    }

    function handelSearchInput(e){
        Setsearch(e.target.value)
    }
  return (
    <form onSubmit={handelFormSearch} className='flex items-center overflow-hidden '>
        <input type="text" className='transition-all duration-700   md:pl-14 md:pr-14 p-2 rounded-lg
         outline-black border-spacing-x-2 border-black bg-slate-200 border-b-2
         dark:bg-slate-950 dark:border-white
         '
         value={search}  
         onChange={handelSearchInput}
         onClick={()=>{
            setSearchHidden(true)
         }}
         onBlur={()=>{
            setSearchHidden(false)
         }}/>
         <CiSearch   className={`text-xl relative right-6 ${searchHidden ? 'left-96 ' : ''}`}/>
         <Button onClick={()=>`${search === '' ? '' : handelFormSearch() }`} className='md:block hidden transition-all duration-700 text-emerald-600 dark:text-amber-400' variant="outlined">Search</Button>
    </form>
  )
}
