'use client'
import { Button } from "../ui/button";
import { Input } from "../ui/input"
import { useState } from "react";

interface LoginFormProps {
    onSubmit: (data: { email: string; password: string }) => void
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({ email, password })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm bg-white rounded-xl p-8 flex flex-col gap-3">
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t mb-3">
                <span className="bg-card text-muted-foreground relative z-10 px-2 ">
                    หรือ
                </span>
            </div>
            <div>
                <Input id="email" name="email" type="email" autoComplete="email" className="w-full p-6 " placeholder="อีเมล"
                    onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
                <Input id="password" name="password" type="password" autoComplete="current-password" className="w-full p-6 " placeholder="รหัสผ่าน"
                    onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline "
            >
                ลืมรหัสผ่าน
            </a>
            <Button type="submit"
                className="w-full p-6 rounded-lg font-bold bg-gradient-to-r from-black to-black text-white text-lg shadow hover:from-input hover:to-input transition-colors my-3">เข้าสู่ระบบ</Button>
            <a
                href="/register"
                className=" flex flex-col items-center justify-center underline-offset-4 hover:underline"
            >
                ลงเบียน
            </a>
        </form>
    )
}