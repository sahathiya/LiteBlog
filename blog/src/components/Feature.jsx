"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Count from "./CountUp";
import { useRouter } from "next/navigation";
import { useBlogStore } from "@/lib/store";

function Feature() {
  const blogs=useBlogStore((state)=>state.blogs)
  const setBlogs=useBlogStore((state)=>state.setBlogs)
  // const [blogs, setBlogs] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("/api/blogs");
      setBlogs(response.data);
    };
    fetch();
  }, []);

  return (
    <div className="bg-white w-full min-h-screen px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Featured Articles</h1>
        <p className="text-gray-500 mt-4">
          Discover our most popular and trending blog posts
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 border-t border-gray-200 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0,3).map((blog) => (
          <article
            key={blog._id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <Image
              src={blog.image || ""}
              alt="Blog image"
              width={400}
              height={200}
              className="rounded-lg object-cover h-48 w-full"
            />

            <div className="mt-4 flex items-center gap-2 text-xs">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                {blog.category}
              </span>
            </div>

            <div className="mt-3">
              <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
                <Link href="#">{blog.title}</Link>
              </h3>
              <p className="mt-2 text-gray-600 line-clamp-3 text-sm">
                {blog.content}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
             

              <div className="flex items-center gap-3">
  <div className="w-10 h-10 relative overflow-hidden rounded-full">
    <Image
      src={blog.profileImage}
      alt="author"
      fill
      className="object-cover"
      sizes="40px"
    />
  </div>
  <div className="text-sm">
    <p className="text-gray-900 font-semibold">{blog.author}</p>
  </div>
</div>

              <time className="text-xs text-gray-500">
                {format(new Date(blog.createdAt), "MMMM d, yyyy")}
              </time>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => router.push(`/blog/blogs`)}
          className="bg-black text-white font-semibold px-6 py-3 rounded-md transition duration-200 shadow"
        >
          View all Blogs
        </button>
      </div>

      <div className="mt-4">
        <Count
          to={1000}
          className="text-center text-4xl font-bold text-blue-700"
        />



      </div>
    </div>
  );
}

export default Feature;
