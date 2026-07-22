import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import  {  CanceledError, type AxiosRequestConfig } from "axios"




export interface FetchResponse<T> {
    count: number,
    results: T[]
}


const useData = <T>(endponit: string, requestConfig?: AxiosRequestConfig,deps?:any[]) => {
    const [data, setData] = useState<T[]>([])
    const [errors, setErrors] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchResponse<T>>(endponit, { signal: controller.signal, ...requestConfig })
            .then((res) => {
                setData(res.data.results)
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setErrors(err.message)
                setLoading(false)
            })
        return () => controller.abort()
    },deps?[...deps]:[])

    return { data, errors, loading }
}

export default useData