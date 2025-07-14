

"use client"


import Navbar from '@/components/Navbar'
import { BlurText } from '@/styles/text'
import { useRouter } from 'next/navigation'
import React from 'react'

function Landing() {
  const router=useRouter()
  return (
    <div className="w-full h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-[85vh] text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6 flex flex-wrap items-center gap-2">
  Welcome to
  <BlurText
    text="LiteBlog!"
    delay={200}
    animateBy="words"
    direction="top"
    className="text-5xl sm:text-6xl font-bold text-gray-800"
  />
</h1>


        

        <p className="text-lg sm:text-xl text-gray-700 max-w-xl mb-2">
Discover amazing stories, share your thoughts,


          
        </p>
        <p className="text-lg sm:text-xl text-gray-700 max-w-xl">
          and connect with a community of passionate writers and readers.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-15">
          <button 
           onClick={()=>router.push(`/blog/blogs`)}
          className="bg-black text-white hover:bg-white hover:text-black hover:border border-black rounded-md px-6 py-3 font-medium transition duration-200 shadow-md">
            Explore Blogs
          </button>
          <button 
           onClick={()=>router.push(`/blog/form`)}
          className="bg-white  text-black border border-black hover:bg-black hover:text-white rounded-md px-6 py-3 font-semibold transition duration-200 shadow-md">
            Start Writing
          </button>
        </div>
      </div>
    </div>
  )
}

export default Landing
