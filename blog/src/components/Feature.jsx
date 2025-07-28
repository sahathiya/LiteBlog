"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import Count from "./CountUp";
import { useRouter } from "next/navigation";
import { useBlogStore } from "@/lib/store";
import { FaArrowRight } from "react-icons/fa6";
import Navbar from "./Navbar";
import { BlurText } from "@/styles/text";
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
//     <div className="bg-white w-full min-h-screen px-6 py-16">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-800">Featured Articles</h1>
//         <p className="text-gray-500 mt-4">
//           Discover our most popular and trending blog posts
//         </p>
//       </div>

//       <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 border-t border-gray-200 pt-10 sm:grid-cols-2 lg:grid-cols-3">
//         {blogs.slice(0,3).map((blog) => (
//           <article
//             key={blog._id}
//             className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300 flex flex-col justify-between"
//           >
//             <Image
//               src={blog.image || ""}
//               alt="Blog image"
//               width={400}
//               height={200}
//               className="rounded-lg object-cover h-48 w-full"
//             />

//             <div className="mt-4 flex items-center gap-2 text-xs">
//               <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
//                 {blog.category}
//               </span>
//             </div>

//             <div className="mt-3">
//               <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition">
//                 <Link href="#">{blog.title}</Link>
//               </h3>
//               <p className="mt-2 text-gray-600 line-clamp-3 text-sm">
//                 {blog.content}
//               </p>
//             </div>

//             <div className="mt-6 flex items-center justify-between">
             

//               <div className="flex items-center gap-3">
//   <div className="w-10 h-10 relative overflow-hidden rounded-full">
//     <Image
//       src={blog.profileImage}
//       alt="author"
//       fill
//       className="object-cover"
//       sizes="40px"
//     />
//   </div>
//   <div className="text-sm">
//     <p className="text-gray-900 font-semibold">{blog.author}</p>
//   </div>
// </div>

//               <time className="text-xs text-gray-500">
//                 {format(new Date(blog.createdAt), "MMMM d, yyyy")}
//               </time>
//             </div>
//           </article>
//         ))}
//       </div>

//       <div className="flex justify-center mt-12">
//         <button
//           onClick={() => router.push(`/blog/blogs`)}
//           className="bg-black text-white font-semibold px-6 py-3 rounded-md transition duration-200 shadow"
//         >
//           View all Blogs
//         </button>
//       </div>

//       <div className="mt-4">
//         <Count
//           to={1000}
//           className="text-center text-4xl font-bold text-blue-700"
//         />



//       </div>
//     </div>

<>

{/* 
    <div className="w-full h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-[85vh] text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6 flex flex-wrap items-center gap-2">
  LiteBlog

</h1>
  <BlurText
    text="Where Simplicity Meets Impact!"
    delay={200}
    animateBy="words"
    direction="top"
    className="text-4xl  font-bold text-gray-800"
  />


        

        <p className="text-lg sm:text-xl text-gray-700 max-w-xl mb-2">
A lightweight platform for powerful blogging.


          
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
    </div> */}



    <div className="w-full h-screen bg-gray-100">
  <Navbar />

  <div className="flex flex-col items-center justify-center h-[85vh] text-center px-4">
    <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
      <span className="text-black">Lite</span>Blog
    </h1>

    <BlurText
      text="Where Simplicity Meets Impact!"
      delay={200}
      animateBy="words"
      direction="top"
      className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4"
    />

    <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-2 leading-relaxed">
      A lightweight platform for powerful blogging—
      crafted for creators, thinkers, and storytellers.
    </p>

    {/* <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mb-6 leading-relaxed">
      Connect with a community of passionate writers and readers.
    </p> */}
{/* 
    <div className="relative flex flex-col sm:flex-row gap-4 mt-6">
       <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        
       </div>
      <button
        onClick={() => router.push(`/blog/blogs`)}
        className="bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black rounded-full px-6 py-3 font-medium transition duration-300 shadow-lg"
      >
        Explore Blogs
      </button>
      <button
        onClick={() => router.push(`/blog/form`)}
        className="bg-white text-black border border-black hover:bg-black hover:text-white rounded-full px-6 py-3 font-medium transition duration-300 shadow-lg"
      >
        Start Writing
      </button>
    </div> */}

    <div className="flex flex-col sm:flex-row gap-4 mt-6">
  {/* Button 1 Wrapper */}
  <div className="relative group rounded-full">
    <div className="absolute -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500 animate-tilt"></div>
    <button
      onClick={() => router.push(`/blog/blogs`)}
      className="relative z-10 bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black rounded-full px-6 py-3 font-medium transition duration-300 shadow-lg"
    >
      Explore Blogs
    </button>
  </div>

  {/* Button 2 Wrapper */}
  <div className="relative group rounded-full">
    <div className="absolute -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500 animate-tilt"></div>
    <button
      onClick={() => router.push(`/blog/form`)}
      className="relative z-10 bg-white text-black border border-black hover:bg-black hover:text-white rounded-full px-6 py-3 font-medium transition duration-300 shadow-lg"
    >
      Start Writing
    </button>
  </div>
</div>

  </div>
</div>




    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-sm font-semibold tracking-wider uppercase text-blue-600">Featured Articles</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Everything You Need to Succeed</h2>
                <p className="max-w-2xl mx-auto text-gray-600 mt-4">
                    Discover our most popular and trending blog posts.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               
            {blogs.slice(0,3).map((blog)=>(
                  <div 
                  key={blog._id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                    {/* <div className="h-48 bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center">
                       
                    </div> */}

                    <Image
              src={blog.image || ""}
              alt="Blog image"
              width={400}
              height={200}
              className="rounded-lg object-cover h-48 w-full"
            />
                    <div className="p-8">
                        <div className=" flex items-center gap-2 text-xs">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                {blog.category}               </span>
             </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 ">{blog.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-5">
                            {blog.content}
                        </p>
                        <a href="#" className="text-blue-600 font-semibold inline-flex items-center">
                            Learn more <FaArrowRight className="ml-2"/>
                        </a>
                    </div>
                </div>
            ))}
                
               
                
                
               
            </div>
        </div>
    </section>
</>

  );
}

export default Feature;
