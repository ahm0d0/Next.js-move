import React from 'react'
import Link from 'next/link'

export default function MenuItems({title , icon , address}) {
  return (
    <div>
        <Link className='hover:text-amber-500' href={address}>
            <p className='hidden md:block'>{title}</p>
            <p className='block md:hidden'>{icon}</p>
        </Link>
    </div>
  )
}
