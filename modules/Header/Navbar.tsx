"use client"
import { useTranslations } from 'next-intl'
import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '@/context/ThemeProvider'
import { EditIcon, LogOut, Moon, Sun } from 'lucide-react'
import ChangeLang from './ChangeLang'
import Logo from '@/public/images/logo'
import TLink from '@/utils/TransitionLink'
import Modal from '@/components/Modal'
import Auth from '../Auth'
import { Context } from '@/context/Context'
import { getMyData } from '@/service/getMyData'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { useRouter } from '@/i18n/navigation'
import Image from 'next/image'
import { API } from '@/hooks/getEnv'
import Button from '@/components/Button'
import toast from 'react-hot-toast'

function Navbar() {
  const t = useTranslations("HeaderTop");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLogged, setIsLogged } = useContext(Context)
  const { data: myData } = getMyData();
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false);

    const logOut = () => {
      deleteCookie('NEXT_TOKEN');
      deleteCookie('NEXT_REFRESH_TOKEN');
      router.push('/');
      setIsLogged(false)
      setIsOpen(false)
      toast.success(t('logOutMsg'));
    }

  return (
    <nav className={`text-sm py-[10px] ${theme !== 'dark' ? 'bg-white' : 'bg-[#414141]'} duration-500 relative z-[1] max-sm:hidden`}>
      <div className='containers flex justify-between items-center'>
        <div className='logo'><Logo /></div>
        <div className='flex items-center gap-[28px]'>
          <TLink href={'/'} className={`flex items-center gap-[10px] duration-300 ${theme === 'light' ? 'text-[#545D6A] hover:text-[#3A1360]' : 'text-[#929599] hover:text-[#F8FAFC]'} font-medium`}><span>{t('home')}</span></TLink>
          <TLink href={'/pages/aboutus'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#3A1360]' : 'text-[#929599] hover:text-[#F8FAFC]'} duration-300 font-medium`}> <span>{t('aboutUs')}</span></TLink>
          <TLink href={'/'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#3A1360]' : 'text-[#929599] hover:text-[#F8FAFC]'} duration-300 font-medium`}> <span>{t('resourses')}</span></TLink>
          <TLink href={'/'} className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#3A1360]' : 'text-[#929599] hover:text-[#F8FAFC]'} duration-300 font-medium`}> <span>{t('liked')}</span></TLink>
        </div>
        <div className='flex justify-end items-center relative'>
          <ChangeLang />
          <button onClick={toggleTheme} className={`relative h-[30px] w-[30px] ${theme === "light" ? 'text-[#545D6A] hover:text-[#3A1360]' : 'text-[#929599] hover:text-[#F8FAFC]'} `}><Sun size={16} className={`${theme === 'dark' && 'opacity-0'} duration-300 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]`} /> <Moon size={16} className={`${theme === 'light' && 'opacity-0'} duration-300 absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]`} /> </button>
            {isLogged && myData &&
            <div className={`bg-[#3A1360] ${isOpen && 'bg-[#9168bb]'} duration-300 mr-[-12px] relative z-[1] h-[40px] rounded-l-full flex justify-center items-center pl-[2px]`}>
             <Image onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} src={`${API}/image/${myData?.image}`} alt='fee' width={10} height={10} className='w-[35px] rounded-full border border-white' />

            </div>
             }
          
          <button
            onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}
            onClick={() => { isLogged ? router.push('/pages/profile') : setIsModalOpen(true) }}
            className={`bg-[#3A1360] text-white h-[40px] font-medium py-[0.5rem] rounded-md flex justify-center items-center gap-2 px-[1.5rem]  cursor-pointer ${isOpen && 'bg-[#9168bb]'} duration-300`}>
            {isLogged && myData?.firstName ? myData?.firstName + " " + myData?.lastName : t('signIn')}
            </button>
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={` absolute top-[100%] p-5 right-0 max-w-[300px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${isLogged && isOpen && myData?.image ? 'visible bg-white opacity-100' : ' invisible opacity-0'}`}
          > <div className='flex flex-col gap-3'>
            <h4>{myData?.email}</h4>
            <Button title={t('edit')} iconPosition='left' icon={<EditIcon size={16}/>} extraStyle='w-[100%] !p-2 justify-start text-sm'/>
            <Button onClick={logOut} title={t('logOut')} iconPosition='left' icon={<LogOut size={16}/>} extraStyle='w-[100%] !p-2 justify-start text-sm'/>
            </div>
          </div>
        </div>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} extraStyle={`!bg-[#F1EAF8] !max-w-[100vw] h-[100vh] !mx-0 !rounded-none`}><Auth setIsModalOpen={setIsModalOpen} /></Modal>
    </nav>
  )
}

export default Navbar