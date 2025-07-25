
import BlogDetails from '@/components/BlogDetails'
import axios from 'axios';

import React from 'react'


export async function generateMetadata({ params }) {
const baseurl=process.env.NEXT_PUBLIC_BASE_URL
console.log("baseurl",baseurl);

    const response = await axios.get(`/api/blogs/details/${params.id}`);
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
          url:blog.image||"",
          width: 800,
          height: 600,
          alt: blog.title,
        }
       ]
    
    }

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
