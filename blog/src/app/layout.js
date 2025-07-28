import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://lite-blog-nine.vercel.app"),
  title: {
    default: "LiteBlog-Your Words Your Space",
    template: "%s - LiteBlog",
  },
  description: "Come and read awesome blogs",

  keywords: [
    "LiteBlog",
    "Blogs",
    "Tech Blogs",
    "Programming Blogs",
    "Web Development",
    "Frontend Blogs",
    "Backend Blogs",
    "JavaScript Blogs",
    "React Blogs",
    "Next.js Blogs",
    "Software Development",
    "Developer Stories",
    "Coding Tutorials",
    "Tech News",
    "Full Stack Development",
    "Web Dev Community",
    "Personal Blog",
    "Engineering Blogs",
    "Tech Insights",
    "Fathima Sahathiya Blog",
  ],

  authors: [
    { name: "Fathima Sahathiya", url: "https://lite-blog-nine.vercel.app" },
  ],
  creator: "Fathima Sahathiya",
  publisher: "Fathima Sahathiya",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "LiteBlog-Your Words. Your Space",
    description: "Come and read awesome blogs",
    type: "website",
    locale: "en_US",
    url: "https://lite-blog-nine.vercel.app",
    siteName: "LiteBlog",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="LWiIorT8qhB7pLDgQE2fvxGBM6Dsd7q5VMnyOqIfcuQ"
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

       

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
