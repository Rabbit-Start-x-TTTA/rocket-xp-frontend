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
      const res = await fetch("http://localhost:8000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (res.status === 201) {
        setIsSuccess(true)
        setMessage("ล็อคอินสำเร็จ");
        localStorage.setItem("token", result.token);
        setTimeout(() => {
          router.push("/profile");
        }, 1000);
      } else {
        setIsSuccess(false)
        setMessage("อีเมล หรือ รหัสผ่านไม่ถูกต้อง");
      }
    } catch (err) {
      setIsSuccess(false)
      setMessage("เกิดข้อผิดพลาด");
    }


  }
  return (
    <div>
      {message && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded shadow-lg text-secondary-foreground font-semibold transition-opacity duration-500 z-50 ${
            isSuccess ? "bg-chart-2" : "bg-chart-1"
          }`}
        >
          {message}
        </div>
      )}
      <div className="flex flex-col items-center justify-center flex-1 pt-25">
        <Image src="/logo.png" alt="Rocket XP Logo" width={120} height={120} priority className="mb-6" />
        <FormGoogle />
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  )

} 