import { ChangeEventHandler, FC, FocusEventHandler } from "react"

export interface InputType {
    placeholder?: string,
    type: 'text' | 'password' | 'number' | "email" | 'file',
    extraStyle?: string
    value?: string | number
    name? : string
    onChange?:ChangeEventHandler<HTMLInputElement>
    onFocus?: FocusEventHandler<HTMLInputElement>;  
    onBlur?: FocusEventHandler<HTMLInputElement>; 
}