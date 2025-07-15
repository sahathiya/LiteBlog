
import { connectDB } from '@/lib/db'
import User from '@/models/user'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookie from 'cookie';
export async function POST(req) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
  }

  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

  const res = NextResponse.json({
    message: "Login successful",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    token,
  });

  // Set token in HTTP-only cookie (secure way)
//   res.headers.set(
//     "Set-Cookie",
//     cookie.serialize("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       maxAge: 60 * 60 * 24, // 1 day
//       sameSite: "strict",
//       path: "/",
//     })
//   );

  return res;
}



