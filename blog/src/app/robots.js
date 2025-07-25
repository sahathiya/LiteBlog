export default function robots(){
    return{
        rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/private/',
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`,
    }
}