// "use client";
// import { useBlogStore } from "@/lib/store";
// import axios from "axios";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import React, { useEffect } from "react";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// function BlogDetails({ id }) {
//   const router = useRouter();

//   const blog = useBlogStore((state) => state.blog);
//   const setBlog = useBlogStore((state) => state.setBlog);

//   console.log("id", id);

//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(`/api/blogs/details/${id}`);
//       console.log("response", response);
//       setBlog(response.data);
//     };
//     fetch();
//   }, []);
//   console.log("blog", blog);
//   return (
//     <div>
//       <Navbar />
//       <div className="text-center pt-10 md:pt-32 bg-gray-100">
//         <p className="text-sm md:text-base text-green-500 font-bold">
//           {new Date(blog?.createdAt).toLocaleDateString("en-US", {
//             day: "2-digit",
//             month: "long",
//             year: "numeric",
//           })}
//         </p>
//         <h1 className="font-bold break-normal text-3xl md:text-5xl">
//           {blog?.title}
//         </h1>

//         <div className="flex w-full items-center font-sans p-8 md:p-24">
//           <img
//             className="w-10 h-10 rounded-full mr-4"
//             src={blog?.profileImage || "http://i.pravatar.cc/300"}
//             alt="Avatar of Author"
//           />
//           <div className="flex-1">
//             <p className="text-base font-bold  md:text-xl leading-none">
//               LiteBlog
//             </p>
//             <p className="text-gray-600 text-xs md:text-base">
//               Simple and intuitive writing experience by{" "}
//               <a
//                 className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
//                 href="https://www.tailwindtoolbox.com"
//               >
//                 {blog?.author}
//               </a>
//             </p>
//           </div>
//           <div className="justify-end"></div>
//         </div>
//       </div>

//       {/* Blog Image */}
//       <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded">
//         {blog?.image && (
//           <Image
//             src={blog?.image}
//             width={800}
//             height={400}
//             alt={blog?.title || "Blog image"}
//             className="rounded-lg shadow-md mx-auto"
//           />
//         )}
//       </div>

//       {/* Blog Content */}
//       <div className="container max-w-5xl mx-auto -mt-32">
//         <div className="mx-0 sm:mx-6">
//           <div
//             className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
//             style={{ fontFamily: "Georgia, serif" }}
//           >
//             <p className="mt-10">{blog?.content}</p>
//           </div>
//         </div>
//       </div>

//       <div className="container font-sans bg-gray-100 rounded mt-8 p-4 md:p-24 text-center">
//         <h2 className="font-bold break-normal text-2xl md:text-4xl">
//           Subscribe to LiteBlog
//         </h2>
//         <h3 className="font-bold break-normal  text-gray-600 text-base md:text-xl">
//           Get the latest blogs delivered right to your inbox
//         </h3>
//         <div className="w-full text-center pt-4">
//           <form action="#">
//             <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
//               <input
//                 type="email"
//                 placeholder="youremail@example.com"
//                 className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-black text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
//               >
//                 Subscribe
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default BlogDetails;



"use client";

import { useBlogStore } from "@/lib/store";
import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Subscribe from "./Subscribe";

function BlogDetails({ id }) {
  const blog = useBlogStore((state) => state.blog);
  const setBlog = useBlogStore((state) => state.setBlog);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`/api/blogs/details/${id}`);
        setBlog(response.data);
      } catch (err) {
        console.error("Error fetching blog details:", err);
      }
    };
    fetch();
  }, [id]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-xl">Loading blog details...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />

      {/* Header */}
      <div className="text-center pt-10 md:pt-24 px-4">
        <p className="text-sm md:text-base text-green-600 font-medium">
          {new Date(blog?.createdAt).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <h1 className="font-bold text-3xl md:text-5xl mt-4">{blog?.title}</h1>

        {/* Author */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={blog?.profileImage || "https://i.pravatar.cc/100"}
            alt="Author"
          />
          <div className="text-left">
            <p className="text-md font-semibold">LiteBlog</p>
            <p className="text-sm text-gray-500">
              By{" "}
              <span className="text-green-600 font-medium">
                {blog?.author}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      {blog?.image && (
        <div className="max-w-6xl mx-auto mt-10 px-4">
          <Image
            src={blog?.image}
            width={1200}
            height={600}
            alt={blog?.title}
            className="w-full rounded-xl shadow-md object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto mt-16 px-4 md:px-0">
        <div
          className=" p-6 md:p-12 text-lg md:text-xl leading-relaxed"
          style={{ fontFamily: "Georgia, serif" }}
        >
          <p>{blog?.content}</p>
        </div>
      </div>

      

             {/* <div className="container font-sans bg-gray-100 rounded mt-8 p-4 md:p-24 text-center">
         <h2 className="font-bold break-normal text-2xl md:text-4xl">
           Subscribe to LiteBlog
         </h2>         <h3 className="font-bold break-normal  text-gray-600 text-base md:text-xl">
           Get the latest blogs delivered right to your inbox
         </h3>
         <div className="w-full text-center pt-4">
           <form action="#">
            <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
               <input
                type="email"
                placeholder="youremail@example.com"
                className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
              />
              <button
                type="submit"
                className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-black text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-green-400"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div> */}
      <Subscribe/>

      <Footer />
    </div>
  );
}

export default BlogDetails;
