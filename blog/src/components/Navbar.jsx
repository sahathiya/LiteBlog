"use client";

import { useCurrentUserStore } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import { IoIosNotifications } from "react-icons/io";
function Navbar() {
  const currentUser = useCurrentUserStore((state) => state.currentUser);
  const setCurrentUser = useCurrentUserStore((state) => state.setCurrentUser);
  const route = useRouter();
  const navItems = [
    { id: 1, label: "Home", link: `${currentUser!==null?'/home':'/'}` },
    { id: 2, label: "About", link: "/about" },
    { id: 3, label: "Blogs", link: "/blog/blogs" },
    { id: 4, label: "Contact", link: "/contact" },
  ];

  console.log("currentUser", currentUser);
  const handleLogout = () => {
    setCurrentUser(null);
    toast.success("User Logout successfully");
    route.push("/");
  };
  return (
    <header className="relative py-4 md:py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#"
              title=""
              className="flex font-bold text-2xl rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              LiteBlog
            </a>
          </div>

          <div className="flex lg:hidden">
            <button type="button" className="text-gray-900">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
            {navItems.map((item) => (
              <Link
                href={`${item.link}`}
                key={item.id}
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            

            {currentUser !== null ? (
              <div className="flex items-center space-x-4">
                {/* Notification Bell */}
                <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                  
                  <IoIosNotifications className="text-xl" />
                  <span className="sr-only">Notifications</span>
                  {/* <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span> */}
                </button>

                {/* Vertical Divider */}
                <div className="hidden md:block h-6 w-px bg-gray-200"></div>

                {/* Profile Dropdown */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 focus:outline-none group">
                    <div className="relative">
                      <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
                        <img
                          src={
                            currentUser.image ||
                            "https://randomuser.me/api/portraits/men/32.jpg"
                          }
                          alt="User"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span>
                    </div>
                    <div className="hidden lg:flex flex-col items-start">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                        {currentUser.name || "User"}
                      </span>
                      <span className="text-xs text-gray-500">
                        {currentUser.role || "Member"}
                      </span>
                    </div>
                    <i className="fas fa-chevron-down text-xs text-gray-500 hidden lg:inline group-hover:text-blue-600 transition-transform duration-200"></i>
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-1 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 border border-gray-100">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 overflow-hidden mr-3">
                          <img
                            src={
                              currentUser.profileImage ||
                              "https://randomuser.me/api/portraits/men/32.jpg"
                            }
                            alt="User"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {currentUser.name || "User"}
                          </p>
                          <p className="text-sm text-gray-500">
                            {currentUser.email || "user@example.com"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (

              <div className="space-x-4">
                <Link
              href="/auth/login"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Login{" "}
            </Link>


            <Link href="/auth/register">
                <button className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 bg-transparent border border-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 hover:text-white">
                  Get Started
                </button>
              </Link>
              </div>
              
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
