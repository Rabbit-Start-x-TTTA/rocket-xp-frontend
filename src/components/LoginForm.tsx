
'use client'
import { Button } from "./ui/button";
import { Input } from "./ui/input"

export const LoginForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        console.log("อีเมล:", email);
        console.log("รหัสผ่าน:", password);
    };
    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-xl p-8 flex flex-col gap-3">
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                    หรือ
                </span>
            </div>
            <div>
                <Input id="email" name="email" type="email" autoComplete="email" className="w-full p-6 " placeholder="อีเมล" />
            </div>
            <div>
                <Input id="password" name="password" type="password" autoComplete="current-password" className="w-full p-6 " placeholder="รหัสผ่าน" />
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
                href="#"
                className=" flex flex-col items-center justify-center underline-offset-4 hover:underline"
            >
                ลงเบียน
            </a>
        </form>
    )
}