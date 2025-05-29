"use client"
import { ContextType } from "@/types/ContextType";
import { getCookie } from "cookies-next";
import { createContext, FC, ReactNode, useState } from "react"

export const Context = createContext<ContextType>({
    showCategory: false,
    setShowCategory: () => false,
    isLogged :  false ,
    setIsLogged: ()=> false,
});

export const CotegoryContext: FC<{ children: ReactNode }> = ({ children }) => {
    const [showCategory, setShowCategory] = useState<boolean>(false)
    const [isLogged, setIsLogged] = useState(getCookie('NEXT_TOKEN') ? true : false)
 return(
    <Context.Provider value={{setShowCategory, showCategory, isLogged, setIsLogged}}>{children}</Context.Provider>
 )
} 