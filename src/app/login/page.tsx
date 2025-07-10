'use client'
import Image from "next/image"
import { LoginForm } from "@/components/login/LoginForm"
import { FormGoogle } from "@/components/login/FormGoogle"
import { useState } from "react"
import { useRouter } from "next/navigation"



export default function LoginPage() {
  const router = useRouter();
  const [message, setMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)


  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      setMessage(result.message || "เข้าสู่ระบบไม่สำเร็จ")

      if (res.status === 200) {
        setIsSuccess(true)
        localStorage.setItem("token", result.token);
        router.push("/profile")
      } else {
        setIsSuccess(false)
      }
    } catch (err) {
      setMessage("Error")
      setIsSuccess(false)
    }


  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center flex-1 pt-25">
        <Image src="/logo.png" alt="Rocket XP Logo" width={120} height={120} priority className="mb-6" />
        <FormGoogle />
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  )
} 