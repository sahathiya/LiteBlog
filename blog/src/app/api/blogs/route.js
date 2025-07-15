
import { connectDB } from '@/lib/db'
import Blog from '@/models/blog'
import { NextResponse } from 'next/server'

export async function GET() {
  await connectDB()
  const blogs = await Blog.find()
  return NextResponse.json(blogs)
}

