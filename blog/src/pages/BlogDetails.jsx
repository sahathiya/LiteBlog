"use client"
import { useBlogStore } from '@/lib/store';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';


// export async function generateMetadata(){
//   const response = await axios.get(`/api/blogs/details/${id}`);
//       console.log("response", response);
//  const blog=response.data

//       return{
//         title:blog.title
//       }
// }
 function BlogDetails({ id }) {
 const router=useRouter()
  
  const blog = useBlogStore((state) => state.blog);
  const setBlog = useBlogStore((state) => state.setBlog);
  
  console.log("id",id);
  
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`/api/blogs/details/${id}`);
      console.log("response", response);
      setBlog(response.data);
    };
    fetch();
  }, []);
  console.log("blog", blog);
  return (
    <div>
           <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
       <article
           key={blog?._id}
           className="flex max-w-xl flex-col items-start justify-between"
        >
           <div className="flex items-center gap-x-4 text-xs rounded-md">
            <Image
              src={blog.image}
               alt="Blog image"
               width={300}
               height={200}
               className="rounded-md object-cover"
             />
           </div>

           <div className="flex items-center gap-x-4 text-xs">
             <time dateTime={blog?.createdAt} className="text-gray-500">
               {blog?.createdAt}
             </time>
             <Link
               href=""
               className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
             >
               {blog?.category}
             </Link>
           </div>
           <div className="group relative">
             <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
               <a href="">
                 <span className="absolute inset-0" />
                 {blog?.title}
               </a>
             </h3>
             <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
               {blog?.content}
             </p>
           </div>
           <div className="relative mt-8 flex items-center gap-x-4">
             <Image
               alt="author"
               src={blog?.profileImage}
               className="size-10 rounded-full bg-gray-50"
               width={10}
               height={10}
             />
             <div className="text-sm/6">
               <p className="font-semibold text-gray-900">
                 <Link href="">
                   <span className="absolute inset-0" />
                   {blog?.author}
                 </Link>
               </p>
               <p className="text-gray-600">{blog?.role}</p>
             </div>
           </div>
         </article>
       </div>
<div className="flex justify-center mt-12">
<button
          onClick={() => router.back(-1)}
          className="bg-black text-white font-semibold px-6 py-3 rounded-md transition duration-200 shadow"
        >
          Back
        </button>
</div>

    </div>
  );
}

export default BlogDetails;

