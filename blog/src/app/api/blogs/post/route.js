
import { connectDB } from '@/lib/db'
import Blog from '@/models/blog'
import { NextResponse } from 'next/server'

export async function POST(req) {
    const body = await req.json()
    const { title, category, content,image } = body
  await connectDB()
  const blog = await Blog.create({
    title, category, content,image

  })
  return NextResponse.json(blog)
}

