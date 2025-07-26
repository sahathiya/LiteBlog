export default function robots(){
    return{
        rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`,
    }
}