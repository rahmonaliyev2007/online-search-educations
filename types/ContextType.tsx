import { SetStateAction } from "react";

export interface ContextType {
    showCategory: boolean,
    setShowCategory : React.Dispatch<SetStateAction<boolean>>
    isLogged: boolean | string | any,
    setIsLogged : React.Dispatch<SetStateAction<any>>
}