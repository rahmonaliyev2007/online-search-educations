"use client"
import { LocationIcon } from '@/assets/icons'
import { useTranslations } from 'next-intl'
import React, { useContext, useState } from 'react'
import { getCookie } from 'cookies-next'
import { ThemeContext } from '@/context/ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import ChangeLang from './ChangeLang'
import Logo from '@/public/images/logo'
import TLink from '@/utils/TransitionLink'

function Navbar() {
  const t = useTranslations("HeaderTop");
  
  const {theme, toggleTheme} = useContext(ThemeContext);
  
  return (
    <nav className={`text-sm py-[10px] ${theme !== 'dark' ? 'bg-white' : 'bg-[#414141]'} duration-500 relative z-[1] max-sm:hidden`}>
      <div className='containers flex justify-between items-center'>
        <div className='logo'><Logo/></div>
        <div className='flex items-center gap-[28px]'>
          <TLink href={'/'} className={`flex items-center gap-[10px] duration-300 ${theme === 'light' ? 'text-[#545D6A] hover:text-[#134E9B]' :'text-[#929599] hover:text-[#F8FAFC]'}`}><span>{t('home')}</span></TLink>
          <TLink href={'/pages/aboutus'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#929599] hover:text-[#F8FAFC]'} duration-300 `}> <span>{t('aboutUs')}</span></TLink>
          <TLink href={'/'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#929599] hover:text-[#F8FAFC]'} duration-300`}> <span>{t('resourses')}</span></TLink>
          <TLink href={'/'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#929599] hover:text-[#F8FAFC]'} duration-300`}> <span>{t('liked')}</span></TLink>
        </div>
        <div className='flex justify-end items-center gap-[18px]'>
          <ChangeLang/>
          <button onClick={toggleTheme} className={`relative h-[30px] w-[30px] ${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#929599] hover:text-[#F8FAFC]'} `}><Sun size={16} className={`${theme === 'dark' && 'opacity-0'} duration-300 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]`}/> <Moon size={16} className={`${theme === 'light' && 'opacity-0'} duration-300 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]`}/> </button>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar