import BlogDetails from '@/pages/BlogDetails'
import React from 'react'

function page({params}) {
     const id = params.id;
  return (
    <div>
      <BlogDetails id={id}/>
    </div>
  )
}

export default page
