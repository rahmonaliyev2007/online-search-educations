"use client"
import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import { AuthPropsTypes } from '@/types/AuthType';

function Auth({setIsModalOpen}:AuthPropsTypes) {
    const [isLoginOpen, setIsLogin] = useState(true);
  return (
    <>
        <Login isLoginOpen={isLoginOpen} setIsLogin={setIsLogin} setIsModalOpen={setIsModalOpen} />
        <Register isLoginOpen={isLoginOpen} setIsLogin={setIsLogin} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default Auth