"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useBlogStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";

function Blog() {
  const router = useRouter();

  const blogs = useBlogStore((state) => state.blogs);

  return (
    // <>
    //   <Navbar />

    //   <div className="bg-white py-24 sm:py-32">
    //     <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //       <div className="mx-auto max-w-2xl lg:mx-0">
    //         <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
    //           From the blog
    //         </h2>
    //         <p className="mt-2 text-lg/8 text-gray-600">
    //           Learn how to grow your business with our expert advice.
    //         </p>
    //       </div>

    //       <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
    //         {blogs?.map((blog) => (
    //           <article
    //             key={blog._id}
    //             className="flex max-w-xl flex-col items-start justify-between"
    //           >
    //             <div
    //               onClick={() => router.push(`/blog/blogs/${blog._id}`)}
    //               className="flex items-center gap-x-4 text-xs rounded-md"
    //             >
    //               <Image
    //                 src={blog.image || ""}
    //                 alt="Blog image"
    //                 width={300}
    //                 height={200}
    //                 className="rounded-md object-cover"
    //               />
    //             </div>

    //             <div className="flex  justify-between space-x-10 ">
    //               <p className="text-xs text-gray-500 font-medium">
    //                 {new Date(blog?.createdAt).toLocaleDateString("en-US", {
    //                   day: "2-digit",
    //                   month: "long",
    //                   year: "numeric",
    //                 })}
    //               </p>
    //               <Link
    //                 href=""
    //                 className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 text-xs"
    //               >
    //                 {blog.category}
    //               </Link>
    //             </div>
    //             <div className="group relative">
    //               <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
    //                 <a href="">
    //                   <span className="absolute inset-0" />
    //                   {blog.title}
    //                 </a>
    //               </h3>
    //               <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
    //                 {blog.content}
    //               </p>
    //             </div>
    //             <div className="relative mt-8 flex items-center gap-x-4">
    //               <Image
    //                 alt="author"
    //                 src={blog.profileImage}
    //                 className="size-10 rounded-full bg-gray-50"
    //                 width={10}
    //                 height={10}
    //               />
    //               <div className="text-sm/6">
    //                 <p className="font-semibold text-gray-900">
    //                   <Link href="">
    //                     <span className="absolute inset-0" />
    //                     {blog.author}
    //                   </Link>
    //                 </p>
    //                 <p className="text-gray-600">{blog.role}</p>
    //               </div>
    //             </div>
    //           </article>
    //         ))}
    //       </div>
    //     </div>
    //   </div>

    //   <Subscribe />
    //   <Footer />
    // </>



    <>
  <Navbar />

  <section className="bg-white py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          From the Blog
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Learn how to grow your business with expert insights and real stories.
        </p>
      </div>

      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog) => (
          <article
            key={blog._id}
            className="group flex flex-col rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
          >
            <div
              className="cursor-pointer"
              onClick={() => router.push(`/blog/blogs/${blog._id}`)}
            >
              <Image
                src={blog.image || ""}
                alt={blog.title}
                width={600}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>
                  {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                  {blog.category}
                </span>
              </div>

              <h3 className="mt-3 text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors line-clamp-2">
                <Link href={`/blog/blogs/${blog._id}`}>
                  <span className="absolute inset-0" />
                  {blog.title}
                </Link>
              </h3>

              <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                {blog.content}
              </p>

              <div className="mt-6 flex items-center gap-x-4">
                <Image
                  src={blog.profileImage || "http://i.pravatar.cc/300"}
                  alt="Author"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    {blog.author}
                  </p>
                  <p className="text-gray-500 text-xs">{blog.role}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  <Subscribe />
  <Footer />
</>

  );
}

export default Blog;
