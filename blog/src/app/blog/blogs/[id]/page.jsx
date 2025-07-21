
import BlogDetails from '@/pages/BlogDetails'
import axios from 'axios';
import React from 'react'


// export async function generateMetadata({ params }) {
//   try {
//     const response = await axios.get(`http://localhost:3000/api/blogs/details/${params.id}`);
//     const blog = response.data;

//     return {
//       title: blog.title,
//       description: blog.content?.slice(0, 150) || 'Blog post detail',
//       openGraph:{
//         images:{
//           url:post.image
//         }
//       }
//     };
//   } catch (error) {
//     console.error('Metadata fetch failed:', error);
//     return {
//       title: 'Blog not found',
//     };
//   }
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
