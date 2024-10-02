'use client'
import { createContext, useEffect, useState } from "react"

export const TokenContext = createContext()

export function TokenProvider ({children}) {
    const [token, setToken] = useState()

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if(storedToken){
            setToken(storedToken)
        }
    }, [])

    const storageToken = (newToken) => {
        window.localStorage.setItem('token', newToken)
        setToken(newToken)
    }

    return (
        <TokenContext.Provider value={{
            token,
            storageToken,
            isLoggedIn: !!token
        }}>
            {children}
        </TokenContext.Provider>
    )
}