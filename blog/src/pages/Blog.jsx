
"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { useBlogStore } from '@/lib/store'
import { useRouter } from 'next/navigation'

function Blog() {
  const router=useRouter()
    // const [blogs,setBlogs]=useState([])
    const blogs=useBlogStore((state)=>state.blogs)
   const setBlogs=useBlogStore((state)=>state.setBlogs)
useEffect(()=>{
const fetch=async()=>{
    const response=await axios.get("/api/blogs")
    console.log("response",response);
    setBlogs(response.data)
}
fetch()

},[])

  return (

     <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">From the blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
        </div>


        <div 
         
        className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs?.map((blog) => (
            <article key={blog._id} className="flex max-w-xl flex-col items-start justify-between">
               <div className="flex items-center gap-x-4 text-xs rounded-md">
  <Image
    src={blog.image ||""}
    alt="Blog image"
    width={300}
    height={200}
    className="rounded-md object-cover"
  />
</div>

              <div 
             onClick={()=>router.push(`/blog/blogs/${blog._id}`)}
              className="flex items-center gap-x-4 text-xs">
                <time dateTime={blog.createdAt} className="text-gray-500">
                  {blog.createdAt}
                </time>
                 <Link
                  href=""
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {blog.category}
                </Link> 
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="">
                    <span className="absolute inset-0" />
                    {blog.title}
                   </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{blog.content}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image alt="author" src={blog.profileImage} className="size-10 rounded-full bg-gray-50" width={10} height={10}/>
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <Link href="">
                      <span className="absolute inset-0" />
                      {blog.author}
                    </Link>
                  </p>
                  <p className="text-gray-600">{blog.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>




      </div>
    </div>
  )
}

export default Blog
