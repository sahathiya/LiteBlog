
import BlogDetails from '@/components/BlogDetails'
import axios from 'axios';

import React from 'react'


export async function generateMetadata({ params }) {


try {
  const blogId=params.id
  const baseurl=process.env.NEXT_PUBLIC_API_URL
console.log("baseurl",baseurl,blogId);
  const response = await axios.get(`${baseurl}/api/blogs/details/${blogId}`);
    const blog = response.data;
console.log("params",await params);

    return {
      title: blog.title,
      description: blog.content?.slice(0, 150) || 'Blog post detail',
      
      openGraph:{
        title:blog.title,
        description:blog.content?.slice(0, 150) || 'Blog post detail',
       images:[
        {
          url:blog.image||"https://i.pinimg.com/736x/13/1c/5e/131c5ec506e2e62bac2eb2ab15c90bc6.jpg",
          width: 800,
          height: 600,
          alt: blog.title,
        }
       ]
    
    }

}
} catch (error) {
  console.error("generateMetadata error:", error);
    return {
      title: 'Error',
      description: 'Could not load blog',
    };
}
    
}
function page({params}) {
     const id = params.id;
    const baseurl=process.env.NEXT_PUBLIC_API_URL
    console.log("baseurl...",baseurl);
    
  return (
    <div>
      <BlogDetails id={id}/>
    </div>
  )
}

export default page
