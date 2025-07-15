
"use client"


import { useCurrentUserStore } from "@/lib/store";
import Link from "next/link";
import React from "react";

function Navbar() {
  const currentUser=useCurrentUserStore((state)=>state.currentUser)
  const setCurrentUser=useCurrentUserStore((state)=>state.setCurrentUser)
  const navItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Blogs", link: "/blogs" },
  ];


  console.log("currentUser",currentUser);
  const handleLogout=()=>{
    setCurrentUser(null)

  }
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
       
        <div className="flex items-center gap-2">
          
          <span className="text-2xl font-bold text-black">LiteBlog</span>
        </div>

        
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="text-gray-700 hover:text-blue-600 transition duration-200 font-medium"
            >
              {item.label}
            </Link>
          ))}

{currentUser!==null?(
 <div>
   <div>{currentUser.name}</div>

  <button onClick={handleLogout}>Logout</button>
 </div>

):(
  <Link href="/auth/register">
            <button className="bg-black text-white font-semibold px-5 py-2 rounded-md transition duration-200 shadow-sm">
              Get Started
            </button>
          </Link>

)}
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
