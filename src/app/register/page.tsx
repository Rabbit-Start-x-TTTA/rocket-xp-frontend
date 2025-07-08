"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Register: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const usernameRegex = /^(?=.*[A-Za-z])[A-Za-z0-9]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let newErrors = { ...errors };
    let hasError = false;

    // ชื่อ-นามสกุล: แค่เช็คว่ากรอกหรือไม่
    if (!formData.fullname) {
      newErrors.fullname = "กรุณากรอกชื่อ-นามสกุล";
      hasError = true;
    }

    // username: ภาษาอังกฤษ+เลขเท่านั้น และต้องมีตัวอักษรอังกฤษอย่างน้อย 1 ตัว
    if (!formData.username) {
      newErrors.username = "กรุณากรอกชื่อผู้ใช้";
      hasError = true;
    } else if (!usernameRegex.test(formData.username)) {
      newErrors.username =
        "ชื่อผู้ใช้ต้องประกอบด้วยภาษาอังกฤษและตัวเลขเท่านั้น และต้องมีตัวอักษรภาษาอังกฤษอย่างน้อย 1 ตัว";
      hasError = true;
    }

    // email ตรวจสอบ
    if (!formData.email) {
      newErrors.email = "กรุณากรอกอีเมล";
      hasError = true;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
      hasError = true;
    }

    // password
    if (!formData.password) {
      newErrors.password = "กรุณากรอกรหัสผ่าน";
      hasError = true;
    }

    // confirm password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "รหัสผ่านไม่ตรงกัน";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      console.log("ข้อมูลไม่ครบหรือมีข้อผิดพลาด:", newErrors);
      return;
    }

    console.log("Form Data Submitted:", formData);

    // ส่งข้อมูลไป backend
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend error:", errorData);
        alert("เกิดข้อผิดพลาดในการสมัครสมาชิก: " + errorData.message);
        return;
      }

      const data = await response.json();
      console.log("Backend response:", data);

      router.push("/interest-mapping");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-200">
      <form onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6"
        noValidate>
        <h1 className="text-2xl text-black font-mono font-bold tracking-tight text-center font-poppins">
          สร้างบัญชีใหม่
        </h1>

        <div className="text-gray-500 text-sm font-medium mb-1 font-mono">
          <Label className="pb-2">ชื่อจริง-นามสกุล</Label>
          <Input
            name="fullname"
            className="bg-gray-100"
            value={formData.fullname}
            onChange={handleChange}
          />
          {errors.fullname && (
            <p className="text-red-400 text-xs mt-1">{errors.fullname}</p>
          )}
        </div>

        <div className="text-gray-500 text-sm font-medium mb-1 font-sans">
          <Label className="pb-2">Username</Label>
          <Input
            name="username"
            className="bg-gray-100"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p className="text-red-400 text-xs mt-1">{errors.username}</p>
          )}
        </div>

        <div className="text-gray-500 text-sm font-medium mb-1 font-sans">
          <Label className="pb-2">Email</Label>
          <Input name="email" id="email" type="email" autoComplete="email" className="bg-gray-100" value={formData.email} onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="text-gray-500 text-sm font-medium mb-1 font-mono">
          <Label className="pb-2">รหัสผ่าน</Label>
          <Input name="password" id="password" type="password" autoComplete="current-password" className="bg-gray-100" value={formData.password} onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div className="text-gray-500 text-sm font-medium mb-1 font-mono">
          <Label className="pb-2">ยืนยันรหัสผ่าน</Label>
          <Input name="confirmPassword" id="confirmPassword" type="password" autoComplete="current-password" className="bg-gray-100" value={formData.confirmPassword} onChange={handleChange}/>
          {errors.confirmPassword && (
            <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="w-full flex justify-center">
          <Button
            type="submit"
            className="mb-4 h-14 w-full text-xl rounded-full font-semibold text-white shadow-lg justify-center bg-black hover:bg-gray-800 transition-colors">
            ถัดไป
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
