
import { connectDB } from '@/lib/db'
import User from '@/models/user'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST(req) {
   const body = await req.json()
    const { name, email, password } = body
console.log(" name, email, password", name, email, password);

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    await connectDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: "Email already registered" }, { status: 409 })
    }
const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password:hashedPassword }) // Ideally, hash the password
    return NextResponse.json({ user: newUser, message: "User created" }, { status: 201 })

}




