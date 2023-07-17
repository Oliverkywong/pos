import axios from "axios"
import { AppDispatch } from "../../store"

export function canAccess(token: string) {
    return {
        type: '@@auth/CAN_ACCESS' as const,
        token
    }
}

type CanAccessAction = ReturnType<typeof canAccess> 

export type AuthAction = CanAccessAction 

export function access(token: string) {
 return (dispatch: AppDispatch) => {
    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    dispatch(canAccess(token))
 }
}