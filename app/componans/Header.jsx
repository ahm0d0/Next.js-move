import React from 'react'
import Image from 'next/image';
import '../globals.css';
import Link from 'next/link';
import MenuItems from './Menu';
import DarkThemesMood from './DarkThemesMood';
import { AiOutlineHome,AiFillInfoCircle } from "react-icons/ai";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3'>
        <div >
            <div className='flex justify-between items-center gap-5 text-2xl '>
                <MenuItems title={'Home'} address={'/'} icon={<AiOutlineHome/>}/>
                <MenuItems title={'About'} address={'/about'} icon={<AiFillInfoCircle/>}/>
            </div >
        </div>
        <SearchInput />
        <div className='flex gap-3 items-center'>
            <DarkThemesMood/>
        <div className='h-1/2 w-20 overflow-hidden rounded-md 	'>
            <Link href={"/"}><img src='Preview.png' alt="" /></Link>
        </div>
        </div>
    </div>
  )
}
