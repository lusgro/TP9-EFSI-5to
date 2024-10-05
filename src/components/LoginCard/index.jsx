'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from 'axios'
import { useRouter } from "next/navigation"
import { useLogin } from "@/hooks/useLogin"

export default function LoginCard() {
  const router = useRouter();
  const [ user, setUser ] = useState()
  const [ pass, setPass ] = useState()
  const [ error, setError ] = useState()
  const { storageToken } = useLogin()

  const loginUser = async () => {
    try {
      if(!user || !pass) {
        setError('Hay un campo incompleto.')
        return
      }
      const response = await axios.post('http://localhost:4000/api/user/login', {
        username: user,
        password: pass
      })
      if(response) {
        storageToken({
          token: response.data.token,
          username: user
        })
        router.push('/')
      }
    }
    catch (e) {
      setError(e.message)
      console.log(e)
    }
  }

  const handleClick = () => {
    router.push('/signup')
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
        <CardDescription>Ingresa tus datos debajo para iniciar sesión en tu cuenta.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="" onKeyUp={(e) => setUser(e.target.value)} required/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" placeholder="" onKeyUp={(e) => setPass(e.target.value)} required/>
        </div>
        {
          error && <p className="text-red-700">{error}</p>
        }
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" onClick={loginUser}>
          Iniciar Sesión
        </Button>
      </CardFooter>
      <p className="p-6 pt-0 text-center font-bold cursor-pointer" onClick={handleClick}>No tengo una cuenta</p>
    </Card>
  )
}