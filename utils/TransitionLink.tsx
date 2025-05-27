"use client"

import { Link} from '@/i18n/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
interface Props {
    children: React.ReactNode,
    href: string,
    className: string
}

function sleep (ms: number) {
  return new Promise(resolve =>setTimeout(resolve, ms))
}
const TLink = ({children, href, className}: Props) => {
    const router = useRouter();
    
    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault(); 

        const body = document.querySelector('body');
        body?.classList.add('page-transition');
        await sleep(600);
        router.push(href);
        await sleep(1000);
        body?.classList.remove('page-transition');
    }
  return (
    <Link onClick={handleTransition} href={href} className={className}>{children}</Link>
  )
}

export default TLink