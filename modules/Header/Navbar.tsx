"use client"
import { useTranslations } from 'next-intl'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '@/context/ThemeProvider'
import { Moon, Sun } from 'lucide-react'
import ChangeLang from './ChangeLang'
import Logo from '@/public/images/logo'
import TLink from '@/utils/TransitionLink'
import Modal from '@/components/Modal'
import Auth from '../Auth'
import { Context } from '@/context/Context'

function Navbar() {
  const t = useTranslations("HeaderTop");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {theme, toggleTheme} = useContext(ThemeContext);
  const {isLogged} = useContext(Context);
  
  return (
    <nav className={`text-sm py-[10px] ${theme !== 'dark' ? 'bg-white' : 'bg-[#414141]'} duration-500 relative z-[1] max-sm:hidden`}>
      <div className='containers flex justify-between items-center'>
        <div className='logo'><Logo/></div>
        <div className='flex items-center gap-[28px]'>
          <TLink href={'/'} className={`flex items-center gap-[10px] duration-300 ${theme === 'light' ? 'text-[#545D6A] hover:text-[#3A1360]' :'text-[#929599] hover:text-[#F8FAFC]'} font-medium`}><span>{t('home')}</span></TLink>
          <TLink href={'/pages/aboutus'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#3A1360]' : 'text-[#929599] hover:text-[#F8FAFC]'} duration-300 font-medium`}> <span>{t('aboutUs')}</span></TLink>
          <TLink href={'/'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#3A1360]' : 'text-[#929599] hover:text-[#F8FAFC]'} duration-300 font-medium`}> <span>{t('resourses')}</span></TLink>
          <TLink href={'/'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#3A1360]' : 'text-[#929599] hover:text-[#F8FAFC]'} duration-300 font-medium`}> <span>{t('liked')}</span></TLink>
        </div>
        <div className='flex justify-end items-center'>
          <ChangeLang/>
          <button onClick={toggleTheme} className={`relative h-[30px] w-[30px] ${theme === "light" ? 'text-[#545D6A] hover:text-[#3A1360]' : 'text-[#929599] hover:text-[#F8FAFC]'} `}><Sun size={16} className={`${theme === 'dark' && 'opacity-0'} duration-300 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]`}/> <Moon size={16} className={`${theme === 'light' && 'opacity-0'} duration-300 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]`}/> </button>
          <button onClick={()=> setIsModalOpen(true)} className={`bg-[#3A1360] text-white font-medium py-[0.5rem] px-[1.5rem] ml-2.5 rounded-md cursor-pointer hover:bg-[#9168bb] duration-300`}>{isLogged ? "abu" : t('signIn')}</button>
          </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} extraStyle={`!bg-[#F1EAF8] !max-w-[100vw] h-[100vh] !mx-0 !rounded-none`}><Auth setIsModalOpen={setIsModalOpen}/></Modal>
    </nav>
  )
}

export default Navbar