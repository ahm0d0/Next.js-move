
import React from 'react'

export default function Rating({rating}) {
  return (
    <div>
        <span className='rounded-3xl bg-slate-800 w-10 p-2  border-2  border-amber-600  block text-center text-white
        hover:scale-150 transition-all	duration-700	 dark:border-cyan-600'>{rating}</span>
    </div>
  )
}
