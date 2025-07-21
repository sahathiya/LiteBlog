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
  metadataBase:new URL("https://lite-blog-sahathiyas-projects.vercel.app/"),
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
   url:"https://lite-blog-sahathiyas-projects.vercel.app/",
   siteName:"LiteBlog"

  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
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
