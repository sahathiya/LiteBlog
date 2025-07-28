
// export default async function sitemap() {
   

   
//         const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
//         const data = await response.json();
//         console.log("data....",data);
        
//        const blogs = data;
//         console.log("blogsblogs",blogs);
        
 
//     const blogUrls = blogs.map(({ _id }) =>
//          ({
    
        
//         url: `${process.env.NEXT_PUBLIC_API_URL}/blog/blogs/${_id}`,
//         lastModified: new Date(),
//     })
 
     
   
// );

//     return [
//         {
//             url: process.env.NEXT_PUBLIC_API_URL,
//             lastModified: new Date(),
//             changeFrequency:"Yearly",
//             priority:1
//         },
//         {
//             url: `${process.env.NEXT_PUBLIC_API_URL}/about`,
//             lastModified: new Date(),
//         },
//         {
//             url: `${process.env.NEXT_PUBLIC_API_URL}/blog/blogs`,
//             lastModified: new Date(),
//         },
//         ...blogUrls,
//     ];
// }



export default async function sitemap() {
  let blogs = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
    if (res.ok) {
      const data = await res.json();
      blogs = data || [];
    }
  } catch (err) {
    console.error("Sitemap fetch error:", err.message);
    // Don't crash; just proceed with homepage + static routes
  }

  const blogUrls = blogs.map(({ _id }) => ({
    url: `${process.env.NEXT_PUBLIC_API_URL}/blog/blogs/${_id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: process.env.NEXT_PUBLIC_API_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/blog/blogs`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
