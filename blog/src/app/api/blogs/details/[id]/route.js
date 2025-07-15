import { connectDB } from '@/lib/db';
import Blog from '@/models/blog';
import { NextResponse } from 'next/server';

export async function GET(req, context) {
    console.log("hgsddhdhvhhjj")
    
  try {
    await connectDB();

    const  id  =context.params.id

    const blog = await Blog.findById(id);
    console.log("blogv",blog);
    
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
