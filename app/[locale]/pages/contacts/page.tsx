"use client"
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

function ContactsPage() {
  const t = useTranslations('ContactPage')

  return (
    <>
      <div className='containers'>
        contact page
      </div>
    </>
  )
}

export default ContactsPage