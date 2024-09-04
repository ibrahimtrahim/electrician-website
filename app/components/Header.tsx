"use client"

import Image from "next/image"
import { NAV_LINKS, TOP_LINKS } from "../constant"
import Link from "next/link"
import Button from "./Button"
import { AdjustmentsHorizontalIcon, Bars3Icon } from "@heroicons/react/16/solid"
import { useState } from "react"


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header>
        <div className="padding-container bg-gray-10 flex justify-end items-center py-4 3xl:px-0 z-50">
            <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap gap-10">
                {TOP_LINKS.map((item)=>(
                    <li key={item.key} className="flex items-center justify-center relative">
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
        <nav className="padding-container flex justify-between items-center py-6 md:px-32 z-50">
            <Image src='/images/logo.png' alt="logo" width={150} height={80} />
            <ul className="hidden xl:flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                {NAV_LINKS.map((link)=>(
                    <li key={link.key} className='flex items-center justify-center relative'>
                        <Link href={link.href} className="flex w-full items-center justify-center px-3 py-3 regular-18 font-bold  hover:text-orange-500 transition">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="hidden xl:flex">
                <Button title="REQUEST A QUOTE" type={"button"} />
            </div>
            <Bars3Icon onClick={()=> setIsMenuOpen(!isMenuOpen)}  className="size-6 bx bx-menu xl:hidden cursor-pointer" />
            <div 
                className={`absolute xl:hidden top-40 left-0 w-full bg-white flex flex-col items-center 
                        gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`
                    }
                    style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
                <ul>
                    {NAV_LINKS.map((link)=>(
                        <li key={link.key}>
                            <Link href={link.href} className="flex w-full items-center justify-center px-3 py-3 regular-18 font-bold  hover:text-orange-500 transition">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header