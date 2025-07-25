import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase:new URL("https://lite-blog-nine.vercel.app"),
  title:{
    default:"LiteBlog-Your Words Your Space",
    template:"%s - LiteBlog"
  },
  description: "Come and read awesome blogs",

  openGraph:{
   title:"LiteBlog-Your Words. Your Space",
   description: "Come and read awesome blogs",
   type:"website",
   locale:"en_US",
   url:"https://lite-blog-nine.vercel.app",
   siteName:"LiteBlog"

  },
  verification: {
    google: 'LWiIorT8qhB7pLDgQE2fvxGBM6Dsd7q5VMnyOqIfcuQ', // Replace with your verification code
  },
  

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <meta name="google-site-verification" content="LWiIorT8qhB7pLDgQE2fvxGBM6Dsd7q5VMnyOqIfcuQ" /> */}
      
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
