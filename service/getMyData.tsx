"use client"
import { Context } from "@/context/Context"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"
import { useContext } from "react"

export const getMyData = () => {
    const {isLogged} = useContext(Context)
    const {data = [], isLoading, isFetching, isError} = useQuery(({
        queryKey: ["my data"],
        queryFn: () => instance().get('/users/mydata').then(res => res?.data?.data),
        enabled : isLogged
    }))
    
    return {data, isLoading, isFetching, isError}
}