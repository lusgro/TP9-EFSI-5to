'use client'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactCard () {
  const [ name, setName ] = useState()
  const [ email, setEmail ] = useState()
  const [ message, setMessage ] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Contactanos</CardTitle>
        <CardDescription>Dejanos un mensaje y te responderemos lo más pronto posible.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              placeholder="Tu name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Tu email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea 
              id="message" 
              placeholder="Tu mensaje" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Enviar Mensaje</Button>
        </CardFooter>
      </form>
    </Card>
  )
}