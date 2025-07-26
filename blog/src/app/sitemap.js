
export default async function sitemap() {
   

   
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs`);
        const data = await response.json();
        console.log("data....",data);
        
       const blogs = data;
        console.log("blogsblogs",blogs);
        
 
    const blogUrls = blogs.map(({ _id }) =>
         ({
    
        
        url: `${process.env.NEXT_PUBLIC_API_URL}/blog/blogs/${_id}`,
        lastModified: new Date(),
    })
 
     
   
);

    return [
        {
            url: process.env.NEXT_PUBLIC_API_URL,
            lastModified: new Date(),
            changeFrequency:"Yearly",
            priority:1
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
