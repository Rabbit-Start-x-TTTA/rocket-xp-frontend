"use client";

import React, { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const colors = {
  primary: {
    purple: "#524389",
    pink: "#D63AA2",
  },
};

const RegisterCreate: React.FC = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    firstname: "",
    lastname: "",
  });

  const validateForm = () => {
    const newErrors: typeof errors = { username: "", firstname: "", lastname: "" };
    let valid = true;

    if (!username.trim()) {
      newErrors.username = "กรุณากรอกชื่อผู้ใช้";
      valid = false;
    } else if (!/^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/.test(username)) {
      newErrors.username = "กรุณากรอกชื่อผู้ใช้ใหม่";
      valid = false;
    }

    if (!firstname.trim()) {
      newErrors.firstname = "กรุณากรอกชื่อจริง";
      valid = false;
    }

    if (!lastname.trim()) {
      newErrors.lastname = "กรุณากรอกนามสกุล";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    if (profileImage) {
      formData.append("profileImage", profileImage);
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log("Response:", res.status, data);

      if (res.ok) {
        router.push("/interest-mapping");
      } else {
        console.log(data.message || "ไม่สามารถบันทึกข้อมูลได้");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-200 "
      style={{ backgroundColor: "#F8F4FF" }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6"
      >
        <h1 className="text-2xl text-black font-mono font-bold tracking-tight text-center">
          Profile Info
        </h1>

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center mb-4">
          <label
            htmlFor="profileImage"
            className="cursor-pointer flex items-center justify-center w-16 h-16 rounded-full bg-gray-300 overflow-hidden border-2 border-gray-400 hover:border-blue-500 transition-colors"
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Profile Preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <Image
                src="/profile.png"
                alt="Profile Icon"
                width={64}
                height={64}
              />
            )}
          </label>
          <p className="text-lg font-semibold mt-2">Profile</p>
          <input
            id="profileImage"
            name="profileImage"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Firstname */}
        <div>
          <Label htmlFor="firstname">ชื่อจริง</Label>
          <Input
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            className="block bg-gray-100 p-2 my-1 rounded-md"
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm">{errors.firstname}</p>
          )}
        </div>

        {/* Lastname */}
        <div>
          <Label htmlFor="lastname">นามสกุล</Label>
          <Input
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="block bg-gray-100 p-2 my-1 rounded-md"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm">{errors.lastname}</p>
          )}
        </div>

        {/* Username */}
        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="block bg-gray-100 p-2 my-1 rounded-md"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>

        <Button
          type="submit"
          className="px-8 py-3 rounded-full font-semibold text-white shadow transition-colors mx-auto"
          style={{
            backgroundImage: isHovered
              ? `linear-gradient(to right, ${colors.primary.pink}, ${colors.primary.purple})`
              : `linear-gradient(to right, ${colors.primary.purple}, ${colors.primary.pink})`,
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          Next
        </Button>
      </form>
    </div>
  );
};

export default RegisterCreate;
