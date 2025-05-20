"use client"
import { ThemeContext } from "@/context/ThemeProvider";
import { useTranslations } from "next-intl";
import { useContext } from "react";

export default function Home() {
  const t = useTranslations()
  const {theme} = useContext(ThemeContext)
  
  return (
    <div className={`${theme === 'dark' && 'bg-[#313131]'}`}>
    main page
    
    </div>
  );
}
