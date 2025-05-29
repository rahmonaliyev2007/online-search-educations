'use client'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { Context } from '@/context/Context'
import authService from '@/service/Auth'
import { getMyData } from '@/service/getMyData'
import { AuthPropsTypes, ErrorType } from '@/types/AuthType'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

const Login = ({ isLoginOpen, setIsLogin, setIsModalOpen }: AuthPropsTypes) => {
    const t = useTranslations("Auth");
    const [userData, setUserData] = useState({ email: 'rahmonaliyevabdulaziz2007@gmail.com', password: 'GalaxyS205G' });
    const [error, setError] = useState({ email: false, password: false });
    const { mutate, isPending } = authService('/users/login');
    const {isLogged, setIsLogged} = useContext(Context)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors: ErrorType = { email: userData.email.trim() === '', password: userData.password.trim() === '', };
        setError(newErrors);
        const isValid = !newErrors.email && !newErrors.password;
        if (!isValid) return;

        mutate(userData, {
            onSuccess: () => {
                setIsLogged(true);
                setIsModalOpen(false);
            }
        });
    }
    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className={`flex items-center justify-between h-full containers transition-all duration-1000 ${isPending && 'opacity-20 pointer-events-none'}`}>
            <div className={`flex flex-col justify-center items-center gap-[4rem] duration-1000 ${isLoginOpen ? 'translate-y-0' : 'translate-y-[100vh]'}`}>
                <h2 className={`text-[#451773] font-semibold text-4xl `}>{t('welcomeBack')}</h2>
                <div className='group'>
                    <Image width={400} height={400} alt='login image' className={`relative z-[1] duration-1000 group-hover:translate-y-[-30px]`} src={'https://findedu-client.netlify.app/assets/register-BcC99wq6.png'} />
                    <Image width={400} height={400} alt='login image' className={`translate-y-[-50%]`} src={'https://findedu-client.netlify.app/assets/purple-Ky09xThf.png'} />
                </div>
            </div>
            <div className={`w-full max-w-[50%] duration-1000 ${isLoginOpen ? 'translate-y-0' : '-translate-y-[100vh]'}`}>
                <form onSubmit={handleSubmit} className={`bg-white p-7 rounded-xl w-full shadow-xl`}>
                    <h3 className={`text-4xl font-bold text-[#451773] text-center mb-8`}>{t('signIn')}</h3>
                    <div className='flex flex-col gap-4'>

                        <Input type="text" placeholder={t('name')} name='email' value={userData.email} onChange={handleChangeValue} extraStyle={`${error.email && 'border-red-500 placeholder:text-red-500'}`} />
                        <Input type="text" placeholder={t('password')} name='password' value={userData.password} onChange={handleChangeValue} extraStyle={`${error.password && 'border-red-500 placeholder:text-red-500'}`} />
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