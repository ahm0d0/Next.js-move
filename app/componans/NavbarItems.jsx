
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavbarItems({title , prams}) {
    const serchParams = useSearchParams()
    const genre = serchParams.get('genre')
    
  return (
    <div className={`hover:text-amber-500 ${genre == prams ? 'underline underline-offset-8 decoration-gray-600 \
    	 dark:decoration-amber-500 ' : ''}`}>
        <Link href={`?genre=${prams}`}>{title}</Link>
    </div>
  )
}
