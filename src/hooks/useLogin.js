'use client'
import { TokenContext } from "@/context/token"
import { useContext } from "react"

export function useLogin () {
    const token = useContext(TokenContext)

    if(token == undefined) {
        throw new Error('useLogin must be used within a TokenProvider')
    }

    return token
}