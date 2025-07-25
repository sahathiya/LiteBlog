
import BlogDetails from '@/components/BlogDetails'
import axios from 'axios';

import React from 'react'


// export async function generateMetadata({ params }) {
// const baseurl=process.env.NEXT_PUBLIC_BASE_URL
//     const response = await axios.get(`${baseurl}/api/blogs/details/${params.id}`);
//     const blog = response.data;
// console.log("params",await params);

//     return {
//       title: blog.title,
//       description: blog.content?.slice(0, 150) || 'Blog post detail',
      
//       openGraph:{
//        images:[
//         {
//           url:blog.image
//         }
//        ]
    
//     }

// }
// }
function page({params}) {
     const id = params.id;
  return (
    <div>
      <BlogDetails id={id}/>
    </div>
  )
}

export default page
