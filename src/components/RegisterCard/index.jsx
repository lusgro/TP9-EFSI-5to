'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from 'axios'
import { redirect } from "next/navigation"

export default function RegisterCard() {
  const [ user, setUser ] = useState('')
  const [ name, setName ] = useState('')
  const [ last, setLast ] = useState('')
  const [ pass, setPass ] = useState('')

  const registerUser = async () => {
    try {
      const res = await axios.post('http::/localhost:4000/api/user/register', {
        first_name: name,
        last_name: last,
        username: user,
        password: pass
      })
      if(res) redirect("/login")
    }
    catch (e) {
      console.log(e)
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl">Creá tu cuenta</CardTitle>
        <CardDescription>Ingresa tus datos debajo para empezar.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Nombre</Label>
            <Input name="name" id="firstName" placeholder="" value={name} onKeyUp={(e) => setName(e.target.value)} required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Apellido</Label>
            <Input name="lastName" id="lastName" placeholder="" value={last} onKeyUp={(e) => setLast(e.target.value)} required/>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input name="username" id="username" placeholder="" value={user} onKeyUp={(e) => setUser(e.target.value)} required/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input name="password" id="password" type="password" placeholder="" value={pass} onKeyUp={(e) => setPass(e.target.value)} required/>
        </div>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" onSubmit={registerUser}>
          Registrarse
        </Button>
      </CardFooter>
    </Card>
  )
}