import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBell, faCaretDown, faBars} from  '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'


function Header({open, setOpen}) {
    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    },[])
    const themeToggler = () => {
        if(!mounted) return null;
         const themeHandler = theme === 'system' ? systemTheme : theme
            if(themeHandler === 'dark') {
                 return (
                    <button className='bg-gray-600 p-1 rounded-sm' onClick={() => setTheme('light')}>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>

                     </button>
            )
        }else {
            return (
                <button className='bg-gray-100 p-1 rounded-sm' onClick={() => setTheme('dark')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                </button>
            )
        }
       
    }

   //const themeHandler = theme === 'system' ? systemTheme : theme

  return (
    <header className='ml-4 lg:ml-64 grid grid-cols-2 pt-6 2xl:text-3xl relative'>
                 <section className='lg:hidden text-2xl z-20'>
        <FontAwesomeIcon icon={faBars} onClick={() => setOpen(prev => !prev)}/>
        </section>
       
        <section className='absolute top-20 lg:static'>
            <label className='relative block'>
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-1000 lg:w-9/12 border border-slate-300 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="search" name="search"/>
            </label>
        </section>

        

        <section className="flex ml-auto mr-4 gap-5 items-center">
            <FontAwesomeIcon icon={faBell}/>
            {themeToggler()}
            <p className='hidden lg:block'> <span>Corey Dasilva </span> <FontAwesomeIcon icon={faCaretDown}/> </p>
            <Image src="/assets/avatar.png" alt='profile-picture' width='40' height='40'/>
        </section>
    

    </header>
  )
}

export default Header