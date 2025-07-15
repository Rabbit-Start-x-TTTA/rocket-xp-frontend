import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const { email, password } = body

  if (email === 'test@example.com' && password === '1234') {
    return NextResponse.json({ message: 'เข้าสู่ระบบสำเร็จ', token: 'mock-token' }, { status: 200 })
  } else {
    return NextResponse.json({ message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' }, { status: 401 })
  }
}