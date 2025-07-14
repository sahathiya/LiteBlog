
import { connectDB } from '@/lib/db'
import User from '@/models/user'
import { NextResponse } from 'next/server'

export async function POST(req) {
   const body = await req.json()
    const { name, email, password } = body

    if (!name || !email || !password) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    await connectDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ message: "Email already registered" }, { status: 409 })
    }

    const newUser = await User.create({ name, email, password }) // Ideally, hash the password
    return NextResponse.json({ user: newUser, message: "User created" }, { status: 201 })

}