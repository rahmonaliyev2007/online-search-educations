import Button from '@/components/Button'
import Input from '@/components/Input'
import { AuthPropsTypes } from '@/types/AuthType'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Register = ({ isLoginOpen, setIsLogin, setIsModalOpen }: AuthPropsTypes) => {
  const t = useTranslations("Auth")
  return (
    <div className={`flex items-center justify-between h-full containers transition-all duration-1000`}>
      <div className={`w-full max-w-[50%] duration-1000 ${isLoginOpen ? 'translate-y-[-200vh]' : 'translate-y-[-90vh]'}`}>
        <form className={`bg-white p-7 rounded-xl w-full `}>
          <h3 className={`text-4xl font-bold text-[#451773] text-center mb-8`}>{t('signUp')}</h3>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
              <Input type="text" placeholder={t('name')} name='name' />
              <Input type="text" placeholder={t('surname')} name='surname' />
            </div>
            <Input type="text" placeholder={t('email')} name='email' />
            <Input type="text" placeholder={t('phone')} name='phone' />
            <Input type="text" placeholder={t('password')} name='password' />
            <select name="role" id="role" className=' outline-none px-5 py-2  border border-[#EDEDED] rounded-[6px]'>
              <option value="USER">USER</option>
              <option value="CEO">CEO</option>
            </select>
            <Input type='file' extraStyle='!py-2'/>

            <Button title={t('signUp')} extraStyle='w-full' />
          </div>
        </form>
        <p className={`text-base text-gray-500 text-center w-full my-5`}>{t('haveAccount')} <span className='font-semibold cursor-pointer text-[#451773]' onClick={() => setIsLogin && setIsLogin(true)}>{t('signIn')}</span> </p>
      </div>
      <div className={`flex flex-col justify-center  items-center gap-[4rem] duration-1000 ${isLoginOpen ? 'translate-y-[0vh]' : 'translate-y-[-90vh]'} `}>
        <h2 className={`text-[#451773] font-semibold text-4xl `}>{t('welcome')}</h2>
        <div className=''>
          <Image width={400} height={400} alt='login image' className={`relative z-[1]`} src={'https://guideship.technology/images/about/about-us.svg'} />
          <Image width={400} height={400} alt='login image' className={`translate-y-[-50%]`} src={'https://findedu-client.netlify.app/assets/purple-Ky09xThf.png'} />
        </div>
      </div>
    </div>
  )
}

export default Register