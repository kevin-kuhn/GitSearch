import { useAxios } from './use-axios'
import { useCallback } from 'react'

export const useApi = () => {

    const axios = useAxios(
        'https://api.github.com/search'
    )

    const getUsers = async user => {
        try {
            const response = await axios.get(`/users?q=${user}&per_page=10`)
            return response.data
        } catch (error) {
            return error
        }
    }

    return useCallback({
        getUsers
    }, [])
}