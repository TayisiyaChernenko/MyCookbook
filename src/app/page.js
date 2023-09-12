import { Login } from "../components/auth/Login"
import { SessionProvider } from "next-auth/react"

export default function Home() {
  return (
       <Login />
  )
}

