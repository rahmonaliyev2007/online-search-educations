'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { AuthPropsTypes } from '@/types/AuthType'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

const Login = ({ isLoginOpen, setIsLogin, setIsModalOpen }: AuthPropsTypes) => {
    const t = useTranslations("Auth")
    return (
        <div className={`flex items-center justify-between h-full containers transition-all duration-1000`}>
            <div className={`flex flex-col justify-center items-center gap-[4rem] duration-1000 ${isLoginOpen ? 'translate-y-0' : 'translate-y-[100vh]'}`}>
                <h2 className={`text-[#451773] font-semibold text-4xl `}>{t('welcomeBack')}</h2>
                <div className='group'>
                    <Image width={400} height={400} alt='login image' className={`relative z-[1] duration-1000 group-hover:translate-y-[-30px]`} src={'https://findedu-client.netlify.app/assets/register-BcC99wq6.png'} />
                    <Image width={400} height={400} alt='login image' className={`translate-y-[-50%]`} src={'https://findedu-client.netlify.app/assets/purple-Ky09xThf.png'} />
                </div>
            </div>
            <div className={`w-full max-w-[50%] duration-1000 ${isLoginOpen ? 'translate-y-0' : '-translate-y-[100vh]'}`}>
                <form className={`bg-white p-7 rounded-xl w-full `}>
                    <h3 className={`text-4xl font-bold text-[#451773] text-center mb-8`}>{t('signIn')}</h3>
                    <div className='flex flex-col gap-4'>

                        <Input type="text" placeholder={t('name')} name='name' />
                        <Input type="text" placeholder={t('password')} name='password' />
                        <Button title={t('signIn')} extraStyle='w-full' />
                    </div>
                </form>
                <p className={`text-base text-gray-500 text-center w-full my-5`}>{t('noAccount')} <span className='font-semibold cursor-pointer text-[#451773]' onClick={() => setIsLogin && setIsLogin(false)}>{t('signUp')}</span> </p>
                <button className={`underline text-center w-full cursor-pointer`} onClick={() => { setIsLogin && setIsLogin(false) }}>{t('forgetPassword')}</button>
            </div>
        </div>
    )
}

export default Login