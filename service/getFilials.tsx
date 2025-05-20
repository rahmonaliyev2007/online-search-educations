"use client"
import { instance } from "@/hooks/instance"
import { useQuery } from "@tanstack/react-query"

export const getBanners = () => { 
    const {data = [], isLoading, isFetching, isError} = useQuery(({
        queryKey: ["filials"],
        queryFn: () => instance().get('/resources').then(res => res?.data?.data)
    }))
    return {data, isLoading, isFetching, isError}
}