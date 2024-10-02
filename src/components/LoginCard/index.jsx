'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from 'axios'
import { redirect } from "next/navigation"
import { useLogin } from "@/hooks/useLogin"

export default function LoginCard() {
  const [user, setUser] = useState()
  const [pass, setPass] = useState()
  const { storageToken } = useLogin()

  const loginUser = async () => {
    try {
      const response = await axios.post('/api/login', {
        username: user,
        password: pass
      })
      storageToken(response.data.token)
      redirect('/')
    }
    catch (e) {
      console.log(e)
    }
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
          <Input id="username" placeholder="" onKeyUp={(e) => setUser(e.target.value)}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" placeholder="" onKeyUp={(e) => setPass(e.target.value)}/>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full">
          Iniciar Sesión
        </Button>
      </CardFooter>
    </Card>
  )
}