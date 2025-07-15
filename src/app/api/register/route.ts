import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type");

    // STEP 1: JSON (email + password)
    if (contentType?.includes("application/json")) {
      const { email, password, firstname, lastname, username } = await request.json();

      if (email && password && !firstname && !lastname && !username) {
        console.log("Step 1: Email registration");
        console.log("Email:", email);
        console.log("Password:", password);
        return NextResponse.json({ message: "Email step completed" }, { status: 201 });
      }

      return NextResponse.json({ message: "Incomplete JSON data" }, { status: 400 });
    }

    // STEP 2: multipart/form-data (firstname, lastname, username, profileImage)
    if (contentType?.includes("multipart/form-data")) {
      const formData = await request.formData();

      const firstname = formData.get("firstname") as string;
      const lastname = formData.get("lastname") as string;
      const username = formData.get("username") as string;
      const file = formData.get("profileImage") as File | null;

      if (!firstname || !lastname || !username) {
        return NextResponse.json({ message: "Missing profile fields" }, { status: 400 });
      }

      let imagePath = null;

      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}-${file.name}`;
        const uploadDir = path.join(process.cwd(), "public/uploads");
        const filePath = path.join(uploadDir, filename);

        await mkdir(uploadDir, { recursive: true }); 
        await writeFile(filePath, buffer);

        imagePath = `/uploads/${filename}`;
      }

      console.log("Step 2: Profile creation");
      console.log("Firstname:", firstname);
      console.log("Lastname:", lastname);
      console.log("Username:", username);
      console.log("Image:", imagePath ?? "No image uploaded");

      return NextResponse.json({ message: "Profile step completed", imagePath }, { status: 201 });
    }

    // Unsupported content-type
    return NextResponse.json({ message: "Unsupported Content-Type" }, { status: 400 });

  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ message: "Registering Failed" }, { status: 500 });
  }
}
