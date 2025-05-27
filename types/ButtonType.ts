import { MouseEventHandler, ReactNode } from "react";

export interface ButtonType {
    icon?: ReactNode,
    iconPosition? : "left" | "right",
    title?: string
    extraStyle?:string
    loading?:boolean
    onClick?: MouseEventHandler<HTMLButtonElement> 
}
