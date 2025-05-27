"use client"
import { ThemeContext } from '@/context/ThemeProvider'
import { InputType } from '@/types/InputType'
import React, { FC, useContext } from 'react'

const Input:FC<InputType> =({placeholder, type, extraStyle, value, name, onChange, onBlur, onFocus})=> {
  const {theme} = useContext(ThemeContext)
  return (
    <input type={type} name={name} onChange={onChange} onBlur={onBlur} onFocus={onFocus} value={value} placeholder={placeholder} className={` py-[14px] w-full pl-[26px] outline-none rounded-[6px] border ${theme === 'dark' ? 'bg-white text-[#131313] border-[#EDEDED]' : 'border-[#EBEFF3] bg-white'} transition-all duration-300 ${extraStyle}`}/>
  )
}

export default Input